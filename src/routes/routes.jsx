import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Blog from "../components/Blog/Blog";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    //   {
    //     path: "/projects",
    //     element: <Projects />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "/blog",
    //     element: <Blog />,
    //   },
    //   {
    //     path: "/skill",
    //     element: <Skills />,
    //   },
    // ],
  },
]);

export default router;
