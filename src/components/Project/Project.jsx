const Project = ({ project, index }) => {
  const { image, name, details, description, ratings } = project;

  const indexSign = index % 2 === 0 ? -1 : 1;
  const projectTitleStyle = {
    display: "grid",
    placeItems: "center",
    position: "absolute",
    top: "15%",
    [indexSign === 1 ? "right" : "left"]: "50%",
  };

  return (
    <div
      className={`card w-3/4 md:w-96 relative ${indexSign === 1 && "ml-auto"}`}
    >
      <figure>
        <img
          src="https://static1.squarespace.com/static/5de1ec476b779f2d5a269a55/5de59cd08d3bc0294024082b/600af5c23baa0c79aeafeaa6/1614979719929/8.+Charge+Wall+copy.jpg?format=1500w"
          alt={name}
        />
      </figure>
      <div className="card-body px-0">
        <div>
          <h2
            data-aos={indexSign === 1 ? "fade-right" : "fade-left"}
            className="animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent project-title text-2xl md:text-5xl uppercase font-bold w-3/4 md:w-full shadow-md"
            style={projectTitleStyle}
          >
            {name}
          </h2>
          <button>More ={">"}</button>
        </div>
        <p className="text-xl">{details}</p>
      </div>
    </div>
  );
};

export default Project;
