import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function ListItemWrapper({text,icon,onClick}) {

    return (
        <List>
            <ListItem disablePadding onClick={onClick}>
            <ListItemButton>
                <ListItemIcon sx={{color: "rgba(255,255,255,.8)"}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        </List>
    )
}
