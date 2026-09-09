import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/sections/universal/Navbar";
import Footer from "./components/sections/universal/Footer";
import Home from "./components/pages/Home";
import ProjectsPage from "./components/pages/ProjectsPage";
import ProjectDetailPage from "./components/pages/ProjectDetailPage";
import About from "./components/pages/About";
import ExploreServices from "./components/pages/Explore_Services";
import Careers from "./components/pages/Careers";
import GetQuote from "./components/pages/GetQuote";
import Login from "./components/pages/auth/Login";
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import Dashboard from "./components/pages/auth/Dashboard";

function App() {
  const location = useLocation();
  const isAuthPage = ["/login", "/forgot-password", "/dashboard"].includes(location.pathname);

  if (isAuthPage) {
    return <Routes><Route path="/login" element={<Login />} /><Route path="/forgot-password" element={<ForgotPassword />} /><Route path="/dashboard" element={localStorage.getItem("toc_token") ? <Dashboard /> : <Login />} /></Routes>;
  }

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