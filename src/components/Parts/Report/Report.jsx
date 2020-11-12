import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_REPORT, GET_REPORTS } from '../../../redux/reports/actions';
import { getReportsSelector } from '../../../redux/reports/selectors';
import { getCategorySelector } from '../../../redux/category/selectors';

import { IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Badge from '../../UI/Badge/Badge';
import Block from '../../Layouts/Block/Block';
import { uuid } from 'uuidv4';

// ---------------------------------------------------------------------------------------------------------------------
const Report = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const category = useSelector(getCategorySelector);
    const reports = useSelector(getReportsSelector);

    useEffect(() => {
        dispatch(GET_REPORTS.TRIGGER({ category }));
    }, [category]);

    const onDelete = (id) => dispatch(DELETE_REPORT.TRIGGER({ category, id }));

    return (
        <Block title={'Report'}>
            <div className={classes.inner}>
                {reports &&
                    reports.map((item) => {
                        const date = new Date(item.date);

                        return (
                            <Typography className={classes.reportItem} key={uuid()}>
                                - Todo <span>'{item.title}'</span> was <Badge title={item.status} /> in{' '}
                                {date.toUTCString()}
                                <IconButton className={classes.button} onClick={() => onDelete(item.id)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                        );
                    })}
            </div>
        </Block>
    );
};

export default Report;
