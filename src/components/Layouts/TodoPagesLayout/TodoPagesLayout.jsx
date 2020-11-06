import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Todo from '../../Parts/Todo/Todo';
import Description from '../../Parts/Description/Description';
import Progress from '../../Parts/Progress/Progress';
import Report from '../../Parts/Report/Report';
import Timer from '../../Parts/Timer/Timer';
import GridContainer from '../GridContainer/GridContainer';
import GridItem from '../GridItem/GridItem';
import PlannerDate from '../../Parts/PlannerDate/PlannerDate';
import TodoDescriptionModal from '../../UI/TodoDescriptionModal/TodoDescriptionModal';
import { setCurrentCategory } from '../../../redux/todos/actions/actions';
import { useDispatch } from 'react-redux';

export const TodoPagesLayout = () => {
    const { url } = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        if (url.length === 1) {
            dispatch(setCurrentCategory('coding'));
        } else {
            dispatch(setCurrentCategory(url.slice(1)));
        }
    }, [url]);

    return (
        <GridContainer>
            <GridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={5}>
                <Todo />
            </GridItem>
            <GridItem columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
                <Description />
            </GridItem>
            <GridItem columnStart={3} columnEnd={4} rowStart={1} rowEnd={3}>
                <Report />
            </GridItem>
            <GridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
                <Progress />
            </GridItem>
            <GridItem columnStart={2} columnEnd={3} rowStart={3} rowEnd={5}>
                <Timer />
            </GridItem>
            <GridItem columnStart={3} columnEnd={4} rowStart={3} rowEnd={5}>
                <PlannerDate />
            </GridItem>

            <TodoDescriptionModal />
        </GridContainer>
    );
};
