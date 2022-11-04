import {React, useState, useEffect} from 'react'
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
  const [display, setDisplay] = useState('dashboard')
  const [Content, setContent] = useState(<Dashboard />)
  const setPage = (e, page) => {
    e.target.className += 'open';
    setDisplay(page);
  }

  useEffect(() => {
    if (display === 'dashboard') {
      setContent(<Dashboard />)
    } else if (display === 'plan') {
      setContent(<Plan />)
    } else if (display === 'template') {
      setContent(<Template />)
    } else if (display === 'train') {
      setContent(<Train />)
    } else{
      console.log('error')
    }
  }, [display]);

  return (
    <div className='pro-page'>
      <div className='side-bar'>
        <div className='side-bar-icon'>
          <p>GYMCAT</p>
        </div>
        <div className='main-bar'>
          <div className='open side-bar-item' onClick={() => setPage('dashboard')}>
            <img src={dashboard} alt="icon" />
            <p>Dashboard</p>
          </div>
          <div className='side-bar-item' onClick={() => setPage('plan')}>
            <img src={plan} alt="icon" />
            <p>Plan</p>
          </div>
          <div className='side-bar-item' onClick={() => setPage('template')}>
            <img src={template} alt="icon" />
            <p>Templates</p>
          </div>
        </div>
        <div className='side-bar-item' onClick={() => setPage('train')}>
          <img src={train} alt="icon" />
          <p>Train</p>
        </div>
      </div>
      <div>
        {Content}
      </div>
    </div>
  )
}

export default Profile;