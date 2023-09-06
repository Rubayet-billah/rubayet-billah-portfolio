import { useState } from "react";
import Project from "../components/Project/Project";
import PagesHeading from "../components/common/PagesHeading";
import PageContainer from "../components/common/PageContainer";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => setProjects(data));

  return (
    <PageContainer id="projects">
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
    </PageContainer>
  );
};

export default Projects;
