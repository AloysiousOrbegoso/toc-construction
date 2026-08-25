import imageHero from "../../assets/slicedimage.png";
import imageHero2 from "../../assets/hero2image.png";
import checkIcon from "../../assets/check.png";
import Right from "../../assets/Right.png";
import Concrete from "../../assets/ConcreteBatchingPlant.png";
import Provinces from "../../assets/Provines.png";
import Equipment from "../../assets/Equipments.png";
import one from "../../assets/ourproccessicon/1.png";
import two from "../../assets/ourproccessicon/2.png";
import three from "../../assets/ourproccessicon/3.png";
import four from "../../assets/ourproccessicon/4.png";

import About_Us from "../sections/homepage/About_Us";
import Projects from "../sections/homepage/Projects";
import Careers from "../sections/homepage/Careers";
import CTABanner from "../sections/homepage/CTABanner";
import Testimonials from "../sections/homepage/Testimonials";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            We Build
            <br />
            The Future
          </h1>

          <p className="hero-p">
            Setting new standards in high-rise living
            <br />
            with precision engineering and
            <br />
            sustainable design.
          </p>

          <div className="hero-container-btn">
            <button className="hero-btn1">Get a Quote</button>
            <button className="hero-btn2">View Projects</button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <img className="hero-stat-icon" src={Concrete} alt="" />
              <div>
                <p className="hero-stat-number">20</p>
                <p className="hero-stat-label">Concrete Batching Plants</p>
              </div>
            </div>

            <div className="hero-stat">
              <img className="hero-stat-icon" src={Provinces} alt="" />
              <div>
                <p className="hero-stat-number">40</p>
                <p className="hero-stat-label">Provinces</p>
              </div>
            </div>

            <div className="hero-stat">
              <img className="hero-stat-icon" src={Equipment} alt="" />
              <div>
                <p className="hero-stat-number">1500</p>
                <p className="hero-stat-label">Equipment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={imageHero} alt="image hero" />
        </div>
      </section>

      <section className="hero-section2">
        <div className="hero-content2">
          <div className="hero-content3">
            <h4 className="hero-eyebrow">What we do</h4>
            <h1 className="hero-h1">
              Complete Construction <br />
              Solutions
            </h1>
            <p className="hero-content3-p">
              From concept to completion, we deliver exceptional construction
              services with quality, safety, and <br />
              innovation at the core of everything we build.
            </p>

            <div className="check-list">
              <div className="check-item">
                <img className="check-icon" src={checkIcon} alt="" />
                <p>Design & Build</p>
              </div>
              <div className="check-item">
                <img className="check-icon" src={checkIcon} alt="" />
                <p>Project Management</p>
              </div>
              <div className="check-item">
                <img className="check-icon" src={checkIcon} alt="" />
                <p>General Contracting</p>
              </div>
              <div className="check-item">
                <img className="check-icon" src={checkIcon} alt="" />
                <p>Renovation & Remodeling</p>
              </div>
            </div>

            <button className="btn-explore">
              Explore All Services
              <img
                src={Right}
                alt="ExploreAllServices"
                className="right-icon"
              />
            </button>
          </div>

          <div className="hero-content-image2">
            <img
              src={imageHero2}
              alt="Construction sites and heavy equipment"
            />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="process-container2">
            <span className="process-eyebrow">Our Process</span>
            <h2 className="process-heading">How We Work</h2>
            <p className="process-lead">
              A streamlined process that ensures your project is delivered on
              time, on budget, and beyond expectations.
            </p>
            <button className="btn-outline-dark">
              Learn More
              <img src={Right} alt="" className="right-icon" />
            </button>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-icon">
                <img src={one} alt="" />
              </div>
              <div>
                <span className="process-step-number">01</span>
                <span className="process-step-title">Consultation</span>
              </div>
              <p className="process-step-desc">
                Understanding your vision and requirements
              </p>
            </div>

            <div className="process-step">
              <div className="process-icon">
                <img src={two} alt="" />
              </div>
              <div>
                <span className="process-step-number">02</span>
                <span className="process-step-title">Planning</span>
              </div>
              <p className="process-step-desc">
                Detailed planning and strategy development
              </p>
            </div>

            <div className="process-step">
              <div className="process-icon">
                <img src={three} alt="" />
              </div>
              <div>
                <span className="process-step-number">03</span>
                <span className="process-step-title">Construction</span>
              </div>
              <p className="process-step-desc">
                Expert construction with quality assurance
              </p>
            </div>

            <div className="process-step">
              <div className="process-icon">
                <img src={four} alt="" />
              </div>
              <div>
                <span className="process-step-number">04</span>
                <span className="process-step-title">Delivery</span>
              </div>
              <p className="process-step-desc">
                On-time delivery with satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
      <About_Us />
      <Projects />
      <Careers />
      <CTABanner />
      <Testimonials />
    </div>
  );
};

export default Home;
