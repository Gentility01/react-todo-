import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from "@fortawesome/free-solid-svg-icons"






const toDo = ({ toDo, markTask, setUpdateDate, deleteTask}) => {
return(
<>
    {toDo && toDo
    // sorting
    .sort((a,b) => a.id > b.id ? 1 : -1)
    .map( (task, index) => {
    return(
    <React.Fragment key={task.id}>
        <div className='col taskBg'>
            {/* this means that if task.status is = true create a class called done else no class name */}
            <div className={task.status ? 'done' : '' }>
                <span className='taskNumber'>{index+1}</span>
                <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconWrap'>

                <span title='Completed / Not completed' onClick={ (e)=> markTask(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                </span>

                {task.status ? null : (
                <span title='Edit' onClick={ ()=> setUpdateDate({id: task.id,
                    title:task.title,
                    status:task.status ? true : false})}>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </span>
                )}


                <span className='trash' title='Delete' onClick={()=> deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </span>

            </div>
        </div>
    </React.Fragment>
    )
    })
    }


</>

)
}

export default toDo;