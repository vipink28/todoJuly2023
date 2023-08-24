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
                getAllTasks();   
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


    //update task

    const updateTask = async(formData)=>{
        try {
            const obj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }

            const response = await fetch(`http://localhost:5000/tasks/${formData.id}`, obj);
            if(response.ok){
                setMessage("Task Updated Successfully");
                getAllTasks();
                
            }else{
                setMessage("Something went wrong, please try again");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async(id, button)=>{
        try {
            const response = await fetch(`http://localhost:5000/tasks/${id}`, {method:"DELETE"});

            if(response.ok){
                setMessage("Task deleted successfully");                
                getAllTasks();
                setTimeout(()=>{
                    setMessage("");
                    button.current.click();
                }, 3000);
            }else{
                setMessage("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{
            createTask,
            latestTask,
            allTasks,
            recentTasks,
            updateTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
} 

export default TaskContext;