import aboutUsImage from "../../../assets/homepage/About_Us.png";

export default function About_Us() {
    return (
        <section className="bg-white px-6 py-16 font-sans sm:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="max-w-xl">
                    <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.02em] text-neutral-900">
                        About Us
                    </p>
                    <h1 className="mb-7 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                        Our Story
                    </h1>
                    <div className="space-y-5 text-sm leading-[1.45] text-neutral-800 sm:text-base">
                        <p>
                            At TOC Construction, we create inspiring, functional spaces built to last.
                            Backed by years of industry experience, we deliver uncompromising quality,
                            reliable craftsmanship, and total transparency on every project.
                        </p>
                        <p>
                            From initial blueprints to the final walkthrough, our team is dedicated to
                            bringing your unique vision to life with meticulous attention to detail.
                            Let&apos;s build something amazing together.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="mt-8 rounded-sm bg-[#1E56A0] px-5 py-3 text-xs font-medium text-white hover:scale-105"
                    >
                        Learn More About Us
                    </button>
                </div>
                <div className="overflow-hidden rounded-md">
                    <img
                        src={aboutUsImage}
                        alt="Architect reviewing construction plans"
                        className="aspect-[3/3] w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}