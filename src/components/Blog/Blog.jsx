/* eslint-disable react/prop-types */
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, author, authorProfileImage, content, date } = blog;

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-zinc-900 dark:text-gray-100">
      <div className="flex space-x-4">
        <img
          alt={author}
          src={
            authorProfileImage ||
            "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
          }
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="/"
            className="text-sm font-semibold"
          >
            {author || "Annonymous User"}
          </a>
          <span className="text-xs dark:text-gray-400">{date}</span>
        </div>
      </div>
      <div>
        {/* <img
          src={`https://source.unsplash.com/random/100x100/?${id}`}
          alt=""
          className="object-cover w-full mb-4  dark:bg-gray-500"
        /> */}
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm dark:text-gray-400">
          {content.length > 200 ? `${content.slice(0, 199)}...` : content}{" "}
          <Link to={`/blogs/${id}`}>
            <button className="text-blue-600 font-bold mb-5">Read More</button>
          </Link>
        </p>
      </div>
      <div
        className="flex flex-wrap justify-between"
        style={{ marginTop: "auto" }}
      >
        <div className="flex space-x-2 text-sm">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <AiOutlineLike />
            <span>283</span>
          </button>
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <AiOutlineComment />
            <span>30</span>
          </button>
        </div>
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            <AiOutlineShareAlt />
          </button>
          <button aria-label="Bookmark this post" type="button" className="p-2">
            <BsBookmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
