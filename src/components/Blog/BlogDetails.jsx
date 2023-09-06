import {
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { blogs } from "../../utils/constants";
import { BsBookmark } from "react-icons/bs";

const BlogDetails = () => {
  const { title, author, content, date } = blogs[0];
  return (
    <div className="mx-auto mt-8 px-4">
      <h1 className="text-2xl font-semibold md:text-3xl mb-2">{title}</h1>
      <p className="text-gray-400 text-sm md:text-base mb-2">By {author}</p>
      <p className="text-gray-400 text-sm md:text-base mb-4">{date}</p>
      <div className="prose">{content}</div>
      <div className="flex flex-wrap justify-between mt-5">
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

export default BlogDetails;
