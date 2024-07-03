import { useState } from 'react';
import ToDoDisplay from './ToDoDIplay';
import ButtonAppBar from './NavBar'
import GridTop from './GridTop'
import AddTaskInput from './AddTaskInput'
import { v4 as uuidv4 } from 'uuid';
import BottomGrid from './BottomGrid';
import BottomSign from './BottomSign';
// import ToDoDisplaynew from './ToDodisplaynew';


export default function ToDoapp() {

  let [text,setText]=useState("");
  let[tasks,setTasks]=useState([{task:null,isDone:false,id:uuidv4()}]);

  let handleChange=(event)=>{
    return setText(event.target.value);
  }
  let handleSubmit=(event)=>{
    event.preventDefault();
    setTasks((tasks)=>{
      if (text!='')
        {
          return [...tasks,{task:text,isDone:false,id:uuidv4()}]
        }
        else
        {
          return [...tasks,{task:null,isDone:false,id:uuidv4()}]
        }
    })
    
    setText("")
  }

  let setDoneOne=(id)=>{
    console.log("done")
      setTasks(tasks.map((task)=>{
        if(id==task.id)
          {
            return {...task,isDone:!(task.isDone)}
          }
        else{
          return task
        }
      }))
    
  }

  let deleteOneTask =(id)=>{
     setTasks(()=>
      tasks.filter((task)=>
        task.id!=id
      )
    );
  }

  let deleteAll =()=>{
    setTasks(()=>tasks.filter(()=> false))
  }

  let setDoneAll=()=>{
    setTasks(
      tasks.map((task)=>{
        return {...task,isDone:!task.isDone}
      })
    )
  }


  
  return (
    <>
      <div>
      <ButtonAppBar/>
      <br />
      <AddTaskInput text={text}  handleSubmit={handleSubmit} handleChange={handleChange}/>
      <br />
      <GridTop/>
      <br />
      <ToDoDisplay tasks={tasks} setDoneOne={setDoneOne} deleteOneTask={deleteOneTask}/>
      <br />
      {tasks.length>1?<BottomGrid deleteAll={deleteAll} setDoneAll={setDoneAll}/>:null}
      <br />
      <BottomSign></BottomSign>
      </div>
    </>
  )
}
