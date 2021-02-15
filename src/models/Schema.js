const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      default: "TommorrowLand",
    },

    booksWritten: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Library", LibrarySchema);
