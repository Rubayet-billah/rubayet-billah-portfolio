import { useState } from "react";
import Project from "../components/Project/Project";
import PagesHeading from "../components/common/PagesHeading";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => setProjects(data));

  return (
    <div id="projects">
      <PagesHeading>Projects</PagesHeading>
      <section
        className="grid 
    gap-12"
      >
        {projects?.map((project, idx) => (
          // <Project project={project} />
          <Project key={idx} project={project} index={idx} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
