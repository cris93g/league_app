const express = require("express");
// const cors = require(cors);
const { json } = require("body-parser");
const app = express();
const champCtrl = require("./controller/controller");
const port = process.env.port || 3001;

// app.use(cors());
app.use(json());

app.get("/api/getChampions", champCtrl.getChamps);

app.listen(port, () => {
  console.log(`leagues app listening or port ${port}`);
});
