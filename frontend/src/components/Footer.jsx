import React from "react";
import { footerContent } from "../data/content";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  BrandMarkIcon,
} from "./ui/icons";
import "./Footer.css";

const SOCIAL_LINKS = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="foot-col-title">{title}</p>
      <div className="foot-links">
        {links.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const { brandName, brandSub, description, quickLinks, services, contact, legalLinks, copyright } =
    footerContent;

  return (
    <footer className="toc-footer section-pad-sm">
      <div className="container-max">
        <div className="footer-grid">
          <div className="brand-col">
            <div className="brand-mark">
              <div className="brand-icon">
                <BrandMarkIcon />
              </div>
              <div>
                <p className="brand-name">{brandName}</p>
                <p className="brand-sub">{brandSub}</p>
              </div>
            </div>
            <p className="brand-desc">{description}</p>
            <div className="social-row">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <a href="#" className="social-btn" aria-label={label} key={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Services" links={services} />

          <div>
            <p className="foot-col-title">Contact Info</p>
            <div className="contact-list">
              <div className="contact-row">
                <PhoneIcon />
                <span>{contact.phone}</span>
              </div>
              <div className="contact-row">
                <MailIcon />
                <span>{contact.email}</span>
              </div>
              <div className="contact-row">
                <PinIcon />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-row">
          <p>{copyright}</p>
          <div className="bottom-links">
            {legalLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
