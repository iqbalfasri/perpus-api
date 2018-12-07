var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var database = require("./config/Database.config");

var indexRouter = require("./routes/index");
var pustakaRouter = require("./routes/pustaka");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Connect Database
mongoose.Promise = global.Promise;
mongoose
  .connect(
    database.url,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Berhasil konek ke database");
  })
  .catch(err => {
    console.log("Gagal konek ke database");
  });

app.use("/", indexRouter);
app.use("/api", pustakaRouter);

module.exports = app;
