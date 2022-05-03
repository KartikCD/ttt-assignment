const express = require("express");
const router = express.Router();

const { getResults } = require("../controller/resultController");

router.post("/results", getResults);

module.exports = router;
