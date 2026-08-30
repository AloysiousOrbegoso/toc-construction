import shieldIcon from "../../../assets/careers/shield.png";
import trendingIcon from "../../../assets/careers/trending-up.png";
import usersIcon from "../../../assets/careers/users.png";
import walletIcon from "../../../assets/careers/wallet.png";

const benefits = [
  {
    icon: shieldIcon,
    title: "Competitive Salary",
    text: "Highly attractive base packages plus comprehensive project compensation packages.",
    alt: "Shield icon",
  },
  {
    icon: trendingIcon,
    title: "Career Growth",
    text: "Dedicated corporate upskilling programs to build high-level structural engineering leadership skills.",
    alt: "Trending up icon",
  },
  {
    icon: usersIcon,
    title: "Health Benefits",
    text: "Comprehensive private medical plans for you and your family, with coverage starting on Day 1.",
    alt: "Users icon",
  },
  {
    icon: walletIcon,
    title: "Team Culture",
    text: "Forge long-term collaborative bonds in a modern, safety-certified, award-winning team.",
    alt: "Wallet icon",
  },
];

export default function Join_Us() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 text-center">
          <p className="text-center font-display text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-[#202020]">
            TOC CULTURE
          </p>
          <h2 className="mt-2 font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-bold tracking-[-0.05em] text-[#111111]">
            Why Join Us
          </h2>
        </div>

        <p className="mx-auto mb-8 max-w-[980px] text-center font-display text-[1.05rem] leading-[1.7] text-[#4d5460] sm:text-lg">
          We take care of our team, providing exceptional professional challenges, technical upskilling, and a family-first support system.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon, title, text, alt }) => (
            <article
              key={title}
              className="flex min-h-[260px] flex-col items-center rounded-xl border border-[#d9dce2] bg-[#f8f8f8] p-5 text-center shadow-[0_1px_0_rgba(15,23,42,0.02)] sm:p-6"
            >
              <div className="mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#1e56a0] shadow-[0_10px_20px_-12px_rgba(30,86,160,0.75)]">
                <img src={icon} alt={alt} className="h-[28px] w-[28px] object-contain brightness-0 invert" />
              </div>

              <h3 className="mb-3 font-display text-[1.05rem] font-bold leading-tight text-[#111111] sm:text-[1.15rem]">
                {title}
              </h3>

              <p className="font-display text-[0.9rem] leading-[1.65] text-[#5b6471] sm:text-[0.96rem]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
