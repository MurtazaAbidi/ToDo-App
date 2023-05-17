import React from 'react'
import { useState } from 'react'
import SideImg from '../../assets/Login/login.png'
import logo from '../../assets/Login/LoginLogo.png'
import {  LeftSideWrapper, LoginWrapper, RightSideWrapper
} from "./login.styled";
// import { Link, useNavigate } from "react-router-dom";
import { useSnackBar } from '../../hooks/useSnakeBar';


const LoginPage = ({setUserLogin}) => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});
  const showPopUp = useSnackBar();
  // const navigate = useNavigate()

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters!";
    }
    return errors;
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));

    {Object.keys(validate(formValues)).length > 0? showPopUp("Incorrect Validation", "error"):(
      localStorage.setItem("to-do-app-logged-in",true), showPopUp("Logged In Successfully", "success"),setUserLogin(true)
    )}
  }
  
  return (
    <LoginWrapper>
      <LeftSideWrapper style={{ backgroundImage: `url(${SideImg})` }}/>
      <RightSideWrapper>
        <div className='login-logoImg'>
          <a><img src={logo} alt="" /></a>
        </div>
        <div className='login-innerdiv'>
          <form 
          onSubmit={onSubmit}
          >
            <h3>Technical Assessment for Front-end Developer</h3>
            <h1>Login to your account</h1>

            <div className='login-input'>
              <label htmlFor="email"><span>Email</span ><span className="fields-error">{formErrors.email}  </span></label>
              <input style={{ border: formErrors.email ? "1.5px solid red" : null }} name="email" id="email" 
              onChange={handleChange} 
              placeholder='Enter Email' />
            </div>
            <div className='login-input'>
              <label htmlFor="password"><span>Password</span ><span className="fields-error">{formErrors.password}  </span></label>
              <input style={{ border: formErrors.password ? "1.5px solid red" : null }} type="password" name="password" id="password" 
              onChange={handleChange} 
              placeholder='Enter Password' />
            </div>
            <button type="submit" >Login Now</button>
          </form>
          <div className='login-hint'>
            Note: Just Enter Valid Details
          </div>
        </div>
      </RightSideWrapper>
  </LoginWrapper>
  )
}

export default LoginPage