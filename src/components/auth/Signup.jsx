import React, {useState} from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

import './Signup.css';

const Signup = () =>{
    const[message, setMessage] = useState("");
    const [isRegistered, setIsRegistered] = useState(false)

    // const {handleChange, values, errors} = useForm(validateInfo);
    const {handleChange, values, handleClientError, errors} = useForm(validateInfo);
    

    let handleSubmit = async (e) => {
        e.preventDefault();
        let counter = 0;
        if(Object.keys(errors).length === 0){
            try {
                let res = await fetch("https://chomp-food.herokuapp.com/auth/signup", {
                    method: "POST",
                    body: JSON.stringify({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    setIsRegistered(true);
                    setMessage("Registration successful. Click the verification link sent to your email to complete your sign up");
                    values.firstName = '';
                    values.lastName = '';
                    values.email = '';
                    values.password = '';
                    values.password2 = '';
                } else {
                    console.log(res.status);
                    console.log(resJson);
                    values.email = '';
                    values.password = '';
                    values.password2 = '';
                    setMessage("Email already exist or passwords do not match");
                }
                counter += 1;
            } catch (err) {
                console.log(err);
            }
        }
        if(counter>1){
            setMessage("");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="signup-controls">
                { !isRegistered? <p style={{color:'red'}}>{message}</p> : ""}
                { isRegistered? <p style={{color:'green'}}>{message}</p> : "" }

                <div className="signup-control">
                    <input
                        type='text'
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={values.firstName} 
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="signup-control">
                    <input
                        type='text'
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className="signup-control">
                    <input
                        type='email'
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="signup-control">
                    <input
                        type='password'
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="signup-control">
                    <input
                        type='password'
                        name="password2"
                        placeholder="Repeat Password"
                        value={values.password2}
                        onChange={handleChange}
                        
                    />
                    {errors.password2 && <p className="error">{errors.password2}</p>}
                </div>
                <div>
                    <input type="checkbox" id="subscribed" name="subscribed" value="" />  Yes, I want to receive the newsletter.
                </div>
                <div className="signup__action">
                    <button
                        type="submit"
                        className="signup__button"
                        onClick={handleClientError}
                    >
                        SIGN UP
                    </button>
                </div>
            </div>
        </form>
    );
}
export default Signup
