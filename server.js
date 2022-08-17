const express = require('express');
const cors = require('cors');

const todoRouter = require('./routes/todoRoutes');

// database
const pool = require('./db');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3003, () => console.log('listening on port 3003'));

// routes //
// todo routes
app.use('/api/todos', todoRouter);