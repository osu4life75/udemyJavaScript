import cors from 'cors';
import mysql from 'mysql2/promise';
import express from 'express';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const app = express();
app.use(cors());

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_USER);
console.log(process.env.DATABASE); // added missing line

const sqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
};

const pool = mysql.createPool(sqlConfig);

app.post('/submitFormData', async (req, res) => {
  console.log('reqbody', req.body);
  try {
    let recruitinfo = {
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Height: req.body.height,
      Weight: req.body.weight,
      GPA: req.body.gpa,
      HighSchool: req.body.highSchool,
      Postion: req.body.position,
      OtherPosition: req.body.otherPositionsPlayed,
    };

    let databaseTableName = 'recruit_info';

    try {
      const result = await pool.query(`INSERT INTO ${databaseTableName} SET ?`, recruitinfo);
      res.json({ success: true, message: 'Data inserted successfully' });
    } catch (err) {
      console.error('Error inserting data: ', err);
      res.status(500).json({ success: false, message: 'Error inserting data' });
    }
  } catch (error) {
    console.error('Error:', error);
    console.error('Error details:', error.originalError);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// sign up form

// ... (your existing server code)

app.post('/signup', async (req, res) => {
  try {
    let userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    let databaseTableName = 'user_info';  // Create a new table for user information

    try {
      const result = await pool.query(`INSERT INTO ${databaseTableName} SET ?`, userData);
      res.json({ success: true, message: 'Account created successfully' });
    } catch (err) {
      console.error('Error creating account: ', err);
      res.status(500).json({ success: false, message: 'Error creating account' });
    }
  } catch (error) {
    console.error('Error:', error);
    console.error('Error details:', error.originalError);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

