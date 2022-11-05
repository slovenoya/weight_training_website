import {React, useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Dashboard from './dashboard/Dashboard'
import Plan from './plan/plan'
import Template from './template_page/template'
import Train from './train/train'
import './profile.css';
import plan from './images/plan.png'
import train from './images/train.png'
import template from './images/template.png'
import dashboard from './images/dashboard.png'

const Profile = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState('dashboard')
  const [Content, setContent] = useState(<Dashboard />)
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
      setContent(<Dashboard />);
      setNameExtension(['open', '', '', ''])
    } else if (display === 'plan') {
      setContent(<Plan />);
      setNameExtension(['', 'open', '', ''])
    } else if (display === 'template') {
      setContent(<Template />);
      setNameExtension(['', '', 'open', ''])
    } else if (display === 'train') {
      setContent(<Train />);
      setNameExtension(['', '', '', 'open'])
    } else{
      console.log('error');
    }
  }, [display]);

  return (
    <div className='pro-page'>
      <div className='side-bar'>
        <div className='side-bar-icon'>
          <p>GYMCAT</p>
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
      <div>
        {Content}
      </div>
    </div>
  )
}

export default Profile;