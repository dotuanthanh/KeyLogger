const Logger = require("../model/Logger");
// const readfile = require('../common/readfile')
const { readFile } = require("fs");
const FILE_URL = "./input.txt";
const getmac = require("getmac");
var macaddress = require("macaddress");
const update = async () => {
  try {
    // let data = await readfile(FILE_URL);
    await readFile("./input.txt", "utf8", (err, result) => {
      console.log("vo day reading file ............");
      if (err) {
        console.log(err);
        return;
      }
      let indentity;
      macaddress.one((err, mac) => {
        console.log("logg maccc ....", mac);
        indentity = mac;
      });
      Logger.create({ data: result, indentity: indentity });
      return result;
    });

    // console.log("read data :" +data)

    // return data;
  } catch (error) {
    console.log(error);
  }
};
const callMac = () => {
  return getmac.default();
};

module.exports = update;
