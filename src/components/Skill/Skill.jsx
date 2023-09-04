import "./Skill.css";

const Skill = ({ skill }) => {
  const { name, progress, color } = skill;
  return (
    <div data-aos="fade-down">
      <div className="skill-box max-w-xs p-8 md:py-16 mx-auto hover:scale-105 duration-200">
        <p className="text-xl md:text-3xl font-bold uppercase">{name}</p>
        <div
          className={`radial-progress my-5`}
          style={{
            "--value": progress,
            "--size": "10rem",
            "--thickness": "12px",
            color,
          }}
        >
          <span className="text-white text-xl md:text-3xl font-bold">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
