import About_Us from "../sections/homepage/About_Us";
import Projects from "../sections/homepage/Projects";
import Careers from "../sections/homepage/Careers";
import CTABanner from "../sections/homepage/CTABanner";
import Testimonials from "../sections/homepage/Testimonials";
import Hero from "../sections/homepage/Hero";
import WhatWeDo from "../sections/homepage/WhatWeDo";
import OurProcess from "../sections/homepage/OurProcess";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurProcess />
      <About_Us />
      <Projects />
      <Careers />
      <CTABanner />
      <Testimonials />
    </div>
  );
};

export default Home;