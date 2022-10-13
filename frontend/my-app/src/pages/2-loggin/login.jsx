import {React} from 'react'
import { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const changeEmail = e => {
    setEmail(e.target.value)
  }

  const changePassword = e => {
    setPassword(e.target.value)
  }

  const login = () => {

    console.log('trying to login ' + {email} + {password})
  }

  return (
    <div className='login-page'>
      <section className='login-section'>
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
            <button onClick={login}>Login</button>
          </div>
        </div>
      </section>
      <section className='image-section'>
        <img src={require('./images/plate-stack.jpg')} alt="barbell" />
      </section>
    </div>
  )
}

export default Login;