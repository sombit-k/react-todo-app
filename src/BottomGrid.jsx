
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


export default function BottomGrid({deleteAll,setDoneAll}) {
  return (
    
      <Grid container spacing={1}>
        <Grid item xs={6} style={{display:"flex",flexWrap:"flex",justifyContent:"center", alignItems:"center"}}>
                <Button size="small" variant="contained" startIcon={<DeleteIcon />} onClick={deleteAll}>
                    Delete All
                </Button>
        </Grid>
        <Grid item xs={6} style={{display:"flex",flexWrap:"flex",justifyContent:"center", alignItems:"center"}}>
                <Button size="small" variant="contained" startIcon={<DoneIcon />} onClick={setDoneAll}>
                    Mark All
                </Button>
        </Grid>
      </Grid>
    
  );
}
