import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setshowAddTask] = useState (true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'This is task1',
        day: 'April 18th',
        reminder: true,
    },
    {
        id: 2,
        text: 'This is task2',
        day: 'April 18th',
        reminder: true,
    },
    {
        id: 3,
        text: 'This is task3',
        day: 'April 18th',
        reminder: false,
    },
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete
  const deleteTask = (id)=>{
    // console.log(id);
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle remainder
  
  const toggleRemainder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  // const name = 'John'
  // const x = true;
  return (
   <div className= 'container'>
       {/* <h1>Hello From React</h1> */}
       {/* <h1>hi {name}</h1> */}
       {/* <h2>Hi {x ? 'Yes' : 'No'}</h2> */}
       {/* <h1>hi</h1> */}
       <Header title = "Task Tracker" onAdd={()=> setshowAddTask(!setshowAddTask)}/>
       {showAddTask ? (<AddTask onAdd={addTask}/>) : ('')}
       {tasks.length > 0 ? (<Tasks tasks ={tasks} onDelete = {deleteTask} onToggle = {toggleRemainder}/>) : ('No task to show')}
    </div>
  );
}

export default App;
