const { default: axios } = require("axios");

const getResults = async (req, res) => {
  try {
    const rollList = req.body.roll_numbers;

    console.log(rollList);

    const finalResult = rollList.map((roll) => {
      return axios.get(process.env.REMOTE_URL || "http://34.209.4.89:8099/", {
        params: {
          param: roll,
        },
      });
    });

    const results = await Promise.all(finalResult);

    const response = results.map((resp) => {
      const {
        config: {
          params: { param },
        },
        data,
      } = resp;

      return {
        roll_no: param,
        status: data,
      };
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  getResults,
};
