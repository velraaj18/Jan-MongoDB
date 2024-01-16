const express = require("express");
const app = express();

const env = require("dotenv");
const DbConnection = require("./DatabaseConnection");
env.config();
DbConnection();

const userRouter = require("./routes/userRoutes");
const bookRouter = require("./routes/bookRoutes");

const PORT = 8081;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Good",
  });
});

app.use("/users", userRouter);
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
