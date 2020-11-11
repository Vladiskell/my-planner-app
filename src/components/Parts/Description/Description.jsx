import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentTodoSelector } from '../../../redux/todos/selectors';
import { openModalsAction } from '../../../redux/modals/actions';

import { Typography, IconButton } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
const Description = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentTodo = useSelector(getCurrentTodoSelector);
    const [description, setDescription] = useState('');

    const headerButton = (
        <IconButton className={classes.iconButton} onClick={() => dispatch(openModalsAction())}>
            <BorderColorIcon fontSize={'small'} />
        </IconButton>
    );

    useEffect(() => {
        if (currentTodo !== undefined) {
            setDescription(currentTodo.description);
        }
    }, [currentTodo]);

    return (
        <Block title={currentTodo && currentTodo.title} headerChildren={headerButton}>
            <Typography variant={'body1'}>{description}</Typography>
        </Block>
    );
};

export default Description;
