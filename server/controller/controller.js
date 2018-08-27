const axios = require("axios");

let champs = [];
let id = 0;
axios
  .get("http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion.json")
  .then(response => {
    let arr = response.data.champs;

    let objectWithIds = arr.map(obj => {
      obj.id = id;
      id++;
      return obj;
    });
    champs = objectWithIds;
  });

let getChamps = (req, res) => {
  res.status(200).send(champs);
};

module.exports = {
  getChamps
};
