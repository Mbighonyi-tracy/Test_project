const path = require("path");
const authRoutes = require(path.join(__dirname, "routes/api/auth"));
app.use("/api/auth",authRoutes);

const express = require("express");
const router = express.Router();

// Example test route
router.get("/", (req, res) => {
  res.send("Auth API is working");
});

module.exports = router; // Ensure this is here!