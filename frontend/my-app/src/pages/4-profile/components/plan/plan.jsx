import {React, useState, useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';
import './plan.css'

const Plan = (props) => {
  const user_id = props.user_id;
  const exercises = props.exercises;
  const [user, setUser] = useState()
  const [plans, setPlans]=useState([])
  const [edit, setEdit] = useState(-1)
  const [increment, setIncrement] = useState(0)
  // const []
  const baseURL =  "http://127.0.0.1:5000";
  const handleEdit = id => {
    setEdit(id);
  }
  useEffect(() => {
    if (user_id) {
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

  useEffect(() => {
    if (user_id) {
      fetchPlans();
    }
    async function fetchPlans() {
      try {
        const data=await axios.get(`${baseURL}/plan/${user_id}`);
        setPlans(data.data["plans"])
      } catch(error) {
        console.log(error);
      }
    };
  }, [user_id])

return (<div className='pr-container'>
    <div>Plans</div>
    <table className='pr-table'>
      <thead>
        <tr className='pr-header'>
          <th>name</th>
          <th>reps</th>
          <th>sets</th>
          <th>weight</th>
          <th>increment</th>
          <th>sequence</th>
          <th>plan_id</th>
        </tr>
      </thead>
      <tbody>
        {plans.sort((a, b) => b.sequence > a.sequence ? 1 : 0).map((plan) => {
          return (
            <tr key={plan.id}>
              <td className='pr-entry'>
                <div>
                  {exercises.filter(exercise => exercise.id === plan.exercise_id).map(filteredPlan => {
                    return <div key={filteredPlan.id}>{filteredPlan.name}</div>})}
                </div>
              </td>
              <td>{plan.rep}</td>
              <td>{plan.set}</td>
              <td>{plan.weight}</td>
              <td>{plan.increment}</td>
              <td>{plan.sequence}</td>
              <td>{plan.plan_id}</td>
            </tr>)
          })}
      </tbody>
    </table>
  </div>)
}

export default Plan;