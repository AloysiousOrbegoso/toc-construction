import { projectsPageContent } from "../../../data/content";

export default function CTASection() {
  const { image, heading, careersCta, contactEyebrow, contactHeading, contactCta } =
    projectsPageContent.cta;

  return (
    <section className="bg-white px-6 py-16 font-sans sm:px-10 lg:px-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl">
        {/* Left — Image with overlay text */}
        <div
          className="relative flex min-h-75 flex-col justify-end overflow-hidden rounded-xl p-6 sm:min-h-95 sm:p-8 md:w-[62%]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(7, 17, 43, 0.7) 30%, rgba(7, 17, 43, 0.15) 100%), url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="max-w-70 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl">
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <a
            href="/careers"
            className="mt-4 w-fit rounded-sm bg-[#1E56A0] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#17447f] sm:text-sm"
          >
            {careersCta}
          </a>
        </div>

        {/* Right — Contact card, overlapping the image */}
        <div className="relative z-10 mx-auto -mt-8 w-[85%] rounded-xl border border-hairline bg-white px-6 py-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:px-10 sm:py-12 md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-[45%] md:-translate-y-1/2">
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500 sm:text-xs">
            {contactEyebrow}
          </p>
          <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-2xl">
            {contactHeading}
          </h3>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#1E56A0] px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#17447f] sm:text-sm"
          >
            {contactCta}
          </a>
        </div>
      </div>
    </section>
  );
}