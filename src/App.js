import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskAssignment from './TaskAssignment';
import TaskStatus from './TaskStatus';
import TaskSummary from './TaskSummary';
import Sidebar from './SlideBar'; 
import './App.css';


class App extends Component {
  state = {
    currentComponent:'TaskForm',
      tasks: [
        { id: 1, title: 'Learn HTML', status: 'todo', assignee:'Krish'},
        { id: 2, title: 'Attend Seminar', status: 'inProgress',assignee:'Ramya' },
        { id: 3, title: 'Task 3', status: 'completed', assignee:'Raju'},
        {id:4,title:'Task 4', status:'todo',assignee:'Raju'},
        {id:5,title:'Task 5',status:'completed', assignee:'Ramya'},
        {id:6,title:'Task 6', status:'inProgress',assignee:'Krish'}
        // Add more tasks with different statuses as needed
      ]
    
    }; 
  
  
  

  handleComponentClick = (componentName) => {
    this.setState({ currentComponent: componentName });
  }; 

  handleAddTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  handleStatusChange = (taskId, newStatus) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    }));
  };


  renderComponent = () => {
    const { currentComponent,tasks } = this.state;
    const assigneesList= tasks.map((task)=>{
      return (task.assignee)
    })

    const uniqueAssigneesList=new Set(assigneesList)


    switch (currentComponent) {
      case 'TaskForm':
        return <TaskForm onAddTask={this.handleAddTask} />;
      case 'TaskAssignment':
        return <TaskAssignment tasks={tasks} uniqueAssigneesList={uniqueAssigneesList}/>;
      case 'TaskStatus':
        return <TaskStatus tasks={tasks} onStatusChange={this.handleStatusChange} />;
      case 'TaskSummary':
        return <TaskSummary tasks={tasks} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="app">
        
        <Sidebar onComponentClick={this.handleComponentClick} />
        
        <div className="main-content">{this.renderComponent()}</div>
      </div>
    );
  }
}

export default App;
