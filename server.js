import cors from 'cors';
import sql from 'mssql';
import express from 'express';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const app = express();
app.use(cors());

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sqlConfig = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'your_database',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const pool = new sql.ConnectionPool(sqlConfig);
const poolConnect = pool.connect();

app.post('/submitFormData', async (req, res) => {
    try {
        await poolConnect;
        const request = pool.request();

        const formData = req.body;

        // Assuming your table columns match the form data properties
        const query = `
            INSERT INTO recruitInfo (Column1Name, Column2Name, ...) 
            VALUES ('${formData.firstName}', '${formData.lastName}', ...);
        `;

        const result = await request.query(query);

        console.log('Form data received and saved to the database:', formData);

        res.status(200).json({ message: 'Data received and saved to the database' });
    } catch (error) {
        console.error('Error:', error);
        console.error('Error details:', error.originalError); // Log the originalError
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
