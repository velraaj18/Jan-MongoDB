const mongoose = require("mongoose");

const dbConnection = () => {
  const uri = process.env.MONGO_URI;
  // console.log(uri);
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("DB connected");
  });
};

module.exports = dbConnection;
