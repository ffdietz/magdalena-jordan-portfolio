import { useEffect, useState } from "react";
import { getProjects } from "../api/controllers";
import Biography from "./Biography/Biography";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import { ProjectEntry } from "@types";

const App = () => {
  const [projects, setProjects] =
    useState<ProjectEntry[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const entries = await getProjects();
      setProjects(entries || null);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  return (
    <>
      <Navbar />
      <Home />
      {projects && 
        <Projects projects={projects} isLoading={isLoading} />
      }
      <Biography />
      <Contact />
    </>
  );
};

export default App;
