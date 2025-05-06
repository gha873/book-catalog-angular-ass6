// server.js
const express = require('express');
const path = require('path');
const app = express();

// --- IMPORTANT ---
// Replace 'book-catalog' with the actual name of your project folder inside 'dist/'
// after running 'ng build'. Check your 'dist/' folder to confirm!
const appName = 'book-catalog';
const outputPath = path.join(__dirname, 'dist', appName);
// --- --- --- ---

// Serve static files from the Angular app build output
app.use(express.static(outputPath));

// Handle all other routes and serve the index.html file
app.get('/*', (req, res) => {
    res.sendFile(path.join(outputPath, 'index.html'));
});

// Get port from environment variable or default to 8080
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Serving static files from: ${outputPath}`);
});