import React from 'react';
import TaskForm from '../components/TaskForm';

function CreateTask(props) {
    return (
        <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-6 d-flex align-items-center justify-content-center h-100 bg-primary text-white flex-column">
              <div className='w-75'>
                    <TaskForm />
              </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center h-100">  
              <div className="card w-75 border-0 shadow-sm bg-primary">                  
                  <div className="card-body">
                      
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
}

export default CreateTask;