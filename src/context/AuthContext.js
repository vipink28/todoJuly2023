import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider=({children})=>{

    const [user, setUser]= useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    //register user
    const register = async(formData)=>{
        const opt = {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(formData) 
        }
        try{
            const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method: "GET"});

            if(checkUser.ok){
                const userExist = await checkUser.json();
                if(userExist.length > 0){
                    setMessage("User already exist, please login");
                }else{
                    const response = await fetch("http://localhost:5000/users", opt)
                    if(response.status === 201){                        
                        const user = await response.json();
                        
                        localStorage.setItem("user", JSON.stringify(user));                        
                        setMessage("user created succcessfully");
                        setTimeout(()=>{
                            setUser(user);
                            navigate("/task-list");
                        }, 3000)
                    }else{
                        setMessage("something went wrong");
                    }
                }
            }
        }
        catch(err){
            alert("something went wrong");
        }
    }

    // login user
    const login=async(formData)=>{
        try {
            const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method: "GET"})

            if(response.ok){
                const userData = await response.json();
                if(userData.length > 0){

                    localStorage.setItem("user", JSON.stringify(userData[0]));
                   
                    setMessage("logged in successfully");
                    setTimeout(()=>{
                        setUser(userData[0]);
                        navigate("/task-list");
                    }, 3000)
                }else{
                    setMessage("Email/Password is incorrect");
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logout=()=>{
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    }

    const getUser= async(user)=>{
        try{    
            const response = await fetch(`http://localhost:5000/users?id=${user.id}`, {method: "GET"});
            if(response.ok){
                const userData = await response.json();
                if(userData.length > 0){
                    setUser(userData[0]);
                    navigate("/task-list");
                }else{
                    localStorage.removeItem("user");
                    navigate("/");
                }
            }

        }catch(err){
            console.log(err);
        }
    }

    // use effect is used to execute something when component is loaded.
    useEffect(()=>{
        const localuser = localStorage.getItem("user");     
        if(localuser){
          let user = JSON.parse(localuser);
        getUser(user);
        }
      }, [])

    return (
        <AuthContext.Provider value={{
            message,
            register,
            login,
            user,
            logout,
            setMessage
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;