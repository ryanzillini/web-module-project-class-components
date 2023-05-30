import React from "react";

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
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.task}
                {todo.completed ? <span>- completed</span> : <span></span>}
              </li>
            );
          })}
        </ul>

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}
