import Hero from "../sections/about/Hero";
import OurStory from "../sections/about/OurStory";
import LifeAtTOC from "../sections/about/LifeAtTOC";
import Leadership from "../sections/about/Leadership";
import Credentials from "../sections/about/Credentials";
import TrustedBy from "../sections/about/TrustedBy";
import ReadyToStart from "../sections/about/ReadyToStart";

export default function About() {
  return (
    <main>
      <Hero />
      <OurStory />
      <LifeAtTOC />
      <Leadership />
      <Credentials />
      <TrustedBy />
      <ReadyToStart />
    </main>
  );
}
