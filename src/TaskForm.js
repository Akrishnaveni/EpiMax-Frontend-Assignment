import React, { Component } from 'react';

class TaskForm extends Component {
  state = {
    title: '',
    assignee: '',
    status: 'todo'
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, assignee, status } = this.state;
    const newTask = { id: Date.now(), title, assignee, status };
    this.props.onAddTask(newTask);
    this.setState({ title: '', assignee: '' }); // Clear form inputs
  };

  render() {
    const { title, assignee } = this.state;

    return (
      <div>
        <h2>Add New Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={title} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Assignee:</label>
            <input type="text" name="assignee" value={assignee} onChange={this.handleChange} required />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
