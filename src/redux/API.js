import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://my-json-server.typicode.com/RomanChasovitin/demo-api/",
});

export const userAPI = {
  getUsers() {
    return fetchData.get(`users`).then((response) => response.data);
  },
  saveToStorage() {
    return this.getUsers().then(
      (res) =>
        localStorage.setItem("userStorage", JSON.stringify(res.data)) || []
    );
  },
};
