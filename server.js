const express = require('express');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');
const listRoutes = require('./routes/listRoutes');

// database
const pool = require('./db');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3003, () => console.log('listening on port 3003'));

// routes //
app.use('/api/todos', todoRoutes);
app.use('/api/lists', listRoutes);