import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, itemInfo, GetTodos } from "../../redux/actions/actions";

import "./App.css";
import ShowDetails from "../TodoItemDetails/TodoItemDetails";
import AddNewTodo from "../AddNewTodo/AddNewTodo";

class App extends Component {
  async componentDidMount() {
    this.props.GetTodos();
  }

  render() {
    return (
      <div>
        <h1 className="header">todos</h1>
        <ul className="todo-list">
          {this.props.todos.map((todo, i) => (
            <li className="" key={i}>
              {i + 1}. Name: {todo.name}
              <div className="todo-actions">
                <i
                  className="large material-icons"
                  onClick={() => this.props.deleteItem(todo.name)}
                >
                  delete
                </i>
                <i
                  className="large material-icons"
                  onClick={() => this.props.itemInfo(todo.name)}
                >
                  info
                </i>
              </div>
            </li>
          ))}
        </ul>
        <AddNewTodo />
        <ShowDetails details={this.props.details}></ShowDetails>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.actions,
    details: state.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (number) => dispatch(deleteItem(number)),
    itemInfo: (number) => dispatch(itemInfo(number)),
    GetTodos: () => dispatch(GetTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
