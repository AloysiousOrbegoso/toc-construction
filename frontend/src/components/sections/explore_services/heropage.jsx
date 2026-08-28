import heroImage from "../../../assets/services_page/heropage.png";

export default function HeroPage() {
	return (
		<section
			className="relative isolate min-h-[320px] w-full overflow-hidden bg-[#101b2c] font-sans text-white sm:aspect-[1440/554] sm:min-h-0"
			style={{
				backgroundImage: `linear-gradient(rgba(7, 17, 43, 0.45), rgba(7, 17, 43, 0.45)), url(${heroImage})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<a href="/" className="absolute left-5 top-8 text-xs font-normal text-white sm:left-10 sm:top-11 sm:text-base lg:text-xl">
				&lt;- Back
			</a>

			<div className="absolute bottom-7 left-5 right-5 sm:bottom-5 sm:left-10 sm:right-auto lg:bottom-10 lg:left-20">
				<p className="text-[10px] font-normal uppercase leading-none sm:text-[11px] lg:text-xl">Services</p>
				<h1 className="mt-1 text-2xl font-bold uppercase leading-[0.98] tracking-[0.015em] sm:text-3xl sm:leading-none lg:text-6xl">
					Provide comprehensive solution
				</h1>
				<p className="mt-1 text-base font-normal uppercase leading-tight sm:text-xl sm:leading-none lg:text-4xl">
					Tailored to your project
				</p>
			</div>
		</section>
	);
}
