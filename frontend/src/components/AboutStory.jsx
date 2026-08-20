import React from "react";
import Button from "./ui/Button";
import { aboutContent } from "../data/content";
import "./AboutStory.css";

export default function AboutStory() {
  const { eyebrow, title, paragraphs, cta, image } = aboutContent;

  return (
    <section className="section-pad">
      <div className="container-max about-grid">
        <div className="about-col">
          <p className="eyebrow uppercase mb-3 about-eyebrow">{eyebrow}</p>
          <h2 className="h2-display mb-5 about-title">{title}</h2>
          {paragraphs.map((text, i) => (
            <p className="body-text mb-4 about-paragraph" key={i}>
              {text}
            </p>
          ))}
          <Button className="mt-2">{cta}</Button>
        </div>

        <div className="about-col">
          <div className="about-art">
            <div className="blueprint-mark" />
            <img src={image.src} alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
