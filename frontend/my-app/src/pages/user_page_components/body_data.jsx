import {useEffect, useState} from 'react'
import {Typography} from 'antd'
import axios from 'axios'

const baseURL =  "http://127.0.0.1:5000"

const { Title, Paragraph} = Typography;

const BodyData = (props) => {
  const id = props.id;
  const [user, setUser] = useState({age : 10});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await axios.get(`${baseURL}/user/${id}`)
        setUser(resp.data)
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    fetchUser()}, [id])

  const getGender = bool => {return bool? "male" : "female"}

  return <Typography>
    <Title>
      Body Info: 
    </Title>
    <Paragraph>
      gender : {getGender(user.gender)}
    </Paragraph>
    <Paragraph>
      age : {user.age}
    </Paragraph>
    <Paragraph>
      chest circumfrance : {user.chest_cir}
    </Paragraph>
    <Paragraph>
      hip circumfrance : {user.hip_cir}
    </Paragraph>
    <Paragraph>
      arm  circumfrance : {user.arm_cir} 
    </Paragraph>
  </Typography>
}

export default BodyData