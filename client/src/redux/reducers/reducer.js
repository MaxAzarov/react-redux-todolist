const initialState = {
  actions: [],
  details: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        actions: [...state.actions, ...action.payload],
      };

    case "DELETE_ITEM":
      console.log(action.payload);
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

      return {
        ...state,
        actions: [...state.actions, newTodo],
      };

    default:
      return state;
  }
};
export default reducer;
