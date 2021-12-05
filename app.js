const express = require("express");
const app = express();
const connectDB = require("./db/Connect");
const routes = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-Handler");
require("dotenv").config();
const port = process.env.PORT || 1234;
// Middleware for Static files
app.use(express.static("./public"));

// Middleware for parsing response
app.use(express.json());

app.use("/api/v1/tasks", routes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
