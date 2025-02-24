-- Create the database 
CREATE DATABASE User_Data;

-- Connect to the database
\c User_Data;


-- Create the user table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  profile_pic VARCHAR(255)
);
