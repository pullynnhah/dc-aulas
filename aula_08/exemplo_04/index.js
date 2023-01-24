const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 3001;

const users_db = [];

const checkUserId = (req, res, next) => {
  try {
    const { id } = req.params;

    const index = users_db.findIndex(user => user.id === id);
    if (index === -1) return res.status(404).json({ message: "User not found!" });
    req.userIndex = index;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
app.use(express.json());

app.post("/users", (req, res) => {
  try {
    const { name, age } = req.body;

    try {
      if (age < 18) throw new Error("You are too young!");
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    const user = { id: uuid(), name, age };

    users_db.push(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/users/:id", checkUserId, (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    try {
      if (age < 18) throw new Error("You are too young!");
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    const index = req.userIndex;
    const updatedUser = { id, name, age };
    users_db[index] = updatedUser;

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/users/:id", checkUserId, (req, res) => {
  try {
    const index = req.userIndex;
    users_db.splice(index, 1);
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users", (req, res) => {
  try {
    res.json(users_db);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    console.log("Finally!");
  }
});

app.listen(PORT, () => console.log(`🚀 @: http://localhost:${PORT}`));
