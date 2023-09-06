/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Blog from "../components/Blog/Blog";
import Skills from "../pages/Skills";
import Home from "../pages/Home";
import ProjectDetails from "../components/Project/ProjectDetails";
import Blogs from "../pages/Blogs";
import BlogDetails from "../components/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
