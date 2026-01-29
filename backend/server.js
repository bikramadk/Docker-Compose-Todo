const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);


const TodoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

// CREATE
app.post("/todos", async (req, res) => {
  const todo = await Todo.create({ text: req.body.text, completed: false });
  res.json(todo);
});

// READ
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// UPDATE
app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

const PORT = process.env.BACKEND_PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
