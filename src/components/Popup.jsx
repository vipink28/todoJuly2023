import React from 'react'
import { dateFormat } from '../helper';
import TaskForm from './TaskForm';

function Popup(props) {
    const { type, data } = props.taskData;
  return (
<div className="modal" tabIndex="-1" id='taskmodal'>  
  <div className="modal-dialog">
  { type !== "" ?
    
    <div className="modal-content bg-primary text-white">
      <div className="modal-header">        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
              <TaskForm isUpdate={true} data={data}/>
            </div>
            :
            <div>Delete</div>
        }
      </div>    
    </div>

    : ""}
  </div>  
</div>
  )
}
export default Popup;