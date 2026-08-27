import aboutUsImage from "../../../assets/homepage/About_Us.svg";

export default function About_Us() {
    return (
        <section className="bg-white px-6 py-16 font-sans sm:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="max-w-xl">
                    <p className="mb-12 text-[22px] font-medium uppercase tracking-[0.02em] text-neutral-900">
                        About Us
                    </p>
                    <h1 className="mb-12 text-[42px] font-semibold tracking-tight text-neutral-950 sm:text-[42px]">
                        Our Story
                    </h1>
                    <div className="mb-10 space-y-5 text-sm leading-[1.45] text-neutral-800 sm:text-base">
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
                        className="mt-6 rounded-sm bg-[#1E56A0] px-5 py-3 text-2x1 font-medium text-white hover:scale-105"
                    >
                        Learn More About Us
                    </button>
                </div>
                <div className="rounded-md">
                    <img
                        src={aboutUsImage}
                        alt="Architect reviewing construction plans"
                        className="m-6 rounded-xl w-250 object-fill"
                    />
                </div>
            </div>
        </section>
    );
}