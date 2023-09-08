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
      className="font-montserrat min-h-screen
        main-background
        background-animate text-white"
    >
      <Header />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 pt-24">
        <section className="min-h-[60vh]">
          <Outlet></Outlet>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
