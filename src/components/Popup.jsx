import React, { useContext, useEffect, useRef } from 'react'
import { dateFormat } from '../helper';
import TaskForm from './TaskForm';
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';

function Popup(props) {
    const { type, data } = props.taskData;
    const { deleteTask } = useContext(TaskContext);
    const { message, setMessage } = useContext(AuthContext);

    const buttonRef = useRef(null);

    useEffect(()=>{
      setMessage("");
    }, [])

    const onDelete=()=>{
      deleteTask(data.id, buttonRef);
    }

  return (
<div className="modal" tabIndex="-1" id='taskmodal'>  
  <div className="modal-dialog">
  { type !== "" ?
    
    <div className="modal-content bg-primary text-white">
      <div className="modal-header" data-bs-theme="dark">
        <button ref={buttonRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        {
            type==="view"
            ?
            <div>
              <h3>{data?.title}</h3>
              <p>{data?.description}</p>

              <div className="d-flex">
                <p>Modified on: {dateFormat(data?.modifiedon)}</p>
                <p className='ms-auto'>Due Date: { dateFormat(data?.duedate) }</p>
              </div>
            </div>
            :
            type === "edit"
            ?
            <div>
              <TaskForm isUpdate={true} data={data} isPopup={true} btn={buttonRef}/>
            </div>
            :
            <div>
              {
                message !== "" ? 
                <p>{message}</p>
                :
                <p>Are you sure! you want to delete the task?</p>
              }
              
              <div className="d-flex">
              <button className='btn btn-danger ms-auto me-2' onClick={onDelete}>Yes</button>
              <button className='btn btn-warning' data-bs-dismiss="modal" aria-label="Close">No</button>
              </div>
            </div>
        }
      </div>    
    </div>

    : ""}
  </div>  
</div>
  )
}
export default Popup;