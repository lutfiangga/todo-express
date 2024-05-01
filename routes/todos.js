const express = require("express");
const { getTodo, createTodo } = require("../controllers/todos");
const app = express();

// define API
// http://localhost:50501/api/v1/todos
app.get("/todos", getTodo);
app.post("/todos", createTodo);

module.exports = app;
