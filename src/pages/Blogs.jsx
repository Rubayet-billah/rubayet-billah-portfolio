import Blog from "../components/Blog/Blog";
import PageContainer from "../components/common/PageContainer";
import { blogs } from "../utils/constants";

const Blogs = () => {
  // Sample blog data (replace with your actual blog data)

  return (
    <PageContainer>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <Blog key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Blogs;
