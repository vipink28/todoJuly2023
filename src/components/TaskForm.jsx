import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';

function TaskForm() {
    const [formData, setFormData]= useState();
    
    const {createTask}= useContext(TaskContext);
    const { message, user } = useContext(AuthContext);

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
    }

    const onCreate=(e)=>{
        e.preventDefault();
        createTask(formData);
    }


  return (
    <div className='p-3'>
        <h3 className='text-white fw-bold'>Create Task</h3>
        <div className="card rounded-0">
            <div className="card-body">
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" name='title' className='form-control' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control' name='description' rows={6} onChange={handleChange}></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Due Date</label>
                    <input type="datetime-local" name='duedate' className='form-control' onChange={handleChange} />
                </div>
                <p className='mb-2'>{message}</p>
                <button className='btn btn-primary' onClick={onCreate}>Create Task</button>
            </div>
        </div>
    </div>
  )
}
export default TaskForm;
