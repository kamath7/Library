require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const libraryRouter = require("./routes/routes");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", () => console.log("Connected"));

app.use(bodyParser.json());
app.use("/api/books", libraryRouter);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
