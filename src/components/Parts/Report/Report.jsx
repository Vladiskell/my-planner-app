import React from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Report = () => {
    const classes = useStyles();

    return (
        <Block title={'Report'}>
            <div className={classes.inner}>
                <Typography>
                    - Todo 'Компонент Description' был переведён в статус Completed в 23:53 часа 22 октября
                </Typography>
                <Typography>
                    - Todo 'Компонент Description' был переведён в статус Completed в 23:53 часа 22 октября
                </Typography>
                <Typography>
                    - Todo 'Редактирование описания todo из блока Description' был переведён в статус In process в 23:53
                    часа 22 октября
                </Typography>
                <Typography>
                    - Todo 'Компонент Description' был переведён в статус Completed в 23:53 часа 22 октября
                </Typography>
                <Typography>
                    - Todo 'В In process может быть только один todo' был переведён в статус Completed в 23:53 часа 22
                    октября
                </Typography>
                <Typography>
                    - Todo 'Компонент Description' был переведён в статус Completed в 23:53 часа 22 октября
                </Typography>
            </div>
        </Block>
    );
};

export default Report;
