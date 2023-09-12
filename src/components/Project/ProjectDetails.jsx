/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BsFillStarFill, BsLink45Deg } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import "./ProjectDetails.css";
import UserReview from "./UserReview";
import ReviewInputForm from "./ReviewInputForm";
import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../../redux/features/project/projectApi";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: project, isLoading } = useGetProjectByIdQuery(id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleImageChange = (newIndex) => {
    setActiveImageIndex(newIndex);
    setShouldAnimate(true);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((activeImageIndex + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  if (isLoading) {
    return <div className="text-4xl text-center">Loading...</div>;
  }
  const {
    description,
    features,
    githubLink,
    liveLink,
    name,
    ratings,
    technologiesUsed,
    projectType,
    userReviews,
  } = project;

  const activeFeature = features[activeImageIndex];
  const activeImageFeatures = activeFeature?.keyFeatures.split(".");
  return (
    <div>
      <section className="md:flex justify-between">
        <div className="md:pr-12">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-2">{name}</h1>
            <span className="ml-2">
              {technologiesUsed?.slice(0, 3).map((tech, idx) => (
                <div
                  key={idx}
                  className={`badge badge-outline border-2 font-semibold text-xs mr-1 md:text-base md:badge-lg`}
                  style={{ borderColor: `${tech.color}` }}
                >
                  {tech.name}
                </div>
              ))}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl text-gray-200">{projectType}</h3>
        </div>
        <div className="mt-4 md:mt-0 flex md:justify-end">
          <div className="text-xl md:text-4xl font-bold flex md:mt-1 mr-5">
            <span>{ratings}</span>
            <BsFillStarFill className="mt-1 md:mt-0 ml-2 text-yellow-400" />
          </div>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon w-12 text-2xl md:text-5xl mr-2 md:mr-4 relative"
          >
            <FaGithubSquare />
            <span className="tooltip">GitHub Code Link</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon w-12 text-2xl md:text-5xl relative"
          >
            <BsLink45Deg />
            <span className="tooltip">Live Website Link</span>
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mt-5 md:mt-8">
        <div className="carousel w-full">
          {features?.map((feature, idx) => (
            <div
              key={idx}
              className={`carousel-item relative w-full ${
                idx === activeImageIndex ? "block" : "hidden"
              }`}
            >
              <div className="border-8 rounded">
                <img
                  src={feature.image}
                  className="w-full rounded"
                  alt={`img-${idx}`}
                />
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  className="btn btn-circle"
                  onClick={() =>
                    handleImageChange(
                      (idx - 1 + features.length) % features.length
                    )
                  }
                >
                  ❮
                </button>
                <button
                  className="btn btn-circle"
                  onClick={() => handleImageChange((idx + 1) % features.length)}
                >
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-5">Key Features</h2>
          <ul>
            {activeImageFeatures?.map((feature, index) => (
              <li className={shouldAnimate ? "fade-left" : ""} key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="my-5 md:my-12">
        <h2 className="text-xl md:text-3xl font-bold mb-5 capitalize">
          About The Software
        </h2>
        <p>{description}</p>
      </div>
      <div className="bg-zinc-800 p-2 md:p-8 rounded">
        <h2 className="text-xl md:text-3xl font-bold mb-5 capitalize">
          User Review
        </h2>
        <div>
          {userReviews?.map((review, idx) => (
            <UserReview key={idx} review={review} />
          ))}
        </div>
        <ReviewInputForm />
      </div>
    </div>
  );
};

export default ProjectDetails;
