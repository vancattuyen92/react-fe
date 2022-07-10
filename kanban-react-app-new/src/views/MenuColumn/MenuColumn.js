import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import GroupIcon from '@mui/icons-material/Group';


export default function MenuColumn() {


    return (
      <Paper sx={{ width: 230, maxWidth: '100%', height: '100%'}}>
        <MenuList>
          <hr/>

          <p>Application</p>
          <MenuItem><ViewCompactIcon/>Report</MenuItem>
          <p>Dashboard</p>
          <MenuItem><ViewKanbanIcon/>Kanban</MenuItem>
          <p>Users</p>
          <MenuItem><GroupIcon/>Users</MenuItem>

        </MenuList>
      </Paper>
    )
}