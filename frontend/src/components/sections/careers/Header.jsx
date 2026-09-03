import { Link } from "react-router-dom";
import heroImage from "../../../assets/careers/header_image.png";
import backArrow from "../../../assets/about/back-arrow.png";
import searchIcon from "../../../assets/careers/search.png";
import locationIcon from "../../../assets/careers/location_icon.png";
import WipeButton from "../../ui/WipeButton";

export default function Header() {
	return (
		<section className="relative isolate flex min-h-[480px] flex-col justify-between overflow-hidden bg-[#07112b] text-white sm:min-h-[520px] lg:min-h-[554px]">
			<img
				src={heroImage}
				alt="Elevated highway under construction with tower cranes"
				className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
			/>
			<div className="absolute inset-0 -z-10 bg-[rgba(7,17,43,0.48)]" />

			<div className="mx-auto w-full max-w-360 px-6 pt-7 sm:px-10 sm:pt-9 lg:px-22 lg:pt-10">
				<Link
					to="/"
					className="inline-flex items-center gap-2 font-display text-sm font-medium text-white transition-opacity hover:opacity-75 sm:text-base lg:text-xl"
				>
					<img src={backArrow} alt="" className="h-3 w-4 object-contain sm:h-3.5 sm:w-[18px]" />
					Back
				</Link>
			</div>

			<div className="mx-auto flex w-full max-w-360 flex-col gap-8 px-6 pb-10 sm:px-10 sm:pb-12 lg:gap-9 lg:px-22 lg:pb-14">
				<div>
					<span className="mb-1 block font-display text-xs font-medium uppercase tracking-[0.04em] sm:text-sm lg:mb-2 lg:text-[21px]">
						Careers
					</span>
					<h1 className="mb-1 font-display text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-[0.04em] sm:mb-2 lg:tracking-[0.06em]">
						Build Your Future With Us
					</h1>
					<p className="font-display text-[clamp(1rem,2.2vw,1.75rem)] font-medium uppercase leading-tight tracking-[0.02em]">
						Join Our Expert Team
					</p>
				</div>

				<form role="search" className="flex w-full flex-col gap-2 overflow-hidden rounded-xl bg-white p-2 sm:h-[70px] sm:flex-row sm:items-center sm:gap-0 sm:p-0 lg:max-w-[980px]">
					<div className="flex min-w-0 flex-1 items-center px-4 sm:px-7">
						<img src={searchIcon} alt="" className="mr-3 h-6 w-6 shrink-0 object-contain opacity-30" />
						<label htmlFor="career-search" className="sr-only">
							Search careers
						</label>
						<input
							id="career-search"
							type="search"
							placeholder="Job title or keyword"
							className="min-w-0 w-full bg-transparent py-2 font-display text-sm text-[#202020] outline-none placeholder:text-[#777b84] sm:text-base"
						/>
					</div>
					<div className="flex min-w-0 flex-1 items-center px-4 sm:flex-[0_0_34%] sm:border-l sm:border-[#e5e5e5] sm:px-7">
						<img src={locationIcon} alt="" className="mr-3 h-6 w-6 shrink-0 object-contain opacity-30" />
						<label htmlFor="career-location" className="sr-only">
							Location
						</label>
						<input
							id="career-location"
							type="text"
							placeholder="Location"
							className="min-w-0 w-full bg-transparent py-2 font-display text-sm text-[#202020] outline-none placeholder:text-[#777b84] sm:text-base"
						/>
					</div>
					<WipeButton
						icon={null}
						type="submit"
						className="relative z-10 h-14 shrink-0 rounded-lg px-10 py-0 text-base sm:mr-1 sm:h-[66px] sm:w-[184px] sm:rounded-lg sm:px-4"
					>
						Search
					</WipeButton>
				</form>
			</div>
		</section>
	);
}
