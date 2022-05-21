import {React, useState, useEffect, useRef} from 'react'
import {Form, Input, Button, Select} from 'antd'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const baseURL =  "http://127.0.0.1:5000";

function Registration() {
  const [email, setEmail] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState(false)
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    email:'', 
    first_name:'', 
    last_name:'',
    age:0,
    gender:true,
    password:''
  })

  const navigate = useNavigate()
  const {Option} = Select;
  const changeEmail = e =>  {setEmail(e.target.value); console.log(email)}
  const changeFirst = e =>  {setFirst_name(e.target.value)}
  const changeLast = e =>  {setLast_name(e.target.value)}
  const changeAge = e =>  {setAge(e.target.value)}
  const changePassword = e =>  {setPassword(e.target.value)}
  function changeGender(value) {
    console.log(value)
    if (value === 'male'){
      setGender(true);
    } else {
      setGender(false)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    user.email = email
    user.age = age
    user.password = password
    user.first_name = first_name
    user.last_name = last_name
    user.gender = gender
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
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        autoComplete="off">
        <Form.Item
          label='email'
          name='email'
          rules={[{required:true, message:'please input your email'}]}>
          <Input type="text" onChange={changeEmail} required/>
        </Form.Item>
        <Form.Item
          label='password'
          name='password'
          rules={[{required:true, message:'please input your password'}]}>
          <Input type="text" onChange={changePassword} required/>
        </Form.Item>
        <Form.Item
          label='first name'
          name='first name'
          rules={[{required:true, message:'please input your first name'}]}>
          <Input type="text" onChange={changeFirst} required/>
        </Form.Item>
        <Form.Item
          label='last name'
          name='last name'
          rules={[{required:true, message:'please input your last name'}]}>
          <Input type="text" onChange={changeLast} required/>
        </Form.Item>
        <Form.Item
          label='age'
          name='age'
          rules={[{required:true, message:'please input your age'}]}>
          <Input type="number" onChange={changeAge} required/>
        </Form.Item>
        <Form.Item
          label='gender'
          name='gender'
          rules={[{required:true, message:'please select your gender'}]}>
          <Select style={{ width: 120 }} onChange={changeGender}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="select">Unknown</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <nav>
            <Link to='/'> go back </Link>
          </nav>
        </Form.Item>
      </Form>
    </>
  )
}

export default Registration