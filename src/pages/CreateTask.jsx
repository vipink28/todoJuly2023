import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { dateFormat } from '../helper';

function CreateTask(props) {
    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate]= useState(false);
    const edit = ()=>{
        setIsUpdate(true);
    }

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-lg-6 d-flex align-items-center justify-content-center h-100 bg-primary text-white flex-column">
                    <div className='w-75'>
                        <TaskForm isUpdate={isUpdate} data={latestTask}/>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center flex-column justify-content-center h-100">
                    <div className="card w-75 border-0 shadow-sm bg-primary">                        
                            <div className="card-body text-white">
                                <div className="d-flex align-items-center mb-4">
                                    <h3 className='mb-0'>Latest Task</h3>
                                    <button className='ms-auto btn btn-info' onClick={edit}>Edit Task</button>
                                </div>
                                <h1>{latestTask?.title}</h1>
                                <p>{latestTask?.description}</p>
                                <div className="d-flex align-items-center text-warning">
                                    <p>Modified On: {dateFormat(latestTask?.modifiedon)}</p>
                                    <p className='ms-auto'>Due on: {dateFormat(latestTask?.duedate)}</p>
                                </div>
                            </div>
        
                    </div>

                    <div className="card w-75 border-0 shadow-sm bg-primary mt-5">
                        <div className="card-body text-white">
                        <div className="d-flex align-items-center mb-4">
                            <h3 className='mb-0'>Recent Tasks</h3>                                    
                        </div>
                        <div className='py-3'>
                            {
                                recentTasks?.map((item)=>{
                                    return(
                                        <div key={item.id} className='p-2 d-flex border border-info align-items-center'>
                                            <p className='mb-0'>{item.title}</p>
                                            <p className='mb-0 ms-auto text-warning'>
                                                {dateFormat(item.duedate)}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;