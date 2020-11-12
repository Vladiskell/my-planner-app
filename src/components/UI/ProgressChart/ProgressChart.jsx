import React from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { getTodosSelector } from '../../../redux/todos/selectors';

import { PieChart, Pie, Cell } from 'recharts';
// ---------------------------------------------------------------------------------------------------------------------
const ProgressChart = () => {
    const classes = useStyles();
    const todos = useSelector(getTodosSelector);

    const processTodos = todos.filter((item) => item.statuses.process).length;
    const importantTodos = todos.filter((item) => item.statuses.important).length;
    const completedTodos = todos.filter((item) => item.statuses.completed).length;
    const otherTodos = todos.length - processTodos - importantTodos - completedTodos;

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
                <Pie
                    dataKey="value"
                    data={data}
                    cx={124}
                    cy={128}
                    innerRadius={75}
                    outerRadius={90}
                    paddingAngle={3}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} key={entry.value} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default ProgressChart;
