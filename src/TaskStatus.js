import React, { Component } from 'react';

class TaskStatus extends Component {
  render() {
    const { tasks, onStatusChange } = this.props;

    return (
      <div>
        <h2>Task Status</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - Status: {task.status}
              <div>
                {task.status !== 'todo' && (
                  <button onClick={() => onStatusChange(task.id, 'todo')}>Set as To Do</button>
                )}
                {task.status !== 'inProgress' && (
                  <button onClick={() => onStatusChange(task.id, 'inProgress')}>Set as In Progress</button>
                )}
                {task.status !== 'completed' && (
                  <button onClick={() => onStatusChange(task.id, 'completed')}>Set as Completed</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskStatus;
