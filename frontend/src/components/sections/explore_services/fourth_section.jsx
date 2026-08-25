export default function FourthSection() {
	return (
		<section className="bg-white px-5 py-16 font-sans text-black sm:px-8 sm:py-20 lg:px-8 lg:py-[75px]">
			<div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
				<p className="text-[10px] font-normal uppercase leading-none sm:text-xs">
					Ready to start your project?
				</p>
				<h2 className="mt-5 max-w-[380px] text-2xl font-semibold leading-[1.05] sm:max-w-[500px] sm:text-3xl">
					Let&apos;s Build Something Amazing Together
				</h2>
				<a
					href="mailto:info@tocconstruction.com"
					className="mt-6 rounded-[4px] bg-[#1e56a0] px-6 py-3 text-xs font-medium leading-none text-white transition-colors hover:bg-[#17447f] sm:text-sm"
				>
					Get Free Consultation
				</a>
			</div>
		</section>
	);
}
