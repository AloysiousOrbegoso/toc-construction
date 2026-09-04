import designIcon from "../../../assets/services_page/design_icon.png";
import projectIcon from "../../../assets/services_page/project_icon.png";
import renovationIcon from "../../../assets/services_page/renovation_icon.png";
import contractingIcon from "../../../assets/services_page/contracting_icon.png";

const services = [
	{
		icon: designIcon,
		title: "Design & Build",
		description: "End-to-end integration of architectural design and structural engineering to deliver seamless project execution.",
	},
	{
		icon: projectIcon,
		title: "Project Management",
		description: "Rigorous oversight of timelines, budgets, and quality control to ensure strict adherence to engineering standards.",
	},
	{
		icon: renovationIcon,
		title: "Renovation & Remodeling",
		description: "Structural retrofitting and modernization of existing commercial and industrial facilities.",
	},
	{
		icon: contractingIcon,
		title: "General Contracting",
		description: "Comprehensive construction services managing all trades and materials for large-scale developments.",
	},
];

export default function SecondSection() {
	return (
		<section className="bg-white px-6 py-10 md:px-12 md:py-16 lg:px-22 lg:py-[65px]">
			<div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8">
				{services.map((service) => (
					<article
						key={service.title}
						className="flex min-h-[210px] flex-col items-center justify-center rounded-[9px] border border-[#d9dce3] px-5 py-6 text-center shadow-[0_2px_5px_rgba(10,25,48,0.08)] sm:px-8"
					>
						<span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#15378f]">
							<img src={service.icon} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
						</span>
						<h2 className="font-display text-h3 font-semibold leading-tight text-black">{service.title}</h2>
						<p className="mt-2 max-w-[330px] font-display text-body text-black">
							{service.description}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
