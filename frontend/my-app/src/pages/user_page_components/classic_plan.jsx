import {useState} from 'react'
import {useLocation} from 'react-router-dom'

const ClassicPlan = (props) => {
  const id = useLocation().state.id;
  const [user, setUser] = useState();

  return (<div>
    classic_plan
  </div>)
}

export default ClassicPlan