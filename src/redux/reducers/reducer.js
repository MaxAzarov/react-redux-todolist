const initialState = {
  actions: [
    { name: "go to the shop", description: "Needs to buy some things" },
    { name: "make a bad", description: "No description!" },
    { name: "Learn new words", description: "learn 10 new words" },
    { name: "do a homework", description: "do a math!" },
  ],
  details: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
      };

    case "DELETE_ITEM":
      let actions = state.actions.filter(
        (item) => item.name !== action.payload
      );
      console.log(actions);
      return {
        ...state,
        actions,
      };

    case "ITEM_INFO":
      console.log(action.payload);
      let details = state.actions.filter(
        (item) => item.name === action.payload
      );
      console.log(details);
      // state.details = details;
      return {
        ...state,
        details,
      };
    default:
      return state;
  }
};
export default reducer;
