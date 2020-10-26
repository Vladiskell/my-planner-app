import React from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { currentTodoGet } from '../../../redux/todos/selectors/selectors';
import { modalsOpenAction } from '../../../redux/modals/actions/actions';

import { Typography, IconButton, Paper } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Description = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentTodo = useSelector(currentTodoGet);

    const headerButton = (
        <IconButton className={classes.iconButton} onClick={() => dispatch(modalsOpenAction())}>
            <BorderColorIcon fontSize={'small'} />
        </IconButton>
    );

    return (
        <Block title={currentTodo && currentTodo.title} headerChildren={headerButton}>
            <Typography variant={'body1'}>{currentTodo && currentTodo.description}</Typography>
        </Block>
    );
};

export default Description;
