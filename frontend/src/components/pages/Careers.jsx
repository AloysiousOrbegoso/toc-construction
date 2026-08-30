import Header from "../sections/careers/Header";
import Join_Us from "../sections/careers/Join_Us";
import Job from "../sections/careers/Job";
import Form from "../sections/careers/Form";
import { careerJobs } from "../../data/content";

export default function Careers({ jobs = careerJobs }) {
	return (
		<main>
			<Header />
			<Job jobs={jobs} />
			<Form />
			<Join_Us />
		</main>
	);
}
