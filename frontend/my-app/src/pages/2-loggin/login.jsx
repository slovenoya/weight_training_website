import {React} from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import userLogo from './images/user.svg';
import keyLogo from './images/key.svg'
import './login.css';


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
    const baseURL =  "http://127.0.0.1:5000";
    e.preventDefault();
    if (email !== '' && password !== '') {
      try {
        const resp = await axios.post(`${baseURL}/user/validate`, {email:email, password:password})
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

  const handleRegister = () => {
    navigate('/registration')
  }

  return (
    <div>
      <video src='/login/login-vid.mp4' autoPlay muted loop />
    
      <div className='login-page'>
        <div className='login-form'>
          <div className='login-head'>
            <p className='login-slogan'>Keep Changing</p>
          </div>
          <div className='login-body'>
            <div className='login-input login-email'>
              <img src={userLogo} alt='user icon' />
              <input type="text" onChange={changeEmail} required placeholder='Enter Username'/>
            </div>
            <div className='login-input login-password'>
              <img src={keyLogo} alt='key icon' />
              <input type="password" onChange={changePassword} required placeholder='Enter Password'/>
            </div>
            <div className='login-btn' >
              <button onClick={handleLogin} className='log-btn'>
                Log In
              </button>
              <button onClick={handleRegister} className='reg-btn'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;