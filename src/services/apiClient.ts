import axios, { CanceledError } from "axios";

export default axios.create({
  url: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { CanceledError };
