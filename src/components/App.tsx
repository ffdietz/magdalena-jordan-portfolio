import { useEffect, useState } from "react";
import { getProjects } from "../api/controllers";
import { TProject } from "../types";
import Biography from "./Biography/Biography";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import { Stack } from "@chakra-ui/react";

const App = () => {
  const [projects, setProjects] = useState<TProject[] | null>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (res) {
          setProjects(res);
          setLoading(false);
        }
      })
      .catch((error) => console.error(error));
  }, [isLoading]);

  return (
    <>
      <Navbar />
      <Stack>
        <Home />
        {projects && <Projects projects={projects} isLoading={isLoading} />}
        <Biography />
        <Contact />
      </Stack>
    </>
  );
};

export default App;
