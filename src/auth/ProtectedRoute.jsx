import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const navigate = useNavigate();

    const checkUserState = async () => {
        const localuser = localStorage.getItem("user");
        if (localuser) {
            let user = JSON.parse(localuser);
            try {
                const response = await fetch(`http://localhost:5000/users?id=${user.id}`, { method: "GET" });
                if (response.ok) {
                    const userData = await response.json();
                    if (userData.length > 0) {
                        setIsLoggedIn(true);
                    } else {
                        localStorage.removeItem("user");
                    }
                }

            } catch (err) {
                console.log(err);
            }
        } else {
            setIsLoggedIn(false);
            navigate("/");
        }
    }

    useEffect(() => {
        checkUserState();
    }, [isLoggedIn])


    return (
        <>{isLoggedIn ? children : null}</>
    )
}
export default ProtectedRoute;
