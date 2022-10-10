const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../Middlewares/checkLogin");
const todoSchema = require("../schemas/todoSchema");
const userSchema = require("../schemas/userSchema");
const router = express.Router();

const User = new mongoose.model("User", userSchema);
const Todo = new mongoose.model("Todo", todoSchema);
// static method class concept using here
router.get("/hello", async (req, res) => {
  const result = await Todo.findHello();
  console.log(result);
  res.send(result);
});
// query helper
router.get("/protocol", async (req, res) => {
  const result = await Todo.find().getProtocol("http");
  console.log(result);
  res.send(result);
});
// instance method using for getting data
router.get("/active", async (req, res) => {
  const todo = new Todo();
  const result = await todo.findActive();
  console.log("hello result", result);
  res.send(result);
});

router.get("/", checkLogin, (req, res) => {
  Todo.find({})
    .select({
      __v: 0,
      _id: 0,
    })
    .populate("user", "name userName status -_id")
    .exec(function (err, result) {
      if (err) return handleError(err);
      console.log("The user is %s", result);
      res.send(result);
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Todo.findOne({ _id: id })
    .select({ _id: 0, __v: 0 }) //hide some column using select
    .then((data) => res.send(data));
});

router.post("/", checkLogin, async (req, res) => {
  try {
    const newTodo = new Todo({
      ...req.body,
      user: req.userId,
    });
    const todo = await newTodo.save();
    await User.updateOne(
      { _id: req.userId },
      {
        $push: {
          todos: todo._id,
        },
      }
    );
    res.send(todo)
  } catch (error) {
    console.log("error occurred" + error);
  }
});
router.post("/all", async (req, res) => {
  console.log(req.body);
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).jsonp({ error: err });
    } else {
      res.status(200).jsonp({ message: Todo });
    }
  });
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  // const title = req.body;
  //  const data = await Todo.updateOne(
  //     { _id: req.params.id },
  //     {
  //       $set: {
  //         title: "title should be change",
  //       },
  //     }
  //     )
  //     // console.log("hey data",data);
  //     if (data.acknowledged) {
  //         res.status(200).json({message:"successfully updated"})
  //     } else {
  //         res.status(500).json({error:"there was an error"})
  //     }

  // if need new value show after update
  const response = Todo.findByIdAndUpdate(
    { _id: id },
    { title: "hello there" },
    { new: true },
    (err, data) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("got data", data);
      }
    }
  );
  // console.log("response",response);
});
router.delete("/:id", async (req, res) => {});

module.exports = router;
