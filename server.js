const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

let formDataArray = []; // Define an array to store form data

function addFormData(formData) {
    formDataArray.push(formData);
}

function getAllFormData() {
    return formDataArray;
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submitFormData') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            const formData = parse(body);
            addFormData(formData); // Store form data in the array
            console.log('Form data received:', formData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received' }));
        });
    } else {
        // Your existing file serving logic
        // ...
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
