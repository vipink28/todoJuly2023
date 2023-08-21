import React from 'react'

function Popup(props) {
    const { type } = props;
  return (
<div className="modal" tabIndex="-1" id='taskmodal'>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {
            type==="view"
            ?
            <div>View</div>
            :
            type === "edit" 
            ?
            <div>Edit</div>
            :
            <div>Delete</div>
        }
      </div>    
    </div>
  </div>
</div>
  )
}
export default Popup;