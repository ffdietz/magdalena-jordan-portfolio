import { useRef } from "react";
import Biography from "./Biography/Biography";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const biographyRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar refs={{ homeRef, projectsRef, biographyRef, contactRef }} />
      <Home ref={homeRef} />
      <Projects ref={projectsRef} />
      <Biography ref={biographyRef} />
      <Contact ref={contactRef} />
    </>
  );
};

export default App;
