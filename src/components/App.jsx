import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects'
import Biography from './Biography';
import Contact from './Contact'
import { useRef } from 'react';

const App = () => {
  const projectsRef = useRef(null);
  const biographyRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar refs={{projectsRef, biographyRef, contactRef}} />
      <Home/>
      <Projects ref={projectsRef}/>
      <Biography ref={biographyRef} />
      <Contact ref={contactRef} />
    </>
  );
}


export default App;
