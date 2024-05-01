import React from 'react';
import './sidebar.css';
const Sidebar = ({ onComponentClick }) => {
  const handleClick = (componentName) => {
    onComponentClick(componentName);
  };

  return (
    <div className="sidebar">
      <button onClick={() => handleClick('TaskForm')}>Task Form</button>
      <button onClick={() => handleClick('TaskAssignment')}>Task Assignment</button>
      <button onClick={() => handleClick('TaskStatus')}>Task Status</button>
      <button onClick={() => handleClick('TaskSummary')}>Task Summary</button>
    </div>
  );
};

export default Sidebar;
