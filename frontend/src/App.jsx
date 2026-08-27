import { Route, Routes } from "react-router-dom";
import Navbar from "./components/sections/universal/Navbar";
import Footer from "./components/sections/universal/Footer";
import Home from "./components/pages/Home";
import ProjectsPage from "./components/pages/ProjectsPage";
import About from "./components/pages/About";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;