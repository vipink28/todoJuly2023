import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/TaskContext';
import AuthContext from '../context/AuthContext';

function TaskForm(props) {
    let formInit = {
        title: "",
        description: "",
        duedate: ""
    }

    const { isUpdate, data, setUpdate } = props;
    const [formData, setFormData]= useState(formInit);
    
    const {createTask, updateTask}= useContext(TaskContext);
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

    const onCancel = ()=>{
        setUpdate(false);
        setFormData(formInit);
    }

    const onUpdate = ()=>{
        updateTask(formData);
    }

    useEffect(()=>{
        if(isUpdate){
            setFormData(data);
        }
    }, [isUpdate, data])

  return (
    <div className='p-3'>
        <h3 className='text-white fw-bold'>{isUpdate ? "Update Task":"Create Task"}</h3>
        <div className="card rounded-0">
            <div className="card-body">
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" name='title' className='form-control' value={formData.title} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control' name='description' rows={6} onChange={handleChange} value={formData.description}></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Due Date</label>
                    <input type="datetime-local" name='duedate' className='form-control' onChange={handleChange} value={formData.duedate} />
                </div>
                <p className='mb-2'>{message}</p>
                {
                    isUpdate ?
                    <>
                    <button className='btn btn-primary me-2' onClick={onUpdate}>Update Task</button>
                    <button className='btn btn-warning me-2' onClick={onCancel}>Cancel</button>
                    <button className='btn btn-success' onClick={onCancel}>Create New</button>
                    </> :
                    <button className='btn btn-primary' onClick={onCreate}>Create Task</button>
                }
                
            </div>
        </div>
    </div>
  )
}
export default TaskForm;
