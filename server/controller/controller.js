const axios = require("axios");
let champs = [];
axios
  .get("http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion.json")
  .then(response => {
    champs = response.data.data;
    // console.log(champs);
    return champs;
  });
console.log(champs);

let getChamps = (req, res) => {
  res.status(200).send(champs);
  console.log(champs);
};

module.exports = {
  getChamps
};
