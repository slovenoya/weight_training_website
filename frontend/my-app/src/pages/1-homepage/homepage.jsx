import {React} from 'react';
import {Link} from 'react-router-dom'

import './homepage.css';
import logo from './images/icon_barbell.svg'

const HomePage = () => {
  return (
    <div className='container'>
      <header>
        <Link to='/'><svg src={logo} alt="barbell-icon" className='logo'/></Link>
        <nav>
          <ul className='nav-bar-list'>
            <li className='nav-bar-item'><Link to='/'>Why Us</Link></li>
            <li className='nav-bar-item'><Link to='/'>Beginner</Link></li>
            <li className='nav-bar-item'><Link to='/'>Experienced</Link></li>
            <li className='nav-bar-item'><Link to='/'>Contact Us</Link></li>
            <li className='nav-bar-item'><Link to='login' className='hero-button'>Start Workout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='section-hero-page'>
          <div className='hero-text'>
            <div className='hero-slogan'>
              <span>A smart trainer that customizes your plan, every workout. </span>
            </div>
            <div className='hero-description'>
              <span>GymCat will maximize your gain by periodically loading and deloading workout volume, varying workout intensity, analyzing your provided data, and better your form. </span>
            </div>
            <div className='hero-redirection'>
              <Link to='/login' className='hero-button'>START YOUR CHANGE</Link>
              <Link to='/#section-why-us' className='hero-button hero-learn-more'>LEARN MORE</Link>
            </div>
          </div>
          <div className='hero-img'>
            <img src={require('./images/combine.png')} alt="pic"/>
          </div>
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