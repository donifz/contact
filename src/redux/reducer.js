const initialState = [...JSON.parse(localStorage.getItem("userStorage"))];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      // console.log(filtered);
      // console.log(action.payload);

      console.log(action.payload);

      return state.filter((item) => {
        return (
          item.firstName.toLowerCase().indexOf(action.payload.toLowerCase()) !==
          -1
        );
      });

    default:
      return state;
  }
};

export default reducer;
