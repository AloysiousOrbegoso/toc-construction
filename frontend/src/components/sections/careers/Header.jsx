import { Link } from "react-router-dom";
import heroImage from "../../../assets/careers/header_image.png";
import backArrow from "../../../assets/about/back-arrow.png";

export default function Header() {
	return (
		<section className="relative isolate flex min-h-[480px] flex-col justify-between overflow-hidden bg-[#07112b] text-white sm:min-h-[520px] lg:min-h-[554px]">
			<img
				src={heroImage}
				alt="Elevated highway under construction with tower cranes"
				className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
			/>
			<div className="absolute inset-0 -z-10 bg-[rgba(7,17,43,0.48)]" />

			<div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22 pt-10">
				<Link
					to="/"
					className="inline-flex items-center gap-2 font-display text-lead font-medium text-white transition-opacity hover:opacity-75"
				>
					<img src={backArrow} alt="" className="h-3.5 w-[18px] object-contain" />
					Back
				</Link>
			</div>

			<div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22 pb-14">
				<span className="mb-6 block font-display text-lead font-medium uppercase tracking-tight">
					Careers
				</span>
				<h1 className="mb-3 font-body text-display font-bold uppercase leading-[1.05] tracking-[0.06em]">
					Build Your Future With Us
				</h1>
				<p className="font-display text-h2 font-medium uppercase tracking-[0.02em]">
					Join Our Expert Team
				</p>
			</div>
		</section>
	);
}
