import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const ProjectsViewer = ({ projects }) => {
  const projectRoutes = projects.map((project, key) => {
    return (
      <Route
        key={key}
        path={project.fields.title}
        element={<ProjectDetails project={project.fields} />}
      />
    );
  });

  return (
    <>
      {projects && (
        <Routes>
          {projectRoutes}
          <Route path={""} element={<ProjectDetails project={""} />} />
        </Routes>
      )}
    </>
  );
};

export default ProjectsViewer;
