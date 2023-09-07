/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsGithub, BsGlobeAsiaAustralia } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import "./ProjectDetails.css";
import UserReview from "./UserReview";
import ReviewInputForm from "./ReviewInputForm";
import { features } from "../../utils/constants";

const ProjectDetails = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeFeature = features[activeImageIndex];
  const activeImageFeatures = activeFeature?.keyFeatures.split(".");
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

  return (
    <div>
      <section className="md:flex justify-between">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-2xl md:text-5xl font-bold mb-2">Staff Deck</h1>
          <h3 className="text-xl md:text-2xl text-gray-200">
            Complete HR management solution
          </h3>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 md:flex md:justify-end">
          <a
            href="https://github.com/yourusername/yourrepository"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline text-xl md:text-2xl mr-2 md:mr-4 relative"
          >
            <BsGithub />
            <span className="tooltip">GitHub Code Link</span>
          </a>
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-outline text-xl md:text-2xl relative"
          >
            <BsGlobeAsiaAustralia />
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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ipsa
          quaerat culpa soluta veritatis sed doloremque, ratione explicabo
          temporibus delectus mollitia aliquam recusandae illo provident. Quam
          impedit possimus quaerat incidunt placeat, corporis ullam dolor magnam
          et ipsa fuga debitis voluptatibus unde? Dolores repellat excepturi
          necessitatibus facere recusandae natus quasi quos et nihil repellendus
          officiis deserunt porro illo, unde labore sequi voluptates. Accusamus
          assumenda minima nulla quos illo autem praesentium. Inventore ut fugit
          aperiam eaque ex illum consequatur dolorem saepe distinctio eveniet
          sed, at quibusdam fugiat nemo. Dolorum quod doloribus rerum corrupti
          molestiae assumenda asperiores consequuntur, vel temporibus, iure qui
          provident?
        </p>
      </div>
      <div className="bg-zinc-800 p-2 md:p-8 rounded">
        <h2 className="text-xl md:text-3xl font-bold mb-5 capitalize">
          User Review
        </h2>
        <div>
          <UserReview />
        </div>
        <ReviewInputForm />
      </div>
    </div>
  );
};

export default ProjectDetails;
