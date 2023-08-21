import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { dateFormat } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Popup from '../components/Popup';

function TaskList(props) {
    const { allTasks } = useContext(TaskContext);

    return (
        <div className='py-5 container'>
            <div className="bg-primary p-4">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Duedate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTasks ? allTasks.map((item)=>{
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{dateFormat(item.duedate)}</td>
                                    <td>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#taskmodal">
                                            <FontAwesomeIcon icon={faEye}/>
                                        </span>
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                        </span>
                                        <span className='px-2'>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </span>
                                    </td>
                                </tr>
                            }):"No Data"
                        }
                    </tbody>
                </table>
            </div>
            <Popup type="delete"/>
        </div>
    );
}

export default TaskList;