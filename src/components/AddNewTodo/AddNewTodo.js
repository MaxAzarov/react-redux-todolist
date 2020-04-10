import React, { Component } from "react";
import { connect } from "react-redux";

import "./AddNewTodo.css";
import { addNewTodo } from "./../../redux/actions/actions";

class AddNewTodo extends Component {
  state = {
    input: "",
    description: "",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addNewTodoHandler = () => {
    if (this.state.input.trim() === "") {
      console.log("Input the new Todo!");
    } else {
      this.props.addNewTodo(this.state.input, this.state.description);
      this.setState({
        input: "",
        description: "",
      });
    }
  };

  render() {
    return (
      <div className="newTodo">
        <input
          type="text"
          name="input"
          placeholder="todo name"
          onChange={this.onChangeHandler}
          value={this.state.input}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={this.onChangeHandler}
          value={this.state.description}
        />
        <button className="AddNewTodo" onClick={() => this.addNewTodoHandler()}>
          Add todo!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (todo, description) => dispatch(addNewTodo(todo, description)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewTodo);
