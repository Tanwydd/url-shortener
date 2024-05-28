-- Create the database
CREATE DATABASE url_shortener;

-- Use the new database
USE url_shortener;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the urls table
CREATE TABLE urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    originalUrl TEXT NOT NULL,
    shortUrl VARCHAR(255) NOT NULL UNIQUE,
    userId INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Insert sample data into users table
INSERT INTO users (username, email, password) VALUES 
('testuser', 'testuser@example.com', '$2a$10$N9qo8uLOickgx2ZMRZo5e.pdWpoO8A4e0e5siuW2ZZ/4S7ZZNJV2a'); -- password is "password"

-- Insert sample data into urls table
INSERT INTO urls (originalUrl, shortUrl, userId) VALUES 
('https://www.example.com', 'exmpl', 1),
('https://www.google.com', 'googl', 1);
