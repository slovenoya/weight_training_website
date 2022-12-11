import {React, useState, useEffect} from 'react'
import './template.css'
import axios from 'axios';
const Template = (props) => {
  const baseURL =  "http://127.0.0.1:5000";
  const uid = props.user_id
  const [plan_id, setPlanId] = useState(0)

  useEffect(() => {
    async function getplanid() {
      const resp = await axios.get(`${baseURL}/plan/${uid}`)
      const plans = resp.data.plans
      plans.map(plan => {
        if (plan.plan_id > plan_id) {
          setPlanId(plan.plan_id);
        }
        return plan_id;
      })
    }
    getplanid()
  }, [plan_id, uid])

  const addThree = async () => {
    setPlanId(plan_id + 1);
    console.log(plan_id);
    await axios.post(`${baseURL}/plan`, {    
      "plan_id": plan_id, 
      "user_id": uid, 
      "exercise_id": 2, 
      "set": 3, 
      "rep": 8, 
      "weight":0, 
      "sequence": 1});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 6, 
        "set": 3, 
        "rep": 8, 
      "weight":0, 
      "sequence": 1});
    await axios.post(`${baseURL}/plan`, {    
      "plan_id": plan_id, 
      "user_id": uid, 
      "exercise_id": 4, 
      "set": 4, 
      "rep": 12, 
      "weight":0, 
      "sequence": 2});
    await axios.post(`${baseURL}/plan`, {    
      "plan_id": plan_id, 
      "user_id": uid, 
      "exercise_id": 6, 
      "set": 4, 
      "rep": 12, 
      "weight":0, 
      "sequence": 2})
    await axios.post(`${baseURL}/plan`, {    
      "plan_id": plan_id, 
      "user_id": uid, 
      "exercise_id": 4, 
      "set": 4, 
      "rep": 12, 
      "weight":0, 
      "sequence": 3});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 3, 
        "set": 4, 
        "rep": 12, 
      "weight":0, 
      "sequence": 3});
  }

  const addFive = async () => {
    setPlanId(plan_id + 1);
    console.log(plan_id);
    postExercises();
    async function postExercises() {
    await axios.post(`${baseURL}/plan`, {    
      "plan_id": plan_id, 
      "user_id": uid, 
      "exercise_id": 2, 
      "set": 5, 
      "rep": 5, 
      "weight":0, 
      "sequence": 1});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 1, 
        "set": 5, 
        "rep": 5, 
      "weight":0, 
      "sequence": 1});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 6, 
        "set": 1, 
        "rep": 5, 
      "weight":0, 
      "sequence": 1});

    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 4, 
        "set": 5, 
        "rep": 5, 
      "weight":0, 
      "sequence": 2});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 6, 
        "set": 5, 
        "rep": 5, 
      "weight":0, 
      "sequence": 2});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 1, 
        "set": 1, 
        "rep": 5, 
      "weight":0, 
      "sequence": 2});

    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 4, 
        "set": 5, 
        "rep": 5, 
        "weight":0, 
        "sequence": 3});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 3, 
        "set": 5, 
        "rep": 5, 
        "weight":0, 
        "sequence": 3});
    await axios.post(`${baseURL}/plan`, {    
        "plan_id": plan_id, 
        "user_id": uid, 
        "exercise_id": 5, 
        "set": 1, 
        "rep": 5, 
        "weight":0, 
        "sequence": 3});
    }
  }
  return (<div className='temp-container'>
    <div className='plan-container'>
      <div className='plan-title'>
        5*5
      </div>
      <div className='plan-body'>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>squat</td>
              <td>5</td>
              <td>5</td>
            </tr>            
            <tr>
              <td>bench press</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>deadlift</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>push up</td>
              <td>5</td>
              <td>5</td>
            </tr>            
            <tr>
              <td>deadlift</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>bench press</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>push up</td>
              <td>5</td>
              <td>5</td>
            </tr>            
            <tr>
              <td>pull up</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>lat pull down</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={addFive}>add</button>
    </div>
    <div className='plan-container'>
      <div className='plan-title'>
        three-split
      </div>
      <div className='plan-body'>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>squat</td>
              <td>8</td>
              <td>3</td>
            </tr>            
            <tr>
              <td>deadlift</td>
              <td>8</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>push up</td>
              <td>12</td>
              <td>4</td>
            </tr>            
            <tr>
              <td>deadlift</td>
              <td>12</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>rep</td>
              <td>set</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>push up</td>
              <td>12</td>
              <td>4</td>
            </tr>            
            <tr>
              <td>pull up</td>
              <td>12</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={addThree}>add</button>
    </div>
  </div>);
}

export default Template;