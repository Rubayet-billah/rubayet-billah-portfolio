import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header";
import MainLayout from "./layout/MainLayout";
import router from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div
        className="font-montserrat min-h-screen
        main-background
        background-animate text-white"
        >
        <Header />
        <MainLayout />
      </div> */}
    </>
  );
}

export default App;
