import {React, useState} from 'react'
import BodyData from './body_data/BodyData'
import './profile.css';

const Profile = () => {
  const [Display, setDisplay] = useState(<BodyData/>)

  return (
    <div className='pro-page'>
      <header className='pro-header'>
        <p>Gymcat</p>
        <button>Log out</button>
      </header>
      <div className='side-bar'>
        <li>
          <ul>Body Data</ul>
          <ul>Plans</ul>
          <ul>Study</ul>
          <ul>Templates</ul>
        </li>
      </div>
      <div>
        {Display}
      </div>
    </div>
  )
}

export default Profile;