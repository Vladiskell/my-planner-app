import React, { useMemo, useState } from 'react';
import { useStyles } from './styles';

import Button from '@material-ui/core/Button';

// ---------------------------------------------------------------------------------------------------------------------
const TodoFilter = ({ changeFilter }) => {
    const classes = useStyles();
    const [active, setActive] = useState(0);

    const buttons = useMemo(() => ['All', 'Completed', 'Uncompleted', 'Important'], []);

    const onButtonClick = (e) => {
        const { name } = e.currentTarget;
        setActive(Number(e.currentTarget.dataset.index));
        changeFilter(name);
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
