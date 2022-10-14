const moment = require("moment");

const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema({
  post_title: {
    type: String,
    required: true,
  },
  post_description: {
    type: String,
    required: true,
  },
  post_image: {
    type: String,
    required: true,
  },
  post_author: {
    type: String,
    required: true,
  },
  post_category: {
    type: String,
    required: true,
  },
  post_date: {
    type: String,
    default: moment().format("MMM Do YYYY"),
  },
});

module.exports = blogPostSchema;
