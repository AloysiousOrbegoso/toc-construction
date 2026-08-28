import Header from "../sections/careers/Header";
import Job from "../sections/careers/Job";
import { careerJobs } from "../../data/content";

export default function Careers({ jobs = careerJobs }) {
	return (
		<main>
			<Header />
			<Job jobs={jobs} />
		</main>
	);
}
