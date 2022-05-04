import axios from "axios";

export default axios.create({
  baseURL: "https://ttt-services.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
