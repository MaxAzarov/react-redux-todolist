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
      return {
        ...state,
        actions,
      };

    case "ITEM_INFO":
      let details = state.actions.filter(
        (item) => item.name === action.payload
      );
      console.log(details);
      return {
        ...state,
        details,
      };

    case "ADD_NEW_TODO":
      console.log(action.todo);
      const newTodo = {
        name: action.todo,
        description: `${action.description}`,
      };
      let todoexist = false;
      state.actions.forEach((todo) => {
        if (todo.name === action.todo) {
          todoexist = true;
        }
      });
      if (!todoexist) {
        return {
          ...state,
          actions: [...state.actions, newTodo],
        };
      } else {
        console.log("this todo already exist!");
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};
export default reducer;
