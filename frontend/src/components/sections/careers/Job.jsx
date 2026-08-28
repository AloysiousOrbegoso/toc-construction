import bagIcon from "../../../assets/careers/bag_icon.png";
import locationIcon from "../../../assets/careers/location_icon.png";
import moneyIcon from "../../../assets/careers/money_icon.png";

const jobMeta = [
	{ key: "employmentType", icon: bagIcon, alt: "Employment type" },
	{ key: "salary", icon: moneyIcon, alt: "Salary" },
	{ key: "location", icon: locationIcon, alt: "Location" },
];

function JobCard({ job }) {
	return (
		<article className="border-b border-[#e6e7eb] px-6 py-12 sm:px-10 lg:px-11 lg:py-16">
			<div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
				<div>
					<h2 className="font-display text-2xl font-bold leading-tight text-[#202020] sm:text-3xl">
						{job.title}
					</h2>

					<div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 font-display text-xs text-[#202020] sm:text-sm">
						{jobMeta.map(({ key, icon, alt }) => (
							<span key={key} className="inline-flex items-center gap-1.5">
								<img src={icon} alt={alt} className="h-3.5 w-3.5 object-contain" />
								{job[key]}
							</span>
						))}
					</div>

					<div className="mt-7 space-y-5 font-display text-xs leading-[1.55] text-[#5d626b] sm:text-sm">
						<div>
							<h3 className="mb-1.5 font-bold text-[#202020]">Job Description</h3>
							<p className="max-w-[670px]">{job.description}</p>
						</div>

						<div>
							<h3 className="mb-1.5 font-bold text-[#202020]">Key Responsibilities</h3>
							<ul className="list-disc space-y-0.5 pl-5 marker:text-[#5d626b]">
								{job.responsibilities.map((responsibility) => (
									<li key={responsibility}>{responsibility}</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<aside className="self-start rounded-lg border border-[#d8dbe2] bg-[#f7f7f8] p-4 sm:p-5 lg:mt-16">
					<h3 className="font-display text-xs font-bold text-[#202020] sm:text-sm">Ready to Apply?</h3>
					<p className="mt-3 font-display text-xs leading-[1.45] text-[#5d626b] sm:text-sm">
						Fill out the form below to start your journey with TOC Construction.
					</p>
					<a
						href={job.applyHref}
						className="mt-5 flex h-8 items-center justify-center rounded bg-[#2861aa] px-4 font-display text-[11px] font-bold text-white transition-colors hover:bg-[#1f4e8b] sm:h-9 sm:text-xs"
					>
						{job.applyLabel || "Jump to Form"}
					</a>
				</aside>
			</div>
		</article>
	);
}

export default function Job({ jobs = [] }) {
	return (
		<section aria-label="Open positions" className="bg-white">
			{jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</section>
	);
}
