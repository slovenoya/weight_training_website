import {React} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './homepage.css';
import logo from './images/icon_barbell.svg'

const HomePage = () => {
  return (
    <div className='container'>
      <header>
        <Link to='/'><svg src={logo} alt="barbell-icon" className='logo'/></Link>
        <nav>
          <ul className='nav-bar-list'>
            <li className='nav-bar-item'><Link to='/#why-us' smooth>Why Us</Link></li>
            <li className='nav-bar-item'><Link to='#beginner' smooth>Beginner</Link></li>
            <li className='nav-bar-item'><Link to='#experienced' smooth>Experienced</Link></li>
            <li className='nav-bar-item'><Link to='#contact-us' smooth>Contact Us</Link></li>
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
              <Link to='#why-us' className='hero-button hero-learn-more' smooth>LEARN MORE</Link>
            </div>
          </div>
          <div className='hero-img'>
            <img src={require('./images/combine.png')} alt="pic"/>
          </div>
        </section>

        <section className='section-why-us' id='why-us'>
          <div className='why-us-header'>
            <span className='why-us-header-slogan'>GymCat: Your All In One Trainer App</span>
          </div>

          <div className='why-us-container'>
            <div className='why-us-item why-us-progressive'>
              <img src="/" alt="pic of weight stacked" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'>Easy, acurate, and </span>
                <span className='why-us-item-description'></span>
              </div>
            </div>

            <div className='why-us-item why-us-customize'>
              <img src="/" alt="pic of measuring" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'></span>
                <span className='why-us-item-description'></span>
              </div>
            </div>

            <div className='why-us-item why-us-classic'>
              <img src="/" alt="pic of famous body builders" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'></span>
                <span className='why-us-item-description'></span>
              </div>
            </div>

            <div className='why-us-item why-us-form'>
              <img src="/" alt="pic of form help" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'></span>
                <span className='why-us-item-description'></span>
              </div>
            </div>
          </div>
        </section>

        <section className='section-for-beginners' id='beginner'>

        </section>

        <section className='section-for-experienced' id='experienced'>

        </section>

        <section className='section-contact-us' id='contact-us'>

        </section>
      </main>
    </div>
  )
}

export default HomePage;