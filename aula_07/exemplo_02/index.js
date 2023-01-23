const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 3001;

const users_db = [];

app.use(express.json());

app.get("/users", (req, res) => res.json(users_db));

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const user = { id: uuid(), name, age };

  users_db.push(user);
  res.status(201).json(user);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const index = users_db.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found!" });

  const updatedUser = { id, name, age };
  users_db[index] = updatedUser;

  res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users_db.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found!" });

  users_db.splice(index, 1);
  res.status(204).json();
});

app.listen(PORT, () => console.log(`🚀 @: http://localhost:${PORT}`));
