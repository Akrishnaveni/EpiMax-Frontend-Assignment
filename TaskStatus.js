// TaskStatus.js
import React, { Component } from 'react';

class TaskStatus extends Component {
  state = {
    status: 'todo'
  };

  handleStatusChange = (status) => {
    this.setState({ status });
  };

  render() {
    const { status } = this.state;

    return (
      <div>
        <button
          onClick={() => this.handleStatusChange('todo')}
          style={{ backgroundColor: status === 'todo' ? 'green' : 'inherit' }}
        >
          To Do
        </button>
        <button
          onClick={() => this.handleStatusChange('inProgress')}
          style={{ backgroundColor: status === 'inProgress' ? 'yellow' : 'inherit' }}
        >
          In Progress
        </button>
        <button
          onClick={() => this.handleStatusChange('completed')}
          style={{ backgroundColor: status === 'completed' ? 'blue' : 'inherit' }}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default TaskStatus;

