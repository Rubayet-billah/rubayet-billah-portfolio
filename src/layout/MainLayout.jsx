import Home from "../pages/Home";
import Skills from "../pages/Skills";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-24">
      <Home />
      <Skills />
    </div>
  );
};

export default MainLayout;
