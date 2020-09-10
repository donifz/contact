const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETALLDATA":
      return {
        ...state,
        items: action.items || [],
      };
    case "FILTER":
      const newItems = [
        ...JSON.parse(localStorage.getItem("userStorage")).filter((item) => {
          return (
            item.firstName
              .toLowerCase()
              .indexOf(action.payload.toLowerCase()) != -1
          );
        }),
      ];
      return {
        ...state,
        items: newItems,
      };
    case "SORTAZ":
      let sorted = state.items.sort((a, b) =>
        a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
      );
      console.log(sorted);
      return {
        ...state,
        items: [...sorted],
      };
    case "SORTZA":
      let sortedZa = state.items.sort((a, b) =>
        a.firstName > b.firstName ? -1 : a.firstName < b.firstName ? 1 : 0
      );

      return {
        ...state,
        items: [...sortedZa],
      };
    default:
      return state;
  }
};

export default reducer;
