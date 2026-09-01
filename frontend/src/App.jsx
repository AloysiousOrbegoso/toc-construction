import { Route, Routes } from "react-router-dom";
import Navbar from "./components/sections/universal/Navbar";
import Footer from "./components/sections/universal/Footer";
import Home from "./components/pages/Home";
import ProjectsPage from "./components/pages/ProjectsPage";
import ProjectDetailPage from "./components/pages/ProjectDetailPage";
import About from "./components/pages/About";
import ExploreServices from "./components/pages/Explore_Services";
import Careers from "./components/pages/Careers";
import GetQuote from "./components/pages/GetQuote";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/services" element={<ExploreServices />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/careers" element={<Careers />} />
        <Route path="/get-quote" element={<GetQuote />} />     
      </Routes>
      <Footer />
    </>
  );
}

export default App;