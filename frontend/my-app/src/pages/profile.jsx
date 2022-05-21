import axios from 'axios'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
const baseURL =  "http://127.0.0.1:5000";

function Profile (props) {
  const id = useLocation().state.id
  const [user, setUser]=useState('')

  useEffect(() => {fetchUser()}, []);

  const fetchUser = async() => {
    try {
      const resp = await axios.get(`${baseURL}/user/${id}`);
      setUser(resp.data)
    } catch (err) {
      console.error(err)
      return false;
    }
  }

  return (
    <div>
      <div>
        <h3>Welcome {user.first_name} {user.last_name} !</h3>
      </div>
    </div>
  )
}

export default Profile