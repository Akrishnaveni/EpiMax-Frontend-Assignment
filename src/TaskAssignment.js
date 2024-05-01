import React, { Component } from 'react';

class TaskAssignment extends Component {
  state = {
    selectedAssignee: '', // Default to display all tasks
  };

  handleChange = (e) => {
    const selectedAssignee = e.target.value;
    this.setState({ selectedAssignee });
  };

  render() {
    const { tasks, uniqueAssigneesList } = this.props;
    const { selectedAssignee } = this.state;
    console.log(uniqueAssigneesList)

    // Convert assignees to array if it's not already an array

    // Filter tasks based on selected assignee
    const filteredTasks = selectedAssignee
      ? tasks.filter((task) => task.assignee === selectedAssignee)
      : tasks;

    return (
      <div>
        <h2>Task Assignment</h2>
        <label htmlFor="assignee">Filter by Assignee:</label>
        <select id="assignee" onChange={this.handleChange} value={selectedAssignee}>
        <option value="">All Assignees</option>
          <option value="Krish">Krish</option>
          <option value="Raju">Raju</option>
          <option calue="Ramya">Ramya</option>
        </select>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              {task.title} - Assignee: {task.assignee}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskAssignment;
