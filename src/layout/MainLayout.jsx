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
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div
      id="home"
      className="min-h-screen text-white font-montserrat main-background background-animate"
    >
      <Header />
      <div className="px-4 pt-24 mx-auto lg:px-0">
        <section className="min-h-[60vh]">
          <Outlet></Outlet>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
