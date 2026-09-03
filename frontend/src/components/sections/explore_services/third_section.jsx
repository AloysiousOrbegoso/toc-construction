import constructionImage from "../../../assets/services_page/3rd_section_imag.png";

export default function ThirdSection() {
	return (
		<section className="bg-white px-6 py-10 md:px-12 md:py-16 lg:px-22 lg:py-[65px]">
			<div className="mx-auto grid w-full max-w-[1000px] items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16">
				<div className="max-w-[380px]">
					<h2 className="font-body text-h1 font-semibold leading-[1.2] text-black">
						Engineering Excellence
					</h2>
					<p className="mt-4 font-display text-lead text-black">
						Our commitment to structural stability and technical proficiency ensures that every project is built to the highest standards. We employ advanced methodologies and rigorous quality control at every phase of development.
					</p>
				</div>
				<img
					src={constructionImage}
					alt="Construction project under development"
					className="w-full justify-self-end object-contain"
				/>
			</div>
		</section>
	);
}
