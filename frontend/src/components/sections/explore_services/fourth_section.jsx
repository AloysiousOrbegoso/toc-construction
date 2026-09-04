import WipeButton from "../../ui/WipeButton";

export default function FourthSection() {
	return (
		<section className="bg-white px-5 py-20 font-sans text-black sm:px-8 sm:py-24 lg:px-8 lg:py-[90px]">
			<div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
				<p className="font-display text-lead font-medium uppercase text-black">
					Ready to start your project?
				</p>
				<h2 className="mt-5 max-w-[420px] text-3xl font-semibold leading-[1.05] sm:max-w-[540px] sm:text-4xl">
					Let&apos;s Build Something Amazing Together
				</h2>
				<WipeButton
					as="a"
					href="mailto:info@tocconstruction.com"
					className="mt-7 text-sm sm:text-base"
				>
					Get Free Consultation
				</WipeButton>
			</div>
		</section>
	);
}
