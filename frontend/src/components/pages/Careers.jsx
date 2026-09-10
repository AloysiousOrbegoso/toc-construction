import { useEffect, useState } from "react";
import Header from "../sections/careers/Header";
import Join_Us from "../sections/careers/Join_Us";
import Job from "../sections/careers/Job";
import Form from "../sections/careers/Form";
import { fetchJobs } from "../../lib/api";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetchJobs()
      .then((data) => {
        if (cancelled) return;
        setJobs(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main>
      <Header />
      {status === "loading" && (
        <p className="bg-[#f6f6f6] py-12 text-center text-[#5d626b]">Loading open positions…</p>
      )}
      {status === "error" && (
        <p className="bg-[#f6f6f6] py-12 text-center text-[#5d626b]">
          We couldn't load open positions right now. Please try again later.
        </p>
      )}
      {status === "ready" && <Job jobs={jobs} />}
      <Form jobs={jobs} />
      <Join_Us />
    </main>
  );
}
