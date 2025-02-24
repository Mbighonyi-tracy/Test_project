// const express = require("express");
// const cors = require("cors");
// const authRoutes = require("./routes/auth");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const authRoutes = require("./api/routes/auth/login");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve static profile pictures
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./api/routes/auth/register");
// const authRoutes = require("./api/routes/auth");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); // parse form data


// Serve static files in uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use the auth routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





















