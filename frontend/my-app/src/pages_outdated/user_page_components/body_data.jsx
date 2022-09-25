/* eslint-disable no-restricted-globals */
import {useEffect, useState} from 'react'
import {Typography, Button, Input, Select} from 'antd'
import axios from 'axios'

const baseURL =  "http://127.0.0.1:5000"

const { Title, Paragraph} = Typography;

const getGender = bool => {return bool? "male" : "female"}

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
        Body Stat
      </Title>
      <Paragraph>
        gender : {getGender(user.gender)}
      </Paragraph>
      <Paragraph>
        age : {user.age}
      </Paragraph>
      <Paragraph>
        chest circumfrance : {user.chest_cir} cm
      </Paragraph>
      <Paragraph>
        waist circumfrance : {user.waist_cir} cm
      </Paragraph>
      <Paragraph>
        hip  circumfrance : {user.hip_cir} cm
      </Paragraph>
      <Paragraph>
        body fat : {user.body_fat} %
      </Paragraph>
      <Paragraph>
        height : {user.height} cm
      </Paragraph>
      <Paragraph>
        weight : {user.weight} lb
      </Paragraph>
      <Paragraph>
        arm  circumfrance : {user.arm_cir} cm
      </Paragraph>
      <Button onClick={() => {setOnEdit(!onEdit)}}>
          edit
        </Button> 
    </Typography>
  }
  
  const EditPage = () => {
    const [data, setData] = useState({});
    const handleChange = e => {
      const {name, value} = e.target
      setData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const handleOptionChange = value => {
      setData(prevState => ({
        ...prevState,
        'gender': (value === 'male')? true : false
      }))
    }

    const{Option} = Select;

    const handleSubmit = async() => {
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
      <Select style={{ width: 120 }} onChange={handleOptionChange} name='gender'>
        <Option value="male" name='gender'>Male</Option>
        <Option value="female" name='gender'>Female</Option>
        <Option value="select">Unknown</Option>
      </Select>
      <Input placeholder={'age: ' + user.age} onChange={handleChange}  type="number" name='age' />
      <Input placeholder={'chest circum: ' + user.chest_cir} onChange={handleChange}  type="number" name='chest_cir'/>
      <Input placeholder={'waist circum: ' + user.waist_cir} onChange={handleChange}  type="number" name='waist_cir'/>
      <Input placeholder={'hip circum: ' + user.hip_cir} onChange={handleChange}  type="number" name='hip_cir'/>
      <Input placeholder={'arm circum: ' + user.arm_cir} onChange={handleChange}  type="number" name='arm_cir'/>
      <Input placeholder={'body fat: ' + user.body_fat} onChange={handleChange}  type="number" name='body_fat'/>
      <Input placeholder={'height: ' + user.height} onChange={handleChange}  type="number" name='height'/>
      <Input placeholder={'weight: ' + user.weight} onChange={handleChange}  type="number" name='weight'/>
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
        setPage(<DefaultPage/>)
      }
    }
    setupPage()}, [user, onEdit]);
  return page
}
 


export default BodyData