const express = require("express");
const app = express();
const cors = require("cors");

const router = require("../controllers/roots");


require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
