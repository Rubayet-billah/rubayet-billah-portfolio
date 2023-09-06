/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import BlogDetails from "../components/Blog/BlogDetails";
import InsertBlog from "../components/Blog/InsertBlog";
import ProjectDetails from "../components/Project/ProjectDetails";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Header from "../components/Shared/Header";
import About from "../pages/About";

const MainLayout = () => {
  return (
    <div
      className="font-montserrat min-h-screen
        main-background
        background-animate text-white"
    >
      <Header />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-24">
        <Home />
        <Skills />
        <Projects />
        {/* <ProjectDetails /> */}
        <Contact />
        <About />
        {/* <Blogs /> */}
        {/* <BlogDetails /> */}
        {/* <InsertBlog /> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
