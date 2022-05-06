const { default: axios } = require("axios");
const asyncPool = require("tiny-async-pool");

const fetchResult = async (rollNumber) => {
  console.log(process.env.REMOTE_URL);
  const { data } = await axios.get(process.env.REMOTE_URL, {
    params: {
      param: rollNumber,
    },
  });

  return { status: data, rollNumber };
};

const getResults = async (req, res) => {
  try {
    const rollList = req.body.roll_numbers;
    const result = await asyncPool(5, rollList, fetchResult);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  getResults,
};
