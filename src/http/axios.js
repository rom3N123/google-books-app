import axios from "axios";

const apiKey = "AIzaSyD93l_WjSrfAYINozVasESgW5T595q_0BA";

const $api = axios.create({
   baseURL: "https://www.googleapis.com/books/v1/",
});

$api.interceptors.request.use((config) => {
   config.params = { ...config.params, key: apiKey };

   return config;
});

export default $api;
