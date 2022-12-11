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
  const [prList, setPrList] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [weight, setWeight] = useState(0);
  const [rep, setRep] = useState(0);
  const [exercise_id, setExerciseId] = useState(0);
  const exercises = props.exercises;
  const [user_id, setUserId] = useState(props.user.id);
  const baseURL =  "http://127.0.0.1:5000";
  const changeRep = e => {
    setRep(e.target.value);
  }

  const changeWeight = e => {
    setWeight(e.target.value);
  }
 
  const handleEdit = id => {
    setEdit(id);
  }

  const handleAdd = async () => {
    const resp = await axios.get(`${baseURL}/pr/${user_id}/${exercise_id}`)
    if (resp.data['exist']){
      await axios.post(`${baseURL}/pr`, {"user_id":user_id, "weight":weight, "exercise_id":exercise_id, "rep":rep});
    }
    else{
      await axios.patch(`${baseURL}/pr/${user_id}`, {"weight":weight, "rep":rep});
    }
    const data=await axios.get(`${baseURL}/pr/${user_id}`);
    setPrList(data.data["pr_list"])
  }

  const handleDelete = async (id) => {
    await axios.delete(`${baseURL}/pr/${id}`);
    const data=await axios.get(`${baseURL}/pr/${user_id}`);
    setPrList(data.data["pr_list"])
  }

  const handleSubmit = async (id) => {
    setEdit(-1);
    await axios.patch(`${baseURL}/pr/${id}`, {"weight":weight, "rep":rep});
    const data=await axios.get(`${baseURL}/pr/${user_id}`);
    setPrList(data.data["pr_list"]);
  }

  const handleSelect = (exercise_id) => {
    setExerciseId(exercise_id);
  }



  useEffect(() => {
    setPrList(props.prList)
  }, [props])

  // useEffect(() => {
  //   if (user_id) {
  //     fetchPr();
  //   }
  //   async function fetchPr() {
  //     try {
  //       const data=await axios.get(`${baseURL}/pr/${user_id}`);
  //       setPrList(data.data["pr_list"])
  //     } catch(error) {
  //       console.log(error);
  //     }
  //   };
  // }, [edit, user_id])
  
  if (prList && exercises && props.user) {
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
            if (edit === pr.id) {
              return <tr key={pr.id}>
                  <td className='pr-entry'>
                    <div>
                      {exercises.filter(exercise => exercise.id === pr.exercise_id).map(filteredEx => {
                        return <div key={filteredEx.id}>{filteredEx.name}</div>})}
                    </div>
                  </td>
                  <td><input type="text" placeholder={pr.rep} onChange={changeRep}/></td>
                  <td><input type="text" placeholder={pr.weight} onChange={changeWeight}/></td>
                  <td><button key={pr.id} onClick={() => {handleSubmit(pr.id)}}>submit</button></td>
                </tr>
            }
            else{
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
                  <td><button key={pr.id} onClick={() => {handleEdit(pr.id)}}>edit</button></td>
                  <td><button key={pr.id} onClick={() => {handleDelete(pr.id)}}>delete</button></td>
                </tr>)
            }
            })}
        </tbody>
      </table>
      <div className='add-record'>
        <select onChange={e => setExerciseId(e.target.value)}>
          {exercises.map(exercise => {
            return <option value={exercise.id} key={exercise.id} onChange={()=>handleSelect(exercise.id)}>{exercise.name}</option>
          })}
        </select>
          <input type="text" placeholder='reps' onChange={(e) => {setRep(e.target.value) }}/>
          <input type="text" placeholder='weight' onChange={(e) => {setWeight(e.target.value) }}/>
          <button onClick={handleAdd}>add</button>
      </div>
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
  const [plans, setPlans] = useState(props.plans);
  const exercises = props.exercises;
  const user_id = props.user_id;
  const [sequence, setSequence] = useState(0);
  const baseURL =  "http://127.0.0.1:5000";

  const handleFinish = async () => {
    await axios.post(`${baseURL}/plan_finish/${user_id}`)
    const resp = await axios.get(`${baseURL}/plan/${user_id}`)
    setPlans(resp.data['plans'])
  }

  useEffect(() => {
    if (plans.length > 0) {
      var dc = plans[0].day_count;
      var plan_length = 0;
      for (var i = 0; i < plans.length; i++){
        if (plans[i].sequence > plan_length) {
          plan_length = plans[i].sequence;
        }
      }
      setSequence(dc % plan_length + 1);
    }
  }, [plans])

  return (<div className='pr-container'>
    <div>Today's Plans</div>
    <table className='pr-table'>
      <thead>
        <tr className='pr-header'>
          <th>name</th>
          <th>reps</th>
          <th>sets</th>
          <th>weight</th>
        </tr>
      </thead>
      <tbody>
        {plans.filter(plan => plan.sequence === sequence && plan.activation === true).map((filteredPlan) => {
          return (
            <tr key={filteredPlan.id}>
              <td className='pr-entry'>
                <div>
                  {exercises.filter(exercise => exercise.id === filteredPlan.exercise_id).map(filteredPlan => {
                    return <div key={filteredPlan.id}>{filteredPlan.name}</div>})}
                </div>
              </td>
              <td>{filteredPlan.rep}</td>
              <td>{filteredPlan.set}</td>
              <td>{filteredPlan.weight}</td>
              <td>{filteredPlan.plan_id}</td>
            </tr>)
          })}
      </tbody>
    </table>
    <button onClick={handleFinish}>finish</button>
  </div>)
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
  }, [user_id,])

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
        <Plans user_id={user_id} plans={plans} exercises={exercises}/>
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