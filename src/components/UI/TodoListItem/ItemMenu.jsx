import React, { useMemo, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { useStyles } from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import EditIcon from '@material-ui/icons/Edit'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import SpellcheckIcon from '@material-ui/icons/Spellcheck'
import Switch from '@material-ui/core/Switch'

const ItemMenu = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    const menuItems = useMemo(() => {
        const data = [
            {
                text: 'In process',
                icon: <SpellcheckIcon className={classes.menuIcon} />,
                switch: <Switch className={classes.switch} color={'primary'} size={'small'} checked={props.process} />,
                function: props.onProcess,
                important: props.important,
            },
            {
                text: 'Important',
                icon: <PriorityHighIcon className={classes.menuIcon} />,
                switch: <Switch className={classes.switch} size={'small'} checked={props.important} />,
                function: props.onImportant,
                important: props.important,
            },
            {
                text: 'Edit',
                icon: <EditIcon className={classes.menuIcon} />,
                function: props.onEdit,
                important: props.important,
            },
            {
                text: 'Delete',
                icon: <DeleteIcon className={classes.menuIcon} />,
                function: props.onDelete,
                important: props.important,
            },
        ]
        return data
    }, [props])

    return (
        <div>
            <IconButton onClick={handleClick} className={classes.iconButton}>
                <MoreVertIcon />
            </IconButton>
            <Menu keepMounted anchorEl={anchorEl} open={open} onClose={handleClose}>
                {menuItems.map((item) => (
                    <MenuItem className={classes.menuItem} onClick={item.function} key={item.text}>
                        <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                        <Typography variant="body2">{item.text}</Typography>
                        {item.switch}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default ItemMenu