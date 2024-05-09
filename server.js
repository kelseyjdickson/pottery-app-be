const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const item = require("./routes/item");
const user = require("./routes/user");
const logger = require("./middlewares/loggers");
const errorHandler = require("./middlewares/error");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//parse application/json
app.use(bodyParser.json());

app.use(logger);
app.use(errorHandler);
app.use("/item", item);
app.use("/user", user);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
