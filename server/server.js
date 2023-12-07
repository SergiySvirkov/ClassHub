const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase } = require('./config/database');
const routes = require('./routes'); // Import the central routes file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectToDatabase();

// Use the central routes file
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

