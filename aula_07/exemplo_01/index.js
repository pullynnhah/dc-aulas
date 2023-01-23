const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello, NODE!"));

app.get("/query", (req, res) => {
  const { name, age } = req.query;
  res.json({ name, age: Number(age) });
});

app.get("/params/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

app.get("/body", (req, res) => {
  res.json({ body: req.body });
});
app.listen(PORT, () => console.log(`🚀 @: http://localhost:${PORT}`));
