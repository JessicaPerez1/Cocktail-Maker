//DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
//PORT
const PORT = process.env.PORT || 4500;
//MIDDLEWARES
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//ROUTES

//CONNECT MODELS
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cocktailMaker",
  { useNewUrlParser: true }
);
// const db = mongojs(databaseUrl, collections);

//LISTENER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
