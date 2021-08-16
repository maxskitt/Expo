import axios from "axios";

const serverUrl = "https://jsonplaceholder.typicode.com";

const axiosClient = () => {
  const instance = axios.create({
    responseType: "JSON",
    baseURL: serverUrl,
    // headers: headers(),
  });

  return instance
}

export { axiosClient };
