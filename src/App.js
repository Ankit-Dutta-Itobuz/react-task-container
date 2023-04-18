import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

  //Delete
  const deleteTask = (id)=>{
    console.log('Deleted', id);
  }

  // const name = 'John'
  // const x = true;
  return (
   <div className= 'container'>
       {/* <h1>Hello From React</h1> */}
       {/* <h1>hi {name}</h1> */}
       {/* <h2>Hi {x ? 'Yes' : 'No'}</h2> */}
       {/* <h1>hi</h1> */}
       <Header title = "Task Tracker"/>
       <Tasks tasks ={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
