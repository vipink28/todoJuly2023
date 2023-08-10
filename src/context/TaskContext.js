import { createContext, useContext } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider=({children})=>{
    const { setMessage } = useContext(AuthContext);

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


    return (
        <TaskContext.Provider value={{
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
} 

export default TaskContext;