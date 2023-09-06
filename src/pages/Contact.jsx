import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import PagesHeading from "../components/common/PagesHeading";
import { myInfo } from "../utils/constants";
import SocialLinkCard from "../components/Contact/SocialLinkCard";

const Contact = () => {
  return (
    <div id="contacts">
      <PagesHeading>Contact</PagesHeading>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <IoLocationOutline className="text-3xl md:text-6xl text-teal-300 mb-4" />
          <h3 className="text-xl font-bold uppercase mb-2">Address</h3>
          <p>{myInfo.address}</p>
        </div>
        <div>
          <IoCallOutline className="text-3xl md:text-6xl text-teal-300 mb-4" />
          <h3 className="text-xl font-bold uppercase mb-2">Phone</h3>
          <p>{myInfo.phoneNumber}</p>
        </div>
        <div>
          <IoMailOutline className="text-3xl md:text-6xl text-teal-300 mb-4" />
          <h3 className="text-xl font-bold uppercase mb-2">Email</h3>
          <p>{myInfo.email}</p>
        </div>
        <div>
          <RiMessengerLine className="text-3xl md:text-6xl text-teal-300 mb-4" />
          <h3 className="text-xl font-bold uppercase mb-2">Facebook Chat</h3>
          <a
            href={myInfo.facebookChat} // Replace with your actual Facebook Chat link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Chat Now
          </a>
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:space-x-4 mt-5 md:mt-12">
        <div className="flex-1">
          <div className="my-8 md:pr-12">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">
              Social Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SocialLinkCard
                icon={
                  <FaLinkedin className="text-3xl md:text-6xl text-blue-500" />
                }
                title="LinkedIn"
                link={myInfo.linkedin}
              />
              <SocialLinkCard
                icon={
                  <FaGithub className="text-3xl md:text-6xl text-gray-500" />
                }
                title="GitHub"
                link={myInfo.github}
              />
              <SocialLinkCard
                icon={
                  <FaTwitter className="text-3xl md:text-6xl text-blue-400" />
                }
                title="Twitter"
                link={myInfo.twitter}
              />
              {/* Add more SocialLinkCard components for additional social links */}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="my-8">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">
              Contact Me
            </h2>
            <form>
              <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="userName"
                    className="block text-gray-600 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Your name"
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="userEmail"
                    className="block text-gray-600 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="Your email"
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-teal-500 w-full"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
