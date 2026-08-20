import React from "react";
import Button from "./ui/Button";
import { openRoles, careersImage } from "../data/content";
import "./Careers.css";

export default function Careers() {
  return (
    <section className="section-pad">
      <div className="container-max roles-grid">
        <div className="roles-col">
          <p className="eyebrow uppercase mb-3 roles-eyebrow">Careers</p>
          <h2 className="h2-display mb-8 roles-title">Our Open Roles</h2>

          <div className="roles-list">
            {openRoles.map((role) => (
              <div className="role-row" key={role.id}>
                <div>
                  <p className="role-label">Open Roles</p>
                  <p className="role-title">{role.title}</p>
                  <p className="role-meta">{role.meta}</p>
                </div>
                <Button className="role-cta">Submit Application ↗</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="roles-col">
          <div className="roles-art">
            <span className="site-chip">On Site</span>
            <img src={careersImage.src} alt={careersImage.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
