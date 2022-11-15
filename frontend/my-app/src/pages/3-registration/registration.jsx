import {React, useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './registration.css';

const baseURL =  "http://127.0.0.1:5000";

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const navigate = useNavigate()
  const changeEmail = e =>  {setEmail(e.target.value); console.log(email)}
  const changePassword = e =>  {setPassword(e.target.value)}
  const changeConfirmPass = e =>  {setConfirmPass(e.target.value)}

  const handleRegister = async(e) => {
    e.preventDefault();
    if (password === '' || confirmPass === '' || email === '') {
      alert('You need to give us your information');
      return false;
    }

    if (password !== confirmPass) {
      alert('password doesn\'t match!');
      return false;
    }
    const user = {email:{email}, password:{password}};
    if (user !== null) {
      navigate('/profile',{state:{user:user.email}})
    }
    // try {
    //   const resp = await axios.post(`${baseURL}/user`, user);
    //   if (resp.data['user'] != null){
    //     navigate('/')
    //   } else {
    //     alert('email already used')
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return false;
    // }
  }

  return (
    <div>
      <div className='reg-page'>
        <div className='reg-head'>
          Start Changing
        </div>
        <form action="submit" className='reg-form'>
          <div className='reg-input'>
            <input type="text" placeholder='Email' onChange={changeEmail}/>
            <input type="password" placeholder='Password' onChange={changePassword}/>
            <input type="password" placeholder='Confirm Password' onChange={changeConfirmPass}/>
          </div>
          <button onClick={handleRegister} className='reg-btn'>Register</button>
        </form>
      </div>
      
    </div>
  )
}

export default Registration