import React from "react";
import "./styles/tokens.css";

import AboutStory from "./components/AboutStory";
import FeaturedProjects from "./components/FeaturedProjects";
import Careers from "./components/Careers";
import CTABanner from "./components/CTABanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="toc-root">
      <AboutStory />
      <FeaturedProjects />
      <Careers />
      <CTABanner />
      <Testimonials />
      <Footer />
    </div>
  );
}
