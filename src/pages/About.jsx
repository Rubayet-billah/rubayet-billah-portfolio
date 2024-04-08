/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiBook,
  FiDownload,
} from "react-icons/fi";
import PagesHeading from "../components/common/PagesHeading";
import profileImg from "../assets/Images/img7.png";
import PageContainer from "../components/common/PageContainer";
import { myInfo } from "../utils/constants";

const About = () => {
  const {
    email,
    fullName,
    address,
    facebook,
    facebookChat,
    linkedin,
    github,
    phoneNumber,
    twitter,
  } = myInfo;
  return (
    <PageContainer id="about">
      <PagesHeading>About Me</PagesHeading>
      <div className="container mx-auto">
        <div className="rounded-lg shadow-lg ">
          <div className="flex flex-col items-center md:flex-row md:space-x-4">
            <div className="mb-4 md:w-1/3">
              {/* Image Section */}
              <img
                src={profileImg}
                alt="Your Name"
                className="w-full h-auto max-w-xs mx-auto rounded-full"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="mb-4 text-3xl font-semibold uppercase">
                Hi There
              </h1>
              <p className="mb-4">
                I'm a passionate web developer with a strong foundation in
                front-end and back-end technologies. I love building web
                applications that are both functional and visually appealing.
              </p>
              <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex items-center">
                  <FiUser className="mr-2 text-teal-300" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Name</h3>
                    <p>{fullName}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="mr-2 text-teal-300" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Email</h3>
                    <p>{email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-2 text-teal-300" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Phone</h3>
                    <p>{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiLinkedin className="mr-2 text-teal-300" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">
                      LinkedIn
                    </h3>
                    <p>
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        linkedin.com/in/rubayet-billah
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiBook className="mr-2 text-teal-300" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">
                      Education
                    </h3>
                    <p>Bachelor's in Physics</p>
                    <p>BSMR Science and Technology University</p>
                    <p>Gopalganj, Bangladesh</p>
                    <p>2019 - Present</p>
                  </div>
                </div>
              </section>
              <hr className="my-5 border border-gray-600" />
              <section className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                <button
                  className="flex items-center justify-center w-full px-4 py-2 text-teal-300 transition duration-300 ease-in-out border border-teal-300 rounded-md hover:bg-teal-300 hover:text-white md:w-auto"
                  onClick={() => {
                    // Add your contact action here
                  }}
                >
                  <FiMail className="mr-2" />
                  Contact Me
                </button>
                <button
                  className="flex items-center justify-center w-full px-4 py-2 text-teal-300 transition duration-300 ease-in-out border border-teal-300 rounded-md hover:bg-teal-300 hover:text-white md:w-auto"
                  onClick={() => {
                    // Add your download CV action here
                  }}
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
