import axios from "axios";

const API_KEY = "55066757-aef92cd57a3265a375d263145";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data);
}