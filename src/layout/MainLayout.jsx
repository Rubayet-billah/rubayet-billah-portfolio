/* eslint-disable no-unused-vars */
import BlogDetails from "../components/Blog/BlogDetails";
import InsertBlog from "../components/Blog/InsertBlog";
import ProjectDetails from "../components/Project/ProjectDetails";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-24">
      {/* <Home />
      <Skills />
      <Projects /> */}
      {/* <ProjectDetails /> */}
      {/* <Contact /> */}
      {/* <Blogs /> */}
      {/* <BlogDetails /> */}
      <InsertBlog />
    </div>
  );
};

export default MainLayout;
