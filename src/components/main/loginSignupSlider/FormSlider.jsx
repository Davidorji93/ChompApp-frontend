import React, { useState } from "react";
import Login from "../../Login/Login";
import Card from "../../UI/Card";
import Signup from "../signup/Signup";
import { Link } from "react-router-dom";

import "./FormSlider.css";

const FormSlider = () => {
  const [state, setState] = useState(false);

  const showLogin = () => {
    setState(false);
  };

  const showSignUp = () => {
    setState(true);
  };

  return (
    <div className="formSlider">
      <Card>
        <div className="title">
          {/* <Link to={state ? "signup" : "login"}></Link> */}
          <div
            onClick={showLogin}
            className={!state ? "title__login active" : "none__active"}
          >
            Login
          </div>

          <div
            onClick={showSignUp}
            className={state ? "title__signup active" : "none__active"}
          >
            SignUp
          </div>
        </div>
        {state ? <Signup /> : <Login />}
      </Card>
    </div>
  );
};

export default FormSlider;
