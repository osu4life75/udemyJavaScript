const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

 //Create a MySQL database connection
 //const db = mysql.createConnection({
//host: 'localhost',
//user: 'your_db_user',
   //password: 'your_db_password',
   //database: 'your_database_name',
// });

//Define a route to handle form submissions
//app.post('/submit', (req, res) => {
//const { firstName, lastName, height, weight, highSchool, gpa, position, otherPositions } = req.body;

//   // Insert the form data into the database
//   const sql = 'INSERT INTO registration (first_name, last_name, height, weight, high_school, gpa, position, other_positions) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//   const values = [firstName, lastName, height, weight, highSchool, gpa, position, otherPositions];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error inserting data into the database:', err);
//       res.status(500).send('Error submitting the form');
//     } else {
//       console.log('Form data inserted into the database');
//       res.status(200).send('Form submitted successfully');
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
