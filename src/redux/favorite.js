import { store } from "..";

const initialState = {
  item: [],
  favorite: false,
};

const favorite = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "FAVORITE":
      const favorItem = [
        ...JSON.parse(localStorage.getItem("userStorage")).filter((item) => {
          return item.id === action.payload;
        }),
      ];

      let checkUnique = state.item.some((item) => item.id == favorItem[0].id);
      console.log(state.item);

      return {
        ...state,
        item: [...state.item, ...(!checkUnique ? favorItem : "")],
        favorite: !state.favorite,
      };

    default:
      return state;
  }
};

export default favorite;
