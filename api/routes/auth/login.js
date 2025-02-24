// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// // const pool = require("../../db"); // PostgreSQL database connection
// const pool = require("../../../db")
// const router = express.Router();
// require("dotenv").config();

//  router.post("/login", async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Check if user exists
//         const userResult = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
//         if (userResult.rows.length === 0) {
//             return res.status(400).json({ error: "User not found" });
//         }

//         const user = userResult.rows[0];

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         // Send user profile picture
//         res.json({ profilePic: user.profile_pic });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;

// routes/api/auth.js
const express = require("express");
const pool = require("../../../db");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();
const app = express();
app.use(cors());



// Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: "Please provide username and password" });
    }

    // Check user in database
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = result.rows[0];

    // Check password (in a real app, use bcrypt hashing)
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.json({ success: true, profile_pic: user.profile_pic });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

























