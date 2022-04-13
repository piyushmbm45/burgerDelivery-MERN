const express = require("express");
const { APP_PORT, DB_URL } = require("./config/index.js");
const routes = require("./routes/index.js");
const errorHandler = require("./middleware/errorHandle.js");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api", routes);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("DB connected");
});

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`Server is Listening on ${APP_PORT}`));
