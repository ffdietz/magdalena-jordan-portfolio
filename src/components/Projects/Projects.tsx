import { forwardRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import ProjectsIndex from "./ProjectsIndex";
import ProjectsViewer from "./ProjectsViewer";

import { getProjects } from "../../api/controllers";
import { ViewLayout } from "../../styles/LayoutView";
import { ProjectsContainer } from "./ProjectsStyle";

const Projects = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [isLoading]);

  return (
    <ViewLayout ref={ref}>
      <ProjectsContainer>
        <BrowserRouter>
          {isLoading ? null : (
            <>
              <ProjectsIndex projects={projects} />
              <ProjectsViewer projects={projects} />
            </>
          )}
        </BrowserRouter>
      </ProjectsContainer>
    </ViewLayout>
  );
});

export default Projects;
