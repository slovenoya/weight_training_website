import {React, useState, useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';
import './dashboard.css'

const TopBar = (props) => {
  const [user, setUser] = useState(props.user);
  const email = user.email;
  return <div className='top-bar'>
      <p className='top-bar-head'>Dashboard Overview</p>
      <p className='top-bar-logo'>{email.slice(0, 2).toUpperCase()}</p>
      <p className='top-bar-email'>{email}</p>
  </div>
}

const PersonalRecord = (props) => {
  const [prList, setPrList] = useState(props.prList);
  const exercises = props.exercises;
  if (prList && exercises) {
    return (
    <div className='pr-container'>
      <div>Personal Records</div>
      <table className='pr-table'>
        <thead>
          <tr className='pr-header'>
            <th>name</th>
            <th>reps</th>
            <th>weight</th>
          </tr>
        </thead>
        <tbody>
          {prList.map((pr) => {
            return (
              <tr key={pr.id}>
                <td className='pr-entry'>
                  <div>
                    {exercises.filter(exercise => exercise.id === pr.exercise_id).map(filteredEx => {
                      return <div key={filteredEx.id}>{filteredEx.name}</div>})}
                  </div>
                </td>
                <td>{pr.rep}</td>
                <td>{pr.weight}</td>
              </tr>)
            })}
        </tbody>
      </table>
    </div>
    )
  }
  else {
    return <div>
      loading...
    </div>
  }
}

const Plans = (props) => {
  const plans = props.plans;
  return <div className='plans-container'>
    {plans.map((plan) => {
      return <div key={plan.id}>{plan.id}</div>
    })}
  </div>
}

const PRHist = (props) => {
  return <div>
    hist
  </div>
}

const Dashboard = (props) => {
  const user_id = props.user_id;
  const exercises = props.exercises;
  const [user, setUser] = useState()
  const [prList, setPrList]=useState([])
  const [plans, setPlans]=useState([])
  const baseURL =  "http://127.0.0.1:5000";

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
      fetchPr();
    }
    async function fetchPr() {
      try {
        const data=await axios.get(`${baseURL}/pr/${user_id}`);
        setPrList(data.data["pr_list"])
      } catch(error) {
        console.log(error);
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

  if (user){
    return (<div className='dashboard-container'>
      <TopBar user={user}/>
      <div className='dash-content'>
        <PersonalRecord user={user} prList={prList} exercises={exercises}/>
        <Plans user={user} plans={plans} exercises={exercises}/>
        <PRHist />
      </div>
    </div>);
  }
  else {
    return (
      <div>loading...</div>
    )
  }
}

export default Dashboard;