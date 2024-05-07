const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const item = require("./routes/item");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//parse application/json
app.use(bodyParser.json());

app.use("/item", item);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
