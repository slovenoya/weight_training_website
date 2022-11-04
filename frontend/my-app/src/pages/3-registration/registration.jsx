import {React, useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './registration.css';

const baseURL =  "http://127.0.0.1:5000";

function Registration() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const navigate = useNavigate()
  const changeFirstName = e =>  {setFirstName(e.target.value); console.log(email)}
  const changeLastName = e =>  {setLastName(e.target.value); console.log(email)}
  const changeEmail = e =>  {setEmail(e.target.value); console.log(email)}
  const changePassword = e =>  {setPassword(e.target.value)}
  const changeConfirmPass = e =>  {setConfirmPass(e.target.value)}

  const handleRegister = async(e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert('password doesn\'t match!');
      return false;
    }
    const user = {email:{email}, password:{password}};
    try {
      const resp = await axios.post(`${baseURL}/user`, user);
      if (resp.data['user'] != null){
        navigate('/')
      } else {
        alert('email already used')
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <div className='reg-page'>
        <div className='reg-head'>
          
        </div>
        <form action="submit" className='reg-form'>
          <input type="text" placeholder='First Name' onChange={changeFirstName}/>
          <input type="text" placeholder='Last Name' onChange={changeLastName}/>
          <input type="text" placeholder='Email' onChange={changeEmail}/>
          <input type="password" placeholder='Password' onChange={changePassword}/>
          <input type="password" placeholder='Confirm Password' onChange={changeConfirmPass}/>
          <button onClick={handleRegister}>submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Registration