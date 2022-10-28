import {React, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const baseURL =  "http://127.0.0.1:5000";

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const navigate = useNavigate()
  const changeEmail = e =>  {setEmail(e.target.value); console.log(email)}
  const changePassword = e =>  {setPassword(e.target.value)}
  const changeConfirmPass = e =>  {setConfirmPass(e.target.value)}

  const handleSubmit = async(e) => {
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
      
    </div>
  )
}

export default Registration