import { useState } from 'react';


function Todo(){
    const[task , setTask] = useState("")
    const [tasks , setTasks]= useState([])
    
    const handleChange =(e)=>{
        setTask(e.target.value)
    }

const addTask=()=>{
    if(task.trim()!==""){
        setTasks([...tasks,task])
        setTask("");
    };
};

const deleteTask=(index)=>{
const newTasks = tasks.filter((_, i)=> i !==index)
setTasks(newTasks)
}

return(
    <div>
        <h1>Todo List</h1>
      <input
      type='text'
      value={task}
      onChange={handleChange}/>
      <button onClick={addTask}>addTask</button>
      <ul>
        {tasks.map((t, index)=>(
            <li key = {index}>
                {t}{" "}
                 <button  onClick={()=>deleteTask(index)}>deleteTask</button>
            </li>
        ))}
      </ul>
     
    
    </div>

)
}
export default Todo;

