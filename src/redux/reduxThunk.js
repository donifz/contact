import axios from "axios";

const fetchData = (dispatch) => {
  return (dispatch) => {
    dispatch(getData());
    axios
      .get("https://my-json-server.typicode.com/RomanChasovitin/demo-api/users")
      .then((response) => {
        const data = response.data;
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export default fetchData;
