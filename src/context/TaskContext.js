import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider=({children})=>{
    const { setMessage, user } = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask]= useState(null);

    //Create Task function
    const createTask = async(formData)=>{
        const obj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(`http://localhost:5000/tasks`, obj);
            if(response.status === 201){
                setMessage("Task Created Successfully");   
            }else{
                setMessage("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }


    // get all tasks

    const getAllTasks=async()=>{
        try {
            const response = await fetch(`http://localhost:5000/tasks?userid=${user.id}`);
            if(response.ok){
                const tasks = await response.json();
                setAllTasks(tasks);
                let recent = tasks.slice(-3);
                setRecentTasks(recent);
                let latest = tasks[tasks.length - 1];
                setLatestTask(latest);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user){
            getAllTasks();
        }        
    }, [user])


    return (
        <TaskContext.Provider value={{
            createTask,
            latestTask,
            allTasks,
            recentTasks
        }}>
            {children}
        </TaskContext.Provider>
    )
} 

export default TaskContext;