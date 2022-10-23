import {React} from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css';

import video from './video/login-vid.mp4'

const baseURL =  "http://127.0.0.1:5000";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const changeEmail = e => {
    setEmail(e.target.value)
  }

  const changePassword = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      try {
        const resp = await axios.post(`${baseURL}/user/validate`, {email:email, password:password});
        if (resp.data['verification']) {
          navigate('/profile', {state:{id:resp.data['id']}})
        } else {
          alert('incorrect username or password')
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('You need to input your email and password')
    }
  }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-form'>
          <div className='login-head'>
            <p>Login</p>
            <p>Start Your Change Today!</p>
          </div>
          <div className='login-body'>
            <div className='login-input login-email'>
              <p>Email</p>
              <input type="text" onChange={changeEmail} required/>
            </div>
            <div className='login-input login-password'>
              <p>Password</p>
              <input type="password" onChange={changePassword} required/>
            </div>
            <div className='login-btn'>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;