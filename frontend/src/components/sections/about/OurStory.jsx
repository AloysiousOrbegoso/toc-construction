import ourStoryImage from "../../../assets/about/our-story.jpg";

export default function OurStory() {
  return (
    <section id="story" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-360 grid-cols-2 items-center gap-15 px-22">
        <div className="max-w-[520px]">
          <h2 className="mb-6 font-body text-[40px] font-semibold leading-[1.2] text-[#1a1c1c]">
            Our Story
          </h2>
          <div className="space-y-4 font-display text-[21px] leading-[1.22] text-[#444651]">
            <p>
              For over decades, TOC Construction has stood as a pillar of structural stability and
              technical proficiency in the Philippine engineering landscape. Founded on the principles
              of rigorous precision and unyielding integrity, we have evolved from a focused enterprise
              into a premier infrastructure partner capable of executing large-scale, complex projects.
            </p>
            <p>
              Our journey is marked by a relentless pursuit of excellence. We do not just build
              structures; we forge lasting partnerships and lay the foundations for communities to
              thrive. Every project is a testament to our commitment to delivering uncompromising
              quality, adhering to strict safety protocols, and meeting the evolving demands of modern
              engineering.
            </p>
            <p>
              Today, our portfolio spans vital national infrastructure to monumental commercial
              developments. Our legacy is built not merely on concrete and steel, but on the trust we
              earn from our clients, project by project, year after year.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[rgba(197,197,211,0.3)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
          <img
            src={ourStoryImage}
            alt="Construction workers reviewing blueprints on site"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
