const mongoose = require("mongoose");

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  authSource: "admin",
};

const connectDB = (url) => {
  return mongoose.connect(url, mongooseOptions);
};

module.exports = connectDB;
