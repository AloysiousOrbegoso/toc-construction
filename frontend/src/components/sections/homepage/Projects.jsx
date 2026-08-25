import projectOne from "../../../assets/homepage/Projects_1.png";
import projectTwo from "../../../assets/homepage/Projects_2.png";
import projectThree from "../../../assets/homepage/Projects_3.png";
import projectFour from "../../../assets/homepage/Projects_4.png";

const projects = [
	{
		image: projectOne,
		alt: "Modern home with a swimming pool",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		image: projectTwo,
		alt: "Waterfront home reflected in a pond",
		className: "md:col-span-2",
	},
	{
		image: projectThree,
		alt: "Contemporary glass office building",
	},
	{
		image: projectFour,
		alt: "Modern home with a swimming pool",
	},
];

export default function Projects() {
	return (
		<section className="bg-[#07112B] px-6 py-16 font-sans text-white sm:px-10 lg:px-16 lg:py-20">
			<div className="mx-auto w-full max-w-6xl">
				<div className="text-center">
					<p className="mb-5 text-[11px] font-medium uppercase tracking-[0.02em]">
						Featured Projects
					</p>
					<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						Our Recent Projects
					</h2>
					<p className="mt-6 text-sm leading-[1.45] text-white/90 sm:text-base">
						Explore some of our exceptional projects
					</p>
				</div>

				<div className="mt-8 grid auto-rows-[180px] gap-3 sm:auto-rows-[220px] md:aspect-[2.3/1] md:grid-cols-4 md:grid-rows-[1fr_1.15fr] md:auto-rows-auto">
					{projects.map((project) => (
						<div
							className={`group overflow-hidden rounded-md ${project.className ?? ""}`}
							key={project.image}
						>
							<img
								src={project.image}
								alt={project.alt}
								className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
					))}
				</div>

				<div className="mt-8 text-center">
					<button
						type="button"
						className="rounded-md border border-white px-4 py-2.5 text-xs font-medium transition-transform duration-200 hover:scale-105"
					>
						Explore More Projects
					</button>
				</div>
			</div>
		</section>
	);
}