const AddTaskForm = ({ newTask, setTask, addTask }) => {
    return(
        <>
        {/* add tasks */}
   <div className='row'>
     <div className='col'>
       {/* we are going to use the temp state connecting it to the input ( more expanation on the code below on readme) */ }
       <input value={newTask} onChange={ (e) => setTask(e.target.value)}
        className='form-control form-control-lg' placeholder='Add Task'></input>
     </div>
     <div className='col-auto'>
       {/* adding the add task function to the button  */}
       <button onClick={addTask}
        className='btn btn-outline-secondary'>
         Add task
       </button>
     </div>
   </div>
   <br></br>
     </>


    )
}

export default AddTaskForm;