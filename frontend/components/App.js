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

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>ToDos</h1>
        <TodoList todos={todos} />

        <TodoForm />

        <button>Clear</button>
      </div>
    );
  }
}
