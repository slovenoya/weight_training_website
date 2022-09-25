import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const UserPlan = (props) => {
  const id = useLocation().state.id;
  const [user, setUser] = useState();
  
  

  return (<div>
    user_plan
  </div>)
}

export default UserPlan