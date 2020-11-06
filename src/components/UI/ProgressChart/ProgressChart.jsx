import React from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { todoListGet } from '../../../redux/todos/selectors/selectors';

import { PieChart, Pie, Cell } from 'recharts';
// ---------------------------------------------------------------------------------------------------------------------
// component
const ProgressChart = () => {
    const classes = useStyles();
    const todoList = useSelector(todoListGet);

    const processTodos = todoList.filter((item) => item.statuses.process).length;
    const importantTodos = todoList.filter((item) => item.statuses.important).length;
    const completedTodos = todoList.filter((item) => item.statuses.completed).length;
    const otherTodos = todoList.length - processTodos - importantTodos - completedTodos;

    const data = [
        { name: 'In process', value: processTodos },
        { name: 'Important', value: importantTodos },
        { name: 'Completed', value: completedTodos },
        { name: 'Other', value: otherTodos },
    ];

    const COLORS = ['#ff9800', '#f45b68', '#1976d2', '#4caf50'];

    return (
        <div className={classes.pieChart}>
            <PieChart width={250} height={250}>
                <Pie data={data} cx={124} cy={126} innerRadius={75} outerRadius={90} paddingAngle={3} label>
                    {data.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} key={entry.value} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default ProgressChart;
