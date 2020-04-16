const express = require("express");
const app = express();
const db = require("./mongodb");
const Todo = require("./schema");

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.send({ name: "max" });
  const todo = new Todo({
    name: "make a bad 2",
    description: "no desc",
  });
  todo
    .save()
    .then((todo) => {
      res.status(200).send(todo);
      console.log(todo);
    })
    .catch((e) => console.log(e));
});

app.get("/todos", (req, res) => {
  Todo.find({}).then((todos) => {
    console.log(todos);
    res.status(200).send(todos);
  });
});

app.post("/todos", (req, res) => {
  console.log(req.body);
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => console.log(todo))
    .catch((e) => console.log(e));

  res.status(201).send(req.body);
});

app.listen(port, () => {
  console.log("the server is running!");
});
