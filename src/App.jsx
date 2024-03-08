import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Nav />
        <Outlet />
        <AboutMe />
        <Footer />
        <Resume />
        <Contact />
        <Portfolio />
       
        
    </>
  );
}

export default App;