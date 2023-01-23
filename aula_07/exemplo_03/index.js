const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 3001;

const users_db = [];

const middleware = (req, res, next) => {
  console.log("middleware 1");
  next();
  console.log("middleware 2");
};

const checkUserId = (req, res, next) => {
  const { id } = req.params;

  const index = users_db.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found!" });
  req.userIndex = index;
  next();
};
app.use(express.json());

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const user = { id: uuid(), name, age };

  users_db.push(user);
  res.status(201).json(user);
});

app.put("/users/:id", checkUserId, (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const index = req.userIndex;
  const updatedUser = { id, name, age };
  users_db[index] = updatedUser;

  res.json(updatedUser);
});

app.delete("/users/:id", checkUserId, (req, res) => {
  const index = req.userIndex;
  users_db.splice(index, 1);
  res.status(204).json();
});

app.use(middleware);
app.get("/users", (req, res) => {
  console.log("/users");
  res.json(users_db);
});

app.listen(PORT, () => console.log(`🚀 @: http://localhost:${PORT}`));
