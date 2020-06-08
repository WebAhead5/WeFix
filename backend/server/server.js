const express = require("express");
const app = express();
const cors = require("cors");
// const Pool = require("../database/dbConnection");

//middleware
app.use(cors());

//ROUTES//

app.post("/cars", async (req, res) => {
  try {
    const { name } = req.body;
    const newName = await Pool.query("INSERT INTO cars { name } VALUES($1)", [
      name,
    ]);
    res.json(newName);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/", (req, res) => {
  res.send("Hello five world");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

