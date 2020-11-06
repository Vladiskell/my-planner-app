import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import * as API from '../../../api/todosApi';
import { todoCategoryGet } from '../../../redux/todos/selectors/selectors';
import { setReportListAction } from '../../../redux/report/actions/actions';
import { reportTodoListGet } from '../../../redux/report/selectors/selectors';

import { Typography } from '@material-ui/core';

import Badge from '../../UI/Badge/Badge';
import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Report = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentCategory = useSelector(todoCategoryGet);
    const reportList = useSelector(reportTodoListGet);

    useEffect(() => {
        API.getReportList(currentCategory).then((data) => {
            dispatch(setReportListAction(data));
        });
    }, [currentCategory]);

    return (
        <Block title={'Report'}>
            <div className={classes.inner}>
                {reportList &&
                    reportList.map((item) => {
                        const date = new Date(item.date);

                        return (
                            <Typography className={classes.reportItem}>
                                - Todo <span>'{item.title}'</span> was <Badge title={item.status} /> in{' '}
                                {date.toUTCString()}
                            </Typography>
                        );
                    })}
            </div>
        </Block>
    );
};

export default Report;
