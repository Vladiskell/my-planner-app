import React from 'react'
import { useStyles } from './styles'
import Paper from '@material-ui/core/Paper'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'

// -------------------------------------------------------------------------------------------------
// component
const Description = ({ todoList }) => {
    const classes = useStyles()

    let currentItem = todoList.find((item) => item.active)

    if (currentItem === undefined) {
        currentItem = todoList[0]
    }

    return (
        <Paper className={classes.description}>
            <BlockHeader title={currentItem && currentItem.text} />
            <div className={classes.descriptionBody}>
                <Typography variant={'body1'}>{currentItem && currentItem.description}</Typography>
            </div>
        </Paper>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    }
}

export default connect(mapStateToProps)(Description)
