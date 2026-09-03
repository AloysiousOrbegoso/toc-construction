import { useState } from "react";
import bagIcon from "../../../assets/careers/bag_icon.png";
import BookmarkIcon from "../../../assets/careers/Bookmark.png";

const filters = [
	{ label: "Employment Type", options: ["Full-Time", "Project-based"] },
	{ label: "Department", options: ["Engineering", "Safety", "Design"] },
];

function FilterGroup({ label, options, selected, onChange }) {
	return (
		<fieldset className="mt-0 lg:mt-7 lg:first:mt-0">
			<legend className="font-display text-sm font-medium uppercase text-[#202020] sm:text-base">{label}</legend>
			<div className="mt-4 space-y-3">
				{options.map((option) => (
					<label key={option} className="flex cursor-pointer items-center gap-2 font-display text-sm text-[#202020] sm:text-base">
						<input type="checkbox" checked={selected.includes(option)} onChange={() => onChange(option)} className="h-4 w-4 appearance-none border border-[#202020] checked:bg-[#17378e] checked:shadow-[inset_0_0_0_3px_#f5f5f5]" />
						{option}
					</label>
				))}
			</div>
		</fieldset>
	);
}

function JobCard({ job }) {
	const [saved, setSaved] = useState(false);

	return (
		<article className="rounded-xl border border-[#c9cdd9] bg-white px-5 py-5 shadow-[0_8px_18px_rgba(22,35,70,0.08)] sm:px-7 sm:py-6">
			<div className="flex items-start gap-5 sm:gap-6">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#17378e]">
					<img src={bagIcon} alt="" className="h-7 w-7 object-contain brightness-0 invert" />
				</div>
				<div className="min-w-0 flex-1">
					<div className="flex items-start justify-between gap-4">
						<a href={job.applyHref} className="font-display text-lg font-bold leading-tight text-[#202020] hover:text-[#17378e] sm:text-xl">{job.title}</a>
						<button type="button" aria-label={saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`} aria-pressed={saved} onClick={() => setSaved((current) => !current)} className="shrink-0 p-1 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17378e]">
							<img src={BookmarkIcon} alt="" className="h-7 w-7 object-contain" />
						</button>
					</div>
					<div className="mt-1 flex flex-wrap items-center gap-x-1 gap-y-1 font-display text-sm text-[#b9bdce] sm:text-base">
						<span>{job.location}</span><span aria-hidden="true">·</span><span>{job.employmentType}</span><span aria-hidden="true">·</span><span>Posted recently</span>
					</div>
					<p className="mt-4 font-display text-sm leading-[1.45] text-[#4d5260] sm:text-base">{job.description}</p>
				</div>
			</div>
		</article>
	);
}

export default function Job({ jobs = [] }) {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [sortOrder, setSortOrder] = useState("default");
	const toggleFilter = (option) => setSelectedFilters((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option]);
	const filteredJobs = jobs.filter((job) => selectedFilters.length === 0 || selectedFilters.includes(job.employmentType) || selectedFilters.includes(job.department));
	const sortedJobs = [...filteredJobs].sort((first, second) => sortOrder === "title" ? first.title.localeCompare(second.title) : 0);

	return (
		<section aria-label="Open positions" className="bg-[#f6f6f6] px-6 py-8 font-sans text-black sm:px-10 sm:py-12 lg:px-20 lg:py-7">
			<div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
				<aside><p className="font-display text-lg text-[#202020] sm:text-xl">{jobs.length} open positions</p><div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 lg:block">{filters.map((filter) => <FilterGroup key={filter.label} {...filter} selected={selectedFilters} onChange={toggleFilter} />)}</div></aside>
				<div>
					<div className="mb-6 flex justify-end"><label className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-display text-base shadow-[0_6px_16px_rgba(22,35,70,0.1)]"><span>Sort by</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="cursor-pointer bg-transparent font-display outline-none"><option value="default">Featured</option><option value="title">Title</option></select></label></div>
					<div className="space-y-10">{sortedJobs.map((job) => <JobCard key={job.id} job={job} />)}{sortedJobs.length === 0 && <p className="rounded-xl bg-white p-8 text-center font-display text-[#5d626b]">No positions match these filters.</p>}</div>
				</div>
			</div>
		</section>
	);
}
