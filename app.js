const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();

const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Questify",
      version: "1.0.0",
      description: "A simple task app",
    },
    servers: [
      {
        url: "https://questify-goit-poland.herokuapp.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/task", taskRouter);
app.use("/user", userRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
