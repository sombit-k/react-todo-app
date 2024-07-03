import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {
  // const ref = React.useRef(null);


  return (
    <Box sx={{ pb: 7 }} >
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} style={{display:"flex",justifyContent:"center",}}>
        {/* <BottomNavigation
        > */}
         Made with ❤️ by Sombit
        {/* </BottomNavigation> */}
      </Paper>
    </Box>
  );
}
