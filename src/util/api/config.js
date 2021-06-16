import axios from "axios";

// const BASE_URL = "https://api.shrtco.de/v2";

export const api = axios.create({
  // baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
