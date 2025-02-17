
const pool = require('../config/db');

const getUserById =  async (req, res) => {
  const userId = req.params.id;

  try {
    const query = `
      SELECT id, name, email, created_at AS "createdAt", location, mobile 
      FROM users  
      WHERE id = ${userId};
    `;
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getUserById };
