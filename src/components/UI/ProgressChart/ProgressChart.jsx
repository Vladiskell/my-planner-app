import React from 'react'
import { useStyles } from './styles'
import { PieChart, Pie, Cell } from 'recharts'
import { connect } from 'react-redux'

// -------------------------------------------------------------------------------------------------
// component
const ProgressChart = ({ todos }) => {
    const classes = useStyles()

    const processTodos = todos.filter((item) => item.process).length
    const importantTodos = todos.filter((item) => item.important).length
    const completedTodos = todos.filter((item) => item.completed).length
    const otherTodos = todos.length - processTodos - importantTodos - completedTodos

    const data = [
        { name: 'In process', value: processTodos },
        { name: 'Important', value: importantTodos },
        { name: 'Completed', value: completedTodos },
        { name: 'Other', value: otherTodos },
    ]
    const COLORS = ['#ff9800', '#f45b68', '#1976d2', '#4caf50']

    return (
        <div className={classes.pieChart}>
            <PieChart width={240} height={240}>
                <Pie data={data} cx={120} cy={115} innerRadius={75} outerRadius={90} paddingAngle={3} label>
                    {data.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.mainReducer,
    }
}

export default connect(mapStateToProps)(ProgressChart)
