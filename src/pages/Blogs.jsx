import { BsPlus } from "react-icons/bs";
import Blog from "../components/Blog/Blog";
import PageContainer from "../components/common/PageContainer";
import { useGetBlogsQuery } from "../redux/features/blog/blogApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();

  return (
    <PageContainer>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Blogs</h1>
          <Link
            to="/blogs/create"
            className="btn btn-outline rounded text-white gap-0"
          >
            <BsPlus className="text-2xl" /> Post A Blog
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog, idx) => (
            <Blog key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Blogs;
