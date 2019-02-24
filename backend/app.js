const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const mongoDbUrl = 'mongodb+srv://hackutd19:8qNhLzO3D4Gk71fy@cured-4q0uw.mongodb.net/test?retryWrites=true'

const exampleRoute = require("./routes/example_route");

const googleHomeTestRoute = require('./routes/minitest');

const app = express();

// MongoDB Connection
mongoose.connect(mongoDbUrl)
  .then(() => {
    console.log('Connected to Cloud Database Successful!');
  })
  .catch(() => {
    console.log('Connection to Database has failed!')
  });

// Middleware
app.use(bodyParser.json());

// Setting the headers for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
    );
  next();
});

app.use("/api/example_api", exampleRoute);
app.use("/api/googlehome/test", googleHomeTestRoute);

module.exports = app;