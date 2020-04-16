const mongoose = require("mongoose");
const Todo = mongoose.model("Todo", {
  name: {
    type: String,
    required: true,
    trim: true,
    validata(value) {
      if (value.length < 2) {
        throw new Error("the length of todo is less than 2");
      }
    },
  },
  description: {
    type: String,
  },
});
module.exports = Todo;
