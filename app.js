const express = require('express');
const app = express();
const port = 3000;

// middleware to pass json request
app.use(express.json())