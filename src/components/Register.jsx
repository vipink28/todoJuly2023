import { useState } from "react";

function Register(){
    const [formData, setFormdata]=useState();
    const [message, setMessage] = useState();

    const handleChange=(e)=>{
        const {name, value}= e.target;
        setFormdata((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const submitForm=async(e)=>{
        e.preventDefault();
        //fetch
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

    return(
        <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange}/>
            </div>
            <p className="mb-2">{message}</p>
            <button className="btn btn-primary" onClick={submitForm}>Register</button>
        </form>
    )
}
export default Register;