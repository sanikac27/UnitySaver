const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db'); // PostgreSQL connection
const { authenticateToken, authorizeRole } = require('./middlewares/authMiddleware');
const authroute=require('./routes/authRoutes');
const app = express();
const userdetails=require('./routes/userRoutes');
const usersettings=require('./routes/settingsRoutes');
// Middleware
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use("/api/setting", usersettings);
app.use("/api/auth", authroute);
app.use("/api/getdetails",authenticateToken,userdetails);

app.listen(5000, () => console.log('Server running on port 5000'));
