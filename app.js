const express = require("express");
const add = express();

add.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});
module.exports = add;
