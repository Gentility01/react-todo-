import  {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';

import UpdateTaskForm from './components/UpdateTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
 

import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
// task (todo list state) state
// this is the main state of our todo     setToDo
const  [toDo, setToDo] = useState([
  // {id: 1, title:"first task", status:false},
  // {id: 2, title:"second task", status:false},
  // {id: 3, title:"third task", status:true},
  // {id: 4, title:"this happens to be the forth", status:false},
  // {id: 5, title:"this is juat the fifth task", status:false}
])

// temp state
// this will be responsible for the input from the template, the values gotten from the input will be store here respectively
const [newTask, setTask] = useState('');
const [updateDate, setUpdateDate] = useState('');

// Creating functions that will control the app
// add task
const addTask = () => {
  // checking if we have a new task from the tempstate
  if (newTask) {
    let num = toDo.length +1;
    let newEntry = {
      id:num, title:newTask, status:false
    }
    setToDo([...toDo, newEntry])
    setTask('');
  }

}

// delete task
const deleteTask = (id) => {
  // using the filter method to exlude records 
  let newTasks = toDo.filter(task => task.id !== id)
  setToDo(newTasks)
}

// mark task as done or complete
const markTask = (id) => {
  let newTask = toDo.map(task => {
    if (task.id === id) {
      return ({ ...task, status: !task.status})
    }
    return task
  }) 
  setToDo(newTask)
}

// cancel update
const cancelUpdateTask = () => {
  setUpdateDate('');
}

// change task for update
const changeUpdateTask = (e) => {
  let newEntry = {
    id: updateDate.id,
    title: e.target.value,
    status: updateDate.status ? true : false

  }
  setUpdateDate(newEntry);
}

// add task
const updateChangeTask = () => {
  let filterRecords = [...toDo].filter(task => task.id !== updateDate.id)
  let updateRecords = [...filterRecords, updateDate]
  setToDo(updateRecords);
  setUpdateDate('')
}
  
  return (
    <div className=" container App">
      <h1>Welcome to to-do list(ReactJs)</h1>
      <br></br>
      {/*display todo designs */}

      {/* update tasks  */}
      {updateDate && updateDate.title ? (
        <UpdateTaskForm 
        updateDate = {updateDate}  
        changeUpdateTask = {changeUpdateTask} 
        updateChangeTask = {updateChangeTask} 
        cancelUpdateTask = {cancelUpdateTask} />
      ) : (

        // add task 
       <AddTaskForm
        newTask = {newTask} 
        setTask = {setTask} 
        addTask = {addTask} />
        
        
      )}
      


   


      {/* the todo is coming from the main state  */}
      {/* this code means that if the length of todo lists is equal to none (ie no todo) list it should display no task  */}
      {toDo && toDo.length ? '' : 'No task...'} 
      
      {/* displaying the objects we have in our useState */}
      <ToDo
      toDo = {toDo} 
      markTask = {markTask}
      setUpdateDate = {setUpdateDate} 
      deleteTask = {deleteTask}
      />
      
    </div>
  );
}

export default App;
