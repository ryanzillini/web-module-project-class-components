import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({ ...this.state, input: "" });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
