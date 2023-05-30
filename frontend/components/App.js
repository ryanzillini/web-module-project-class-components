import React from "react";

import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoForm from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 10, // could look different, you could use a timestamp to generate it
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 20,
          completed: false,
        },
      ],
    };
  }

  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({ ...this.state, todos: [...this.state.todos, newTodo] });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>ToDos</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle} />

        <TodoForm handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
