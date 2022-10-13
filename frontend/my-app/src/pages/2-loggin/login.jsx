import {React} from 'react'

import './login.css';

const Login = () => {
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
            <input type="text" />
          </div>
          <div className='login-input login-password'>
            <p>Password</p>
            <input type="password" />
          </div>
          <div className='login-btn'>
            <button>Login</button>
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