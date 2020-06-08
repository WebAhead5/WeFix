const express = require("express");
const app = express();
const cors = require("cors");
<<<<<<< HEAD
// const Pool = require("../database/dbConnection");

//middleware
=======
const router=require("../controllers/roots")



require('dotenv').config();
app.use(express.json())
>>>>>>> 4f0d03db8dcb9c92d07c797d8d872e1c1d35bc2a
app.use(cors());

<<<<<<< HEAD
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
=======
app.use(router);



>>>>>>> 4f0d03db8dcb9c92d07c797d8d872e1c1d35bc2a

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

