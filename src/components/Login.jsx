import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
function Login(){
    const [formData, setFormdata]=useState();
    const {login, message} = useContext(AuthContext);

    const handleChange=(e)=>{
        const {name, value}= e.target;
        setFormdata((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const submitForm=(e)=>{
        e.preventDefault();
        login(formData);
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