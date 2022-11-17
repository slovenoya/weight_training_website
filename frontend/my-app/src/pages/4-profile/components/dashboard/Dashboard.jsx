import {React, useState, useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';

const Dashboard = (props) => {
  const user_id = props.user_id;
  const [user, setUser] = useState()
  const baseURL =  "http://127.0.0.1:5000";

  useEffect(() => {
    if (user_id !== undefined) {
      fetchUser();
    }
    async function fetchUser() {
      try {
        const data=await axios.get(`${baseURL}/user/${user_id}`);
        setUser(data.data)
      } catch(error) {
        console.log(error)
      }
    };
  }, [user_id])

  if (user){
    return (<div>
      {user.id}
    </div>);
  }
  else {
    return (
      <div>loading...</div>
    )
  }
}

export default Dashboard;