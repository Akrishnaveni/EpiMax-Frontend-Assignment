import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

class TaskSummary extends Component {
  render() {
    const { tasks } = this.props;

    // Count the number of tasks in each status
    const countByStatus = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});

    // Data for the pie chart
    const data = [
      { name: 'Completed', value: countByStatus.completed || 0 },
      { name: 'In Progress', value: countByStatus.inProgress || 0 },
      { name: 'Todo', value: countByStatus.todo || 0 },
    ];

    // Define colors for each status
    const COLORS = ['#00FF00', '#FFBB28', '#FF8042'];

    return (
      <div>
        <h2>Task Summary</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="center" verticalAlign="bottom" />
        </PieChart>
      </div>
    );
  }
}

export default TaskSummary;
