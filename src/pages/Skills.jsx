import Skill from "../components/Skill/Skill";
import PagesHeading from "../components/common/PagesHeading";
import { skills } from "../utils/constants";

const Skills = () => {
  return (
    <div id="skills">
      <PagesHeading>Skills</PagesHeading>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills?.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </section>
    </div>
  );
};

export default Skills;
