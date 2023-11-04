import * as React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './components/Footer.css';
import Home from './components/Home'
import Clients from './components/Clients';
import Mission from './components/Mission';
import Team from './components/Team'


function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Routes>
      <Route
            path="/"
            element={
              <>
                <RouteIndex />
              </>
            }
          />
          <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Mission' element={<Mission/>} />
        <Route path='Team' element={<Team/>} />
        <Route path='Services' element={<Services />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Clients' element={<Clients />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
      </Routes>
      <br />
      <br />
      <Footer />
    </>
    
  );
}

function RouteIndex() {
  return <Home />;
}

export default App;