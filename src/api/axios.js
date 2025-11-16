import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5f012d7250ec44d08ece21a35e63e7ed",
    language: "ko-KR",
  },
});

export default instance;
