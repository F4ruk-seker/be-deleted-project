const express = require('express');
const dbConnection = require('./db');
const todoRouter = require('./routes/todos');

const app = express();
const port = process.env.PORT || 3000;

dbConnection();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the todoRouter for routes starting with /todos
app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
