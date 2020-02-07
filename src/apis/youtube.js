import axios from "axios";
const KEY = "AIzaSyBL5-XmnbbIl6kg9cXQciQqed5PKkxqXgc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
