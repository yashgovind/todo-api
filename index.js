// imports.
const express = require("express");
const fs = require("fs");
const app = express();
const {logMethod} = require("./Middlewares/user");
const { connectMongoDb } = require("./Utils/dbconnection");
const { type } = require("os");
const path = require("path");
const userRouter = require("./Routes/user");
const filepath = path.join(__dirname, "logs.json");
const port = 8500;
const mongoURL = "mongodb://127.0.0.1:27017/todo-app-practice";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectMongoDb(mongoURL).then(() => {
    console.log(`connected`);
});

app.use(logMethod(filepath));

app.use("/api/todos", userRouter);

// server listening
function start() {
  try {
    app.listen(port, () => console.log(`server is listening at port ${port}`));
  } catch (error) {
    console.error(error.message);
  }
}
start();