
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const Item = styled(Paper)(({ theme }) => ({
    
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ToDoDisplay({tasks,setDoneOne,deleteOneTask}) {
    let handleCLick =(e)=>{
      console.log(e)
    }

    let style1={textDecoration:"line-through"};
  return (
   
      <>
       
        <Grid container spacing={0} component="ul" style={{listStyleType:'none'}}>
            
                {tasks.map((task)=>
                {
                 
                  if(task.task!=null )
                    {
                        return (
                          <>
                          <Grid item  xs='8'  style={{marginLeft:0}}>
                              <Item key={task.id} style={task.isDone?style1:null}>{task.task}</Item>
                          </Grid>
                          <Grid item xs='2' style={{display:"flex",flexWrap:"flex",justifyContent:"center", alignItems:"center"}}>
                            <IconButton color="success"  onClick={()=>{setDoneOne(task.id)}} size="small">
                                <DoneIcon />
                              </IconButton>
                          </Grid>
                          <Grid item xs='2' style={{display:"flex",flexWrap:"flex",justifyContent:"center", alignItems:"center"}}>
                              <IconButton color="error"  onClick={()=>{deleteOneTask(task.id)}} size="small">
                                <DeleteIcon />
                              </IconButton>
                          </Grid>
                            </>
                            )
                    }
                    
                    
                
                }
                
                )}
            
            
        </Grid> 
        









      
      </>
    
  );
}
