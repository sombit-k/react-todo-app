

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItemButton from '@mui/material/ListItemButton';

export default function ToDoDisplaynew({tasks,setDoneOne,deleteOneTask}) {
    
    let style1={textDecoration:"line-through"};
  return (
   
      <>
       
       <Grid container >
            <List component="nav">
                {tasks.map((task)=>
                {
                 
                  if(task.task!=null )
                    {
                        return (
                          <>    
                            <Grid item xs="10">
                                  <List>
                                    <ListItem disablePadding >
                                        <ListItemButton>
                                        <ListItemText primary={task.task} />
                                        </ListItemButton>
                                    </ListItem>
                                    </List> 
                                </Grid>
                                <Grid item xs="1"><button>sombit</button></Grid>
                                    
                                
                                <List >
                                <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                    </IconButton>
                                }
                                >
                                <ListItemText
                                    primary="Single-line item"
                                />
                                </ListItem>
                            </List>
                            </>
                            )
                    }
                    
                    
                
                }
                
                )}
            </List>
            </Grid>
            
        









      
      </>
    
  );
}
