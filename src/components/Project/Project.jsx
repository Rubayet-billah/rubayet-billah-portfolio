/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { technologies } from "../../utils/constants";
import { Link } from "react-router-dom";

const Project = ({ project, index }) => {
  const { _id, image, name, details, description, ratings } = project;

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
      className={`card w-3/4 md:w-96 relative rounded ${
        indexSign === 1 && "ml-auto"
      }`}
    >
      <figure>
        <img
          src="https://static1.squarespace.com/static/5de1ec476b779f2d5a269a55/5de59cd08d3bc0294024082b/600af5c23baa0c79aeafeaa6/1614979719929/8.+Charge+Wall+copy.jpg?format=1500w"
          alt={name}
        />
      </figure>
      <div className="card-body px-3 bg-zinc-900">
        <div>
          <h2
            data-aos={indexSign === 1 ? "fade-right" : "fade-left"}
            className="animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent project-title text-2xl md:text-5xl uppercase font-bold w-3/4 md:w-full shadow-md"
            style={projectTitleStyle}
          >
            {name}
          </h2>
        </div>
        <section className="flex">
          {technologies?.map((tech, idx) => (
            <div
              key={idx}
              className={`badge badge-outline border-2 text-xs mr-1`}
              style={{ borderColor: `${tech.color}` }}
            >
              {tech.name}
            </div>
          ))}
        </section>
        <p className="text-xl">{details}</p>
        <section className="flex justify-between items-center">
          <div className="badge badge-outline text-xs">
            <BsStarFill className="mr-1 text-yellow-400" /> 4.5
          </div>
          <Link to={`/projects/${_id}`}>
            <button className="flex justify-end items-center text-teal-300 hover:bg-zinc-700 p-1 pl-2 rounded-sm duration-100 font-bold">
              Details{" "}
              <MdOutlineNavigateNext className="text-xl font-extrabold" />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Project;
