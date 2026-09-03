import { footerContent } from "../../../data/content";
import {
  BrandMarkIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
} from "../../ui/icons";

const SOCIAL_LINKS = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="font-bold text-lead mb-[clamp(1rem,0.9rem+0.5vw,1.4rem)]">
        {title}
      </p>
      <div className="flex flex-col gap-[clamp(0.6rem,0.55rem+0.25vw,0.85rem)]">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className="w-fit text-small text-muted-on-dark no-underline transition-colors duration-150 ease-in-out hover:text-white"
          >
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
    <footer className="bg-navy-950 bg-[radial-gradient(900px_380px_at_90%_-20%,rgba(47,95,224,0.15),transparent_60%)] text-white py-[clamp(2.5rem,2.2rem+2vw,4rem)] px-6 md:px-12 lg:px-22">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[clamp(2rem,1.6rem+2vw,3.5rem)] pb-[clamp(2rem,1.7rem+1.5vw,3rem)] border-b border-line-on-dark">
          <div className="col-span-1 min-w-0 max-w-[320px]">
            <div className="flex items-center gap-[clamp(0.6rem,0.5rem+0.4vw,0.85rem)] mb-[clamp(1rem,0.85rem+0.6vw,1.5rem)]">
              <BrandMarkIcon className="w-[clamp(36px,2.6vw+24px,46px)] h-[clamp(36px,2.6vw+24px,46px)] shrink-0" />
              <div>
                <p className="font-extrabold text-h3 leading-[1.1]">
                  {brandName}
                </p>
                <p className="text-caption tracking-[0.14em] text-blue-300 font-bold">
                  {brandSub}
                </p>
              </div>
            </div>
            <p className="text-small leading-[1.65] text-muted-on-dark mb-[clamp(1.25rem,1.1rem+0.7vw,1.75rem)]">
              {description}
            </p>
            <div className="flex gap-[clamp(0.5rem,0.45rem+0.25vw,0.7rem)]">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <a
                  href="#"
                  aria-label={label}
                  key={label}
                  className="w-[clamp(34px,2.3vw+24px,40px)] h-[clamp(34px,2.3vw+24px,40px)] rounded-full bg-white/6 border border-line-on-dark flex items-center justify-center text-white transition-[background-color,transform,border-color] duration-180 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:-translate-y-0.5 [&>svg]:w-4 [&>svg]:h-4"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Services" links={services} />

          <div>
            <p className="font-bold text-lead mb-[clamp(1rem,0.9rem+0.5vw,1.4rem)]">
              Contact Info
            </p>
            <div className="flex flex-col gap-[clamp(0.85rem,0.75rem+0.4vw,1.15rem)]">
              <div className="flex items-start gap-[clamp(0.6rem,0.55rem+0.25vw,0.8rem)] text-small text-muted-on-dark [&>svg]:w-[clamp(15px,1vw+10px,18px)] [&>svg]:h-[clamp(15px,1vw+10px,18px)] [&>svg]:shrink-0 [&>svg]:mt-[0.15rem] [&>svg]:text-blue-300">
                <PhoneIcon />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-start gap-[clamp(0.6rem,0.55rem+0.25vw,0.8rem)] text-small text-muted-on-dark [&>svg]:w-[clamp(15px,1vw+10px,18px)] [&>svg]:h-[clamp(15px,1vw+10px,18px)] [&>svg]:shrink-0 [&>svg]:mt-[0.15rem] [&>svg]:text-blue-300">
                <MailIcon />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-start gap-[clamp(0.6rem,0.55rem+0.25vw,0.8rem)] text-small text-muted-on-dark [&>svg]:w-[clamp(15px,1vw+10px,18px)] [&>svg]:h-[clamp(15px,1vw+10px,18px)] [&>svg]:shrink-0 [&>svg]:mt-[0.15rem] [&>svg]:text-blue-300">
                <PinIcon />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-[clamp(0.75rem,0.6rem+0.6vw,1.25rem)] pt-[clamp(1.25rem,1.1rem+0.6vw,1.75rem)] text-caption text-muted-on-dark">
          <p>{copyright}</p>
          <div className="flex gap-[clamp(1rem,0.85rem+0.6vw,1.75rem)]">
            {legalLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="text-muted-on-dark no-underline hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}