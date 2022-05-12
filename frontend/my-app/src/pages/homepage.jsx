import {React, useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
const baseURL =  "http://127.0.0.1:5000";

const Homepage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = e => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    if (userName !== '' && password !== ''){
      try {
        const data = await axios.get(`${baseURL}/user/verification/${userName}`, {"password" : password});
        console.log(data)
      } catch (err) {
        console.log(err.message)
      }
    } 
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">username </label>
          {(userName.length === 0) && <p style={{color:'red'}}>please input your user name</p>}
          <input type="text" onChange={handleUsernameChange}/>
        </div>
        <div>
          <label htmlFor="password">password </label>
          {(password.length === 0) && <p style={{color:'red'}}>please input your user name</p>}
          <input type="password" onChange={handlePasswordChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleLogin}>loggin</button>
          <nav>
            <Link to='registration'>register</Link>
          </nav>
        </div>
      </form>
    </div>
  )
}

export default Homepage;