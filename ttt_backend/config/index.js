const express = require("express");
const cors = require("cors");

class AppConfig {
  constructor(routes) {
    this.exp = express();
    this.routes = routes;
  }

  #config() {
    this.exp.use(express.json());
    this.exp.use(cors());

    this.routes.forEach((route) => {
      this.exp.use("/", route);
    });
  }

  boot() {
    this.#config();
    this.exp.listen(process.env.PORT, () => {
      console.log("Server started at port ", process.env.PORT);
    });
  }
}

function initializer(routes) {
  return new AppConfig(routes);
}

module.exports = initializer;
