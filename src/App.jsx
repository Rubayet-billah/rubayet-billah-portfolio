import "./App.css";
import Header from "./components/Shared/Header";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div
      className="font-montserrat min-h-screen
    main-background
        background-animate text-white"
    >
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;
