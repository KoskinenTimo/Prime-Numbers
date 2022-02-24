const express = require('express');
const morgan = require('morgan');
const checksRouter = require('./routes/checks');

const app = express();
const cors = require('cors');

// Logging
app.use(morgan('dev'));

// Cors headers
app.use(cors());

// Frontend files served
app.use(express.static('build'));

// Routes
app.use('/api/checks', checksRouter);

// Health check
app.get('/healthcheck', (req,res) => {
  res.status(200).end();
});

// Send 404 when no matching routes
app.use((req,res) => {
  res.status(404).json({
    message: 'No page found, please check endpoint'
  });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err,req,res,next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;