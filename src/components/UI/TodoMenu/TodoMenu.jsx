import React, { useMemo, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';

import { OPEN_MODALS } from '../../../redux/modals/actions';
import { SET_CURRENT_TODO } from '../../../redux/todos/actions';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import Switch from '@material-ui/core/Switch';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';

// ---------------------------------------------------------------------------------------------------------------------
const TodoMenu = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const menuItems = useMemo(() => {
        const data = [
            {
                title: 'In process',
                icon: <SpellcheckIcon className={classes.menuIcon} />,
                switch: <Switch className={classes.switch} color={'primary'} size={'small'} checked={props.process} />,
                function: props.onProcess,
            },
            {
                title: 'Important',
                icon: <PriorityHighIcon className={classes.menuIcon} />,
                switch: <Switch className={classes.switch} size={'small'} checked={props.important} />,
                function: props.onImportant,
            },
            {
                title: 'Description',
                icon: <BuildOutlinedIcon className={classes.menuIcon} />,
                function: () => {
                    dispatch(SET_CURRENT_TODO.TRIGGER({ id: props.id }));
                    dispatch(OPEN_MODALS.TRIGGER({ open: true }));
                },
            },
            {
                title: 'Edit',
                icon: <EditIcon className={classes.menuIcon} />,
                function: props.onEdit,
            },
            {
                title: 'Delete',
                icon: <DeleteIcon className={classes.menuIcon} />,
                function: props.onDelete,
            },
        ];
        return data;
    }, [props]);

    return (
        <div className={classes.todoMenu}>
            <IconButton onClick={handleClick} className={classes.iconButton}>
                <MoreVertIcon />
            </IconButton>
            <Menu keepMounted anchorEl={anchorEl} open={open} onClose={handleClose}>
                {menuItems.map((item) => (
                    <MenuItem className={classes.menuItem} onClick={item.function} key={item.title}>
                        <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                        <Typography variant="body2">{item.title}</Typography>
                        {item.switch}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default TodoMenu;
