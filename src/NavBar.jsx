
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Alert from './Alert';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function ButtonAppBar() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const Item = styled(Paper)(({ theme }) => ({
    
    
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(0.3),
  })); 
  return (
      <Grid container   >
        <Grid item xs={12} >
           <Item>
           <Box xs='12' >
            <AppBar position="static">
            <Toolbar >
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <Alert btnName={<MenuIcon onClick={handleClickOpen} />} open={open} handleClose={handleClose}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            ToDo Application
          </Typography>
            <Alert btnName={<Button color="primary" variant="outline" onClick={handleClickOpen}>Login</Button>} open={open} handleClose={handleClose}/>
        </Toolbar>
      </AppBar>
    </Box>

          </Item>
        </Grid>
      </Grid>




    // 
  );
}
