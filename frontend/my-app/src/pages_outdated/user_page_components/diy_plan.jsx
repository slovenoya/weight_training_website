import {useState} from 'react'
import {useLocation} from 'react-router-dom'

const DIYPlan = (props) => {
  const id = useLocation().state.id;
  const [user, setUser] = useState();

  return (<div>
    diy_plan
  </div>)
}

export default DIYPlan