import {React, useState, useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import Plan from './components/plan/plan'
import Template from './components/template_page/template'
import Train from './components/exercise/exercise'
import plan from './images/plan.png'
import train from './images/train.png'
import template from './images/template.png'
import dashboard from './images/dashboard.png'
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const baseURL =  "http://127.0.0.1:5000";
  const [exercises, setExercises] = useState();
  useEffect(()=>{
    async function fetchData() {
      try{
        const data = await axios.get(`${baseURL}/exercise`);
        setExercises(data.data["exercises"]);
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const [display, setDisplay] = useState('dashboard')
  const [Content, setContent] = useState(<Dashboard id={id} exercises={exercises}/>)
  const [dashName, setDashName] = useState('open')
  const [planName, setPlanName] = useState('')
  const [tempName, setTempName] = useState('')
  const [trainName, setTrainName] = useState('')
  const [nameExtension, setNameExtension] = useState(['', '', '', ''])

  const setPage = (page) => {
    setDisplay(page);
  }

  const logout = () => {
    navigate('/')
  }

  useEffect(
    () => {
      setDashName(nameExtension[0])
      setPlanName(nameExtension[1])
      setTempName(nameExtension[2])
      setTrainName(nameExtension[3])
    }, [nameExtension]
  )

  useEffect(() => {
    if (display === 'dashboard') {
      setContent(<Dashboard user_id={id} exercises={exercises}/>);
      setNameExtension(['open', '', '', ''])
    } else if (display === 'plan') {
      setContent(<Plan user_id={id} exercises={exercises}/>);
      setNameExtension(['', 'open', '', ''])
    } else if (display === 'template') {
      setContent(<Template user_id={id}/>);
      setNameExtension(['', '', 'open', ''])
    } else if (display === 'train') {
      setContent(<Train exercises={exercises}/>);
      setNameExtension(['', '', '', 'open'])
    } else{
      console.log('error');
    }
  }, [display, exercises, id]);
 
  return (
    <div className='pro-page'>
      <div className='side-bar'>
        <div className='side-bar-icon'>
          <p>PROFILE</p>
        </div>

        <div className='main-bar'>
          <div className={'side-bar-item '+dashName} onClick={() => {
            setPage('dashboard');}}>
            <img src={dashboard} alt="icon" />
            <p>Dashboard</p>
          </div>
          <div className={'side-bar-item '+planName} onClick={() => {
            setPage('plan');}}>
            <img src={plan} alt="icon" />
            <p>Plan</p>
          </div>
          <div className={'side-bar-item '+tempName} onClick={() => {
          setPage('template');}}>
            <img src={template} alt="icon" />
            <p>Templates</p>
          </div>
          <div className={'side-bar-item '+trainName} onClick={() => {
          setPage('train');}}>
            <img src={train} alt="icon" />
            <p>Exercise</p>
          </div>
        </div>

        <div className='side-logout' onClick={logout}>
          <p>LOG OUT</p>
        </div>
      </div>
      <div className='content'>
        {Content}
      </div>
    </div>
  )
}

export default Profile;