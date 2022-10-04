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
              <img src={require('./images/plate-stack.jpg')} alt="stacked plates" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'>Easy Overloading</span>
                <span className='why-us-item-description'>Gymcat planner will overload 
                your training weight linearly or periodically according to your 
                customized plan, and will result in your making real and reasonable progress 
                through your workout. </span>
              </div>
            </div>

            <div className='why-us-item why-us-customize'>
              <img src={require('./images/measure-arm.jpg')} alt="measuring bicepts" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'>Personalized Training</span>
                <span className='why-us-item-description'>No more look up online for hours 
                just to make a plan, just measure a few numbers that Gymcat needs and we will make 
                your own workout plan according to your current level. </span>
              </div>
            </div>
            <div className='why-us-item why-us-classic'>
              <img src={require('./images/greek-god.jpg')} alt="greek god statue" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'>Classic Plan</span>
                <span className='why-us-item-description'>Famous trainer's plan are displayed and 
                implemented in here, and we will customize the training weight for you. 5*5, Smolov, 
                Jacked and Tan, etc. </span>
              </div>
            </div>

            <div className='why-us-item why-us-form'>
              <img src={require('./images/form-watch.jpg')} alt="watchout for form" />
              <div className='why-us-item-text'>
                <span className='why-us-item-slogan'>Form Tutorial</span>
                <span className='why-us-item-description'>Compiled form tutorials are provided
                under different workout sets, we also provide web crawlers to find the most viewed
                tutorials of each workout movements for you, no need to switch between websites. </span>
              </div>
            </div>
          </div>
        </section>

        <section className='section-for-beginners' id='beginner'>
          <div className='beginner-header'>
            <span className='beginner-header-slogan'>Your Journey of Getting Stronger</span>
          </div>
          <div className='beginner-container'>
            <div className='beginner-item beginner-goal-setting'>
              <img src={require('./images/goal.jpg')} alt="goal" />
              <div>
                <span class='beginner-item-title'>
                  Make a Goal
                </span>
                <span className='beginner-item-description'>
                  Beginners have the fastest gain if they are properly instructed, and setting a goal is very important for beginners who don't have a lot of knowledge for workout. 
                </span>
              </div>
            </div>
            <div className='beginner-item beginner-form-watching'>
              <img src={require('./images/form-watch.jpg')} alt="form-watching" />
              <span class='beginner-item-title'>Exercise Correctly</span>
              <span className='beginner-item-description'>Gymcat will provide videos and instructions on how to correctly perform the workout, and a good form is the cornerstone for making progress. </span>
            </div>

            <div className='beginner-item beginner-risk-avoid'>
              <img src={require('./images/risk.jpg')} alt="avoiding risk" />
              <span class='beginner-item-title'>Mobility Check</span>
              <span className='beginner-item-description'>Mobility issues could lead to serious injuries and form problem. It is impossible to have a good form without a good mobility, and Gymcat will check and improve your mobility. </span>
            </div>

            <div className='beginner-item beginner-fast-growth'>
              <img src={require('./images/growth.jpg')} alt="plan changes" />
              <span class='beginner-item-title'>Add Weight</span>
              <span className='beginner-item-description'>Intensiveness of workout will improve your body, and knowing how much to add is very important. Gymcat will help you to bookkeep your progress and automatically add weight in your plan. </span>
            </div>
          </div>
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