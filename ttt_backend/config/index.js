const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

class AppConfig {
  constructor(routes) {
    this.exp = express();
    this.routes = routes;
  }

  #config() {
    this.exp.use(bodyParser.json());
    this.exp.use(cors());

    this.routes.forEach((route) => {
      this.exp.use("/", route);
    });
  }

  boot() {
    this.#config();
    this.exp.listen(process.env.PORT, () => {
      console.log("Server started at port 9001");
    });
  }
}

function initializer(routes) {
  return new AppConfig(routes);
}

module.exports = initializer;
