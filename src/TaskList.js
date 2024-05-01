import React from 'react';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <strong>{task.task}</strong> - Assigned to: {task.assignee}
          <button onClick={() => updateTaskStatus(index, 'start')}>Start</button>
          <button onClick={() => updateTaskStatus(index, 'end')}>End</button>
          <button onClick={() => updateTaskStatus(index, 'complete')}>Complete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
