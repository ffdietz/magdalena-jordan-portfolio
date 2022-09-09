import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects'
import Biography from './Biography';
import Contact from './Contact'
import { useRef } from 'react';

const App = () => {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const biographyRef = useRef(null);

  return (
    <>
      <Navbar refs={{homeRef, projectsRef, biographyRef, contactRef}} />
      <Home ref={homeRef} />
      <Projects ref={projectsRef}/>
      <Biography ref={biographyRef} />
      <Contact ref={contactRef} />
    </>
  );
}


export default App;
