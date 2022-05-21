import {React, useState} from 'react'
import {Form, Input, Button} from 'antd'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const baseURL =  "http://127.0.0.1:5000";

const Homepage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  var warnInvalid=false;

  const handleUsernameChange = e => {
    warnInvalid=false;
    setUserName(e.target.value)
  }

  const handlePasswordChange = e => {
    warnInvalid=false;
    setPassword(e.target.value)
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    if (userName !== '' && password !== ''){
      try{
        const resp = await axios.post(`${baseURL}/user/validate`, {email:userName, password:password});
        if (resp.data['verification']) {
          navigate('/profile', {state:{id:resp.data['id']}})
        } else {
          alert('incorrect username or password')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item>
          {(!{warnInvalid}) && <p style={{color:'red'}}>Inccorrect Username or Password</p>}
        </Form.Item>
        <Form.Item
          label='username'
          name='username'
          rules={[{required:true, message:'please input your user name'}]}>
          <Input onChange={handleUsernameChange}/>
        </Form.Item>
        <Form.Item
          label='password'
          name='password'
          rules={[{required:true, message:'please input your password'}]}>
          <Input.Password onChange={handlePasswordChange}/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={handleLogin}>loggin</Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <nav>
            <Link to='registration'>register</Link>
          </nav>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Homepage;