import axios from "axios";

const HttpClient = axios.create();
HttpClient.defaults.baseURL = "https://api.themoviedb.org/3/";

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

HttpClient.interceptors.request.use((config) => {
  console.log(config.url);
  config.url += "api_key=f62f750b70a8ef11dad44670cfb6aa57";
  return config;
});

export default HttpClient;
