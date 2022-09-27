import {React} from 'react';
import {Link} from 'react-router-dom'

import './homepage.css';
import logo from './images/icon_barbell.svg'

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className='nav-bar-list'>
            <li className='nav-bar-item nav-bar-logo'><img src={logo} alt="barbell-icon" width="30px"/></li>
            <li className='nav-bar-item'>Why Us</li>
            <li className='nav-bar-item'>Beginner</li>
            <li className='nav-bar-item'>Experienced</li>
            <li className='nav-bar-item'>Contact Us</li>
            <li className='nav-bar-item nav-bar-login'><Link to='login'>Start Workout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='section-hero-page'>
          <img src={require('./images/lifter.jpg')} alt="pic" width="300px"/>
        </section>

        <section className='section-why-us'>

        </section>

        <section className='section-for-beginners'>

        </section>

        <section className='section-for-experienced'>

        </section>

        <section className='section-contact-us'>

        </section>
      </main>
    </div>
  )
}

export default HomePage;