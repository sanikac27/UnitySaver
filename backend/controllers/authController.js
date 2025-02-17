const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const db = require('../db'); // PostgreSQL connection

exports.login =  async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  try {
    const userQuery = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = userQuery.rows[0];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    if (user.session_id) {
      return res.status(403).json({ message: 'User already logged in elsewhere' });
    }
    req.session.userId = user.id;
    const sessionId = req.session.id;
    await db.query('UPDATE users SET session_id = $1 WHERE id = $2', [sessionId, user.id]);
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token, role: user.role });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.register =async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    } 

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (email, password, role) VALUES ($1, $2, $3)', [
      email,
      hashedPassword,
      role || 'user', // Default role is 'user'
    ]);
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.logout= async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(400).json({ message: 'No active session found' });
    }

    await db.query('UPDATE users SET session_id = NULL WHERE id = $1', [userId]);

    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ message: 'Error logging out' });
      }

      res.clearCookie('connect.sid');
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}