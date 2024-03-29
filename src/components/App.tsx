import { useEffect, useState } from "react";
import { getProjects } from "../api/controllers";
import Biography from "./Biography/Biography";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import { TProject } from "@types";


const App = () => {
  const [projects, setProjects] = useState<TProject[] | null>(null);

  const fetchProjects = async () => {
    try {
      const entries = await getProjects()
      setProjects(entries as TProject[]);
    } catch(error){ console.error(error) }
  };
  
  useEffect(() => {
    fetchProjects()
  }, []);

  return (
    <>
      <Navbar/>
      <Home />
      {projects && <Projects projects={projects} />}
      <Biography />
      <Contact />
    </>
  );
};

export default App;
