import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { TProject } from "@types";

const ProjectsViewer = ({projects}:{ projects: TProject[] }) => {

  return (
    <>
      {projects && (
        <Routes>
          {projects.map((project : TProject) => (
            <Route
              key={project.title}
              path={project.title}
              element={<ProjectDetails project={project} />}
            />
          ))}
        </Routes>
      )}
    </>
  );
};

export default ProjectsViewer;
