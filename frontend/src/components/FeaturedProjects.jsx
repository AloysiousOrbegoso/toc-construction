import React from "react";
import Button from "./ui/Button";
import { projects } from "../data/content";
import "./FeaturedProjects.css";

const TILE_CLASS = {
  tall: "tile-tall",
  wide: "tile-wide",
  square: "tile-sq",
};

export default function FeaturedProjects() {
  return (
    <section className="projects-section section-pad">
      <div className="container-max">
        <div className="text-center mb-10 projects-heading">
          <p className="eyebrow uppercase mb-3 projects-eyebrow">Featured Projects</p>
          <h2 className="h2-display mb-4 projects-title">Our Recent Projects</h2>
          <p className="body-text projects-subtitle">Explore some of our exceptional projects</p>
        </div>

        <div className="projects-grid mb-10">
          {projects.map((project) => (
            <div className={`project-tile ${TILE_CLASS[project.tile]}`} key={project.id}>
              <img src={project.image} alt={project.tag} />
              <span className="tag">{project.tag}</span>
            </div>
          ))}
        </div>

        <div className="center-cta">
          <Button variant="outline">Explore More Projects</Button>
        </div>
      </div>
    </section>
  );
}
