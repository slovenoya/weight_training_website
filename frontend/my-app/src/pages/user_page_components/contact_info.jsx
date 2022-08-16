/* eslint-disable no-restricted-globals */
import {useEffect, useState} from 'react'
import {Typography, Button, Input} from 'antd'
import axios from 'axios'

const baseURL =  "http://127.0.0.1:5000"
const { Title, Paragraph} = Typography;

const BodyData = (props) => {
  const id = props.id;
  const [user, setUser] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const DefaultPage = () => {
    useEffect(() => {
      const fetchUser = async () => {
        let copy_user = JSON.parse(JSON.stringify(user))
        try {
          await axios.get(`${baseURL}/user/${id}`)
            .then(response => {if (JSON.stringify(copy_user) !== JSON.stringify(response.data)) {setUser(response.data)}})
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      fetchUser()}, [])

    return <Typography>
      <Title>
        Contact Info
      </Title>
      <Paragraph>
        email : {user.email}
      </Paragraph>
      <Paragraph>
        first name : {user.first_name}
      </Paragraph>
      <Paragraph>
        last name : {user.last_name}
      </Paragraph>
      <Button onClick={() => {setOnEdit(!onEdit)}}>
          edit
      </Button> 
    </Typography>
  }
  
  const EditPage = () => {
    const [data, setData] = useState(user);

    const handleChange = e => {
      const {name, value} = e.target
      setData(prevState => ({
                ...prevState,
                [name]: value
            }))}

    const handleSubmit = async() => {
      console.log(data)
      try {
        await axios.patch(`${baseURL}/user/${id}`, data)
      } catch (err) {
        console.log(err)
      }
    }

    return <Typography>
      <Title>
        Body Info
      </Title>
      <Input placeholder={'email: ' + user.email} name='email' onChange={handleChange}></Input>
      <Input placeholder={'first name: ' + user.first_name} onChange={handleChange} name='first_name' />
      <Input placeholder={'last name: ' + user.last_name} onChange={handleChange} name='last_name'/>
      <Button onClick={() => {setOnEdit(!onEdit); handleSubmit()}}>
          submit
      </Button>
    </Typography>
  }

  const [page, setPage] = useState(<DefaultPage/>)
  useEffect(() => {
    const setupPage = () => {
      if (onEdit) {
        setPage(<EditPage/>)
      } else {
        setPage(<DefaultPage id/>)
      }
    }
    setupPage()}, [user, onEdit]);
  return page
}
 


export default BodyData