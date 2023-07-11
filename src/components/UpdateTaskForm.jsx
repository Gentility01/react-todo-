const UpdateTaskForm = ({updateDate, changeUpdateTask, updateChangeTask, cancelUpdateTask  }) => {
return(
    <>
        <div className='row'>
            <div className='col'>
                <input value={updateDate && updateDate.title} onChange={ (e)=> changeUpdateTask(e)}
                className='form-control form-control-lg' placeholder='Update Task'></input>
            </div>
            <div className='col-auto'>
                <button onClick={updateChangeTask} className='btn btn-outline-secondary'>
                    Update task
                </button>
            </div>
            <div className='col-auto'>
                <button onClick={cancelUpdateTask} className='btn btn-secondary'>
                    Cancel
                </button>
            </div>
        </div>
        <br></br>

    </>

)
}

export default UpdateTaskForm;