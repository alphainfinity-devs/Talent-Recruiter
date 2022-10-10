const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
// this define instance method
todoSchema.methods = {
  findActive: () => {
    return mongoose.model("Todo").find({ status: "active" });
  },
};
// this define static method
todoSchema.statics = {
  findHello: function () {
    return this.find({ title: /hello/i });
  },
};
// query helper method
todoSchema.query = {
  getProtocol(protocol) {
    return this.find({ title: new RegExp(protocol, "i") });
  },
};

module.exports = todoSchema;
