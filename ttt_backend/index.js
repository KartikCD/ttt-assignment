require("dotenv").config();
const initializer = require("./config");
const routes = require("./routes/");

initializer(routes).boot();
