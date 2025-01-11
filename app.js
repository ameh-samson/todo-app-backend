const express = require('express');
const app = express();
const port = 3000;

// middleware to pass json request
app.use(express.json())

// imports todo routes
const todoRoutes = require("./src/routes/todoRoutes")
app.use("/todos", todoRoutes)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})