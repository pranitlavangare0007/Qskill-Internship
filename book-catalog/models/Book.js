const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: { type: String, trim: true },
    publicationYear: {
      type: Number,
      min: 1000,
      max: new Date().getFullYear()
    },
    availability: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
