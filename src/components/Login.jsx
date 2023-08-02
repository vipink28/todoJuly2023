import { useState } from "react";
function Login(){
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
        try {
            const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method: "GET"})

            if(response.ok){
                const userData = await response.json();
                if(userData.length > 0){
                    setMessage("logged in successfully");
                }else{
                    setMessage("Email/Password is incorrect");
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange}/>
            </div>
            <p className="mb-2">{message}</p>
            <button className="btn btn-primary" onClick={submitForm}>Login</button>
        </form>
    )
}
export default Login;