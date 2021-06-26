const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const shortId = require("shortid");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

console.log("uri=>", process.env.MONGO_DB_URI);
// mongo db config
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err.message));

// server config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
