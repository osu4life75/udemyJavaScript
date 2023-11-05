const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');
const cors = require('cors'); // Import the cors package

let formDataArray = []; // Define an array to store form data

function addFormData(formData) {
    formDataArray.push(formData);
}

const corsOptions = {
    origin: '*', // Allow requests from any origin; can be restricted to specific origins in a production environment
    methods: 'GET, POST',
    allowedHeaders: 'Content-Type, Authorization',
};

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submitFormData') {
        // Use cors middleware before processing POST requests
        cors(corsOptions)(req, res, () => {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const formData = parse(body);
                addFormData(formData);
                console.log('Form data received:', formData);
                fs.appendFile('formDataStorage.js', `formDataArray.push(${JSON.stringify(formData)});\n`, (err) => {
                    if (err) throw err;
                    console.log('Form data appended to formDataStorage.js');
                });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Data received' }));
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
