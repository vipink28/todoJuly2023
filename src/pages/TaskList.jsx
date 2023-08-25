import React, { useContext, useReducer, useState } from 'react';
import TaskContext from '../context/TaskContext';
import { dateFormat } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Popup from '../components/Popup';

function reducer(state, action){
    switch(action.type){
        case "VIEW": return {type: "view", data: action.payload};
        case "EDIT": return {type: "edit", data: action.payload};
        case "DELETE": return {type: "delete", data: action.payload};
        default: return state;
    }
}

function TaskList(props) {
    const init = {type: "", data: ""};
    const { allTasks } = useContext(TaskContext);
    const [state, dispatch] = useReducer(reducer, init);
    const [searchText, setSearchText] = useState("");

    const filteredArray = allTasks?.filter((item)=>{
        return item.title.toLowerCase().includes(searchText.toLowerCase());
    })

    const handleSearch=(e)=>{
        const { value } = e.target;
        setSearchText(value);
    }
    return (
        <div className='py-5 container'>
            <div className="bg-primary p-4">

                <input type="text" className='form-control' placeholder='search task' onChange={handleSearch} />

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
                            allTasks ? filteredArray.map((item)=>{
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{dateFormat(item.duedate)}</td>
                                    <td>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#taskmodal" onClick={()=>{dispatch({type:"VIEW", payload:item})}}>
                                            <FontAwesomeIcon icon={faEye}/>
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#taskmodal" onClick={()=>{dispatch({type:"EDIT", payload:item})}}>
                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#taskmodal" onClick={()=>{dispatch({type:"DELETE", payload:item})}}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </span>
                                    </td>
                                </tr>
                            }):"No Data"
                        }
                    </tbody>
                </table>
            </div>
            <Popup taskData={state}/>
        </div>
    );
}

export default TaskList;