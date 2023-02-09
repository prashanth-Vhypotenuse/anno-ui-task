import './App.css';
import Navbar from './components/Navbar';
import Features from './pages/Features'
import About from './pages/About'
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Clients from './components/Clients';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Concepts from './pages/Concepts';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

function App() {
  return (
    <div>
      <div className='fixed bottom-0 right-0 bg-gray-700 p-1.5  z-20'>
        <a href="#concepts">
          <i className="icofont-long-arrow-up font-bold text-2xl  text-white"></i>
        </a>
      </div>

      <div>
        <Navbar />
      </div>

      {/* <Routes>
        <Route path="/" element={<Layout />} /> 
        <Route path="/" element={<Concepts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes> */}

      <div id='concepts'>
        <Concepts />
      </div>

      <Fade bottom>
        <div id='features'>
          <Features />
        </div>
      </Fade>

      <Fade bottom>
        <div id="about">
          <About />
        </div>
      </Fade>

      <Zoom bottom>
        <div id='portfolio'>
          <Portfolio />
        </div>
      </Zoom>

      <Fade bottom>
        <div id='team'>
          <Team />
        </div>
      </Fade>
      
      <div id='pricing'>
        <Pricing />
      </div>

      <div id='contact'>
        <ContactUs />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
