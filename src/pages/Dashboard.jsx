import React from 'react'
// import Navbar from '../components/Navbar';
import Features from '../pages/Features'
import About from '../pages/About'
import Pricing from '../pages/Pricing';
import ContactUs from '../pages/ContactUs';
import Clients from '../components/Clients';
import Portfolio from '../pages/Portfolio';
import Team from '../pages/Team';
import Concepts from '../pages/Concepts';
// import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div>

      <div id='concepts'>
        <Concepts />
      </div>

      <div id='features'>
        <Features />
      </div>

      <div id="about">
        <About />
      </div>

      <div id='portfolio'>
        <Portfolio />
      </div>

      <div id='team'>
        <Team />
      </div>
      
      <div id='pricing'>
        <Pricing />
      </div>

      <div id='contact'>
        <ContactUs />
      </div>

      <Clients />
    </div>
  )
}

export default Dashboard