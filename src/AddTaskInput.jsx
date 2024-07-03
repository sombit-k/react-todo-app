import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export default function CustomizedInputBase({handleChange,handleSubmit,text}) {




  return (
    <div>
      <Box
    component="form"
    onSubmit={handleSubmit}
    >
        <Grid container spacing={1}>
        <Grid item md={11} xs={10}>
            <TextField id="outlined-basic" label="Enter Your Task" variant="outlined" fullWidth onChange={handleChange} value={text}/>
        </Grid>
        <Grid style={{display:"flex",aligntItems:"center",justifyContent:"center"}} item md={1} xs={2}>
          <IconButton onClick={handleSubmit}>
          <AddIcon fontSize='large' />
          </IconButton>
        {/* <Button onClick={handleSubmit} variant="contained" endIcon={<AddIcon fontSize='medium'/>}> */}
        
      {/* </Button> */}
        </Grid>
        </Grid>
      
      
    </Box>
    </div>
  );
}