import React, { useMemo, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, connect } from 'react-redux';

import { todoFilter } from '../../../redux/todos/actions/actions';

import Button from '@material-ui/core/Button';

// ---------------------------------------------------------------------------------------------------------------------
// component
const TodoFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);

    const handleClick = (e) => {
        setActive(Number(e.currentTarget.dataset.index));
    };

    const buttons = useMemo(() => ['All', 'Completed', 'Uncompleted', 'Important']);

    const onButtonClick = (e) => {
        const { name } = e.currentTarget;
        handleClick(e);
        dispatch(todoFilter(name));
    };

    return (
        <div className={classes.filter}>
            {buttons.map((item, index) => (
                <Button
                    key={item}
                    variant={index === active ? 'contained' : 'outlined'}
                    name={item}
                    size="small"
                    color="primary"
                    data-index={index}
                    onClick={onButtonClick}
                >
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default TodoFilter;
