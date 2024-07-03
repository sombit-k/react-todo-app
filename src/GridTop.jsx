
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridTop() {
  return (
    
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <Item >Tasks</Item>
        </Grid>
      </Grid>
    
  );
}
