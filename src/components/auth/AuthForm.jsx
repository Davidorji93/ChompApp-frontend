import React, {useState, useEffect} from "react";
import Login from "./Login";
import Signup from "./Signup";
import './AuthForm.css';
import Card from "../UI/Card";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm = () =>{
    const [state, setState] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


   const showLogin=()=>{
    setState(false)
    }

    const showSignUp=()=>{
        setState(true)
        }

    useEffect(() => {
        if (location.pathname.endsWith('/login')) {
            showLogin();
        } else {
            showSignUp();
        }
    }, [location])
    

    return (
        <div className="auth-form">
        <Card>
            <div className="title">
            <div onClick={()=>navigate('/login')} className={!state? "title__login active": "none__active"}>Login</div>
                <div onClick={()=>navigate('/signup')} className={state? "title__signup active": "none__active"}>SignUp</div>
            </div>
            {
                state?  <Signup/> :<Login/>

                
            }
        </Card>
        </div>
    );
}

export default AuthForm;