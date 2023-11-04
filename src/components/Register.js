import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./loginStyles.css";

function Register() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { fname, lname, uname, pass } = document.forms[0];

    if(fname?.length > 0 && lname?.length > 0 && uname?.length > 0 && pass?.length > 0 
    && fname?.length < 20 && lname?.length < 20 && uname?.length < 20 && pass?.length < 20 
    && fname?.length > 2 && lname?.length > 2 && uname?.length > 2 && pass?.length > 2 
    && fname?.length < 20 && lname?.length < 20 && uname?.length < 20 && pass?.length < 20 
    && fname?.length > 2 && lname?.length > 2 && uname?.length > 2 && pass?.length > 2 
    && fname?.length < 20 && lname?.length < 20 && uname?.length < 20 && pass?.length < 20 
    && fname?.length > 2 && lname?.length > 2 && uname?.length > 2 && pass?.length > 2 
    && fname?.length < 20 && lname?.length < 20 && uname?.length < 20 && pass?.length < 20 
    && fname?.length > 2 && lname?.length > 2 && uname?.length > 2 && pass?.length > 2){
      setIsSubmitted(true);
    } else{
      
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for Register form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
          {renderErrorMessage("fname")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
          {renderErrorMessage("lname")}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Register</div>
        {isSubmitted ? <div>User is successfully registered</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;