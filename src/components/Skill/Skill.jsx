/* eslint-disable react/prop-types */
import "./Skill.css";

const Skill = ({ skill }) => {
  const { name, progress, color } = skill;
  return (
    <div data-aos="fade-down">
      <div className="skill-box max-w-[200px] p-8 mx-auto hover:scale-105 duration-200">
        <p className="md:text-xl font-bold uppercase">{name}</p>
        <div
          className={`radial-progress my-5`}
          style={{
            "--value": progress,
            "--size": "6rem",
            "--thickness": "12px",
            color,
          }}
        >
          <span className="text-white text-xl md:text-xl font-bold">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
