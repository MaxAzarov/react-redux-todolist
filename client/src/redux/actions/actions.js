export const deleteItem = (number) => ({
  type: "DELETE_ITEM",
  payload: number,
});

export const itemInfo = (number) => ({
  type: "ITEM_INFO",
  payload: number,
});

export function addNewTodo(todo, description) {
  return async (dispatch) => {
    await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: `${todo}`, description: `${description}` }),
    });

    dispatch({ type: "ADD_NEW_TODO", todo, description });
  };
}

export function GetTodos() {
  return async (dispatch) => {
    await fetch("/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "GET_TODOS", payload: data });
      });
  };
}
