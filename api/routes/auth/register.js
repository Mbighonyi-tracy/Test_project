// routes/api/auth.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const pool = require("../../../db"); // Adjust path to your db.js
require("dotenv").config();
const uploads = multer({ dest:"/uploads" }); // save files to upload folder

const router = express.Router();
const app = express();
app.use(cors());


// 1) Setup Multer for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "uploads/");
    destination: "./uploads"  // The folder to store images
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    // Unique file name: e.g., "profile-<username>-timestamp.jpg"
    cb(null, `${baseName}-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

// 2) Register Route
router.post("/register", upload.single("profilePic"), async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!req.file || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // The uploaded file path relative to "uploads" folder
    // const profilePicPath = req.file.filename; 
    const profilePicPath = req.file.path; 


    // Insert into database
    const result = await pool.query(
      "INSERT INTO users (username, password, profile_pic) VALUES ($1, $2, $3) RETURNING *",
      [username, password, profilePicPath]
    );

    const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds for security

router.post("/register", upload.single("profilePic"), async (req, res) => {
  try {
    console.log("recieved data:", req.body);
    console.log("update file:", req.file);
    
    const { username, password } = req.body;
    if (!req.file || !username || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const profilePicPath = req.file.filename; 

    // *Hash the password before saving*
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await pool.query(
      "INSERT INTO users (username, password, profile_pic) VALUES ($1, $2, $3) RETURNING *",
      [username, hashedPassword, profilePicPath]
    );

    return res.json({ success: true, user: result.rows[0] });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});


    return res.json({ success: true, user: result.rows[0] });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

















// import fs from "fs";
// import path from "path";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const formData = await req.formData();
//   const username = formData.get("username");
//   const password = formData.get("password");
//   const profilePic = formData.get("profilePic"); // Get profile picture path from upload API response

//   if (!username || !password || !profilePic) {
//     return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//   }

//   const dbPath = path.join(process.cwd(), "db.json");
  
//   let users = [];
//   if (fs.existsSync(dbPath)) {
//     users = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
//   }

//   users.push({ username, password, profilePic });
//   fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));

//   return NextResponse.json({ success: true });
// }