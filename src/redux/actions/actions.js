export const GetTodos = () => ({ type: "GET_TODOS" });
export const deleteItem = (number) => ({
  type: "DELETE_ITEM",
  payload: number,
});

export const itemInfo = (number) => ({
  type: "ITEM_INFO",
  payload: number,
});

export const addNewTodo = (todo, description) => ({
  type: "ADD_NEW_TODO",
  todo,
  description,
});
