import { useState } from "react";
import Button from "../../ui/Button";
import { submitJobApplication } from "../../../lib/api";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-[#c7cbd3] bg-white px-3 py-2.5 font-display text-body text-[#1f2937] placeholder:text-[#8a93a3] outline-none transition focus:border-[#2f5fc6] focus:shadow-[0_0_0_3px_rgba(47,95,198,0.08)]";

const initialValues = {
  surname: "",
  firstName: "",
  middleName: "",
  birthday: "",
  sex: "",
  contactNumber: "",
  email: "",
  position: "",
  address: "",
  coverStatement: "",
  website: "", // honeypot
};

export default function Form({ jobs = [] }) {
  const [values, setValues] = useState(initialValues);
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setErrors(null);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    if (resume) formData.append("resume", resume);

    try {
      await submitJobApplication(formData);
      setStatus("success");
      setValues(initialValues);
      setResume(null);
    } catch (error) {
      setStatus("error");
      setErrors(error.errors);
    }
  }

  if (status === "success") {
    return (
      <section id="application-form" className="bg-[#f5f5f5] px-6 py-8 md:px-12 lg:px-22">
        <div className="mx-auto max-w-[1120px] rounded-[18px] border border-[#d9dce2] bg-[#f1f1f1] p-5 text-center shadow-[0_1px_0_rgba(15,23,42,0.02)] sm:p-7 lg:p-9">
          <h2 className="mb-2 font-body text-h1 font-semibold text-[#2e2e2e]">
            Application Submitted
          </h2>
          <p className="font-display text-body text-[#4d5563]">
            Thank you for applying. Our team will review your application and get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="bg-[#f5f5f5] px-6 py-8 md:px-12 lg:px-22">
      <div className="mx-auto max-w-[1120px] rounded-[18px] border border-[#d9dce2] bg-[#f1f1f1] p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)] sm:p-7 lg:p-9">
        <h2 className="mb-6 font-body text-h1 font-semibold text-[#2e2e2e]">
          Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Surname
              <input type="text" name="surname" value={values.surname} onChange={handleChange} required className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              First Name
              <input type="text" name="firstName" value={values.firstName} onChange={handleChange} required className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Middle Name
              <input type="text" name="middleName" value={values.middleName} onChange={handleChange} className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Birthday
              <input type="date" name="birthday" value={values.birthday} onChange={handleChange} className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Sex
              <select name="sex" value={values.sex} onChange={handleChange} className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"%3E%3Cpath fill=\"%236b7280\" d=\"M4.5 6.5 8 10l3.5-3.5\"/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[position:calc(100%-12px)_50%] bg-no-repeat pr-9`}>
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Contact Number
              <input type="tel" name="contactNumber" value={values.contactNumber} onChange={handleChange} required className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Email
              <input type="email" name="email" value={values.email} onChange={handleChange} required className={fieldClass} />
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Position Applying For
              <select name="position" value={values.position} onChange={handleChange} className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"%3E%3Cpath fill=\"%236b7280\" d=\"M4.5 6.5 8 10l3.5-3.5\"/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[position:calc(100%-12px)_50%] bg-no-repeat pr-9`}>
                <option value="" disabled hidden>
                  Select Position
                </option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Resume Upload
              <div className="mt-1.5 flex w-full items-center overflow-hidden rounded-md border border-[#c7cbd3] bg-white">
                <input
                  type="file"
                  className="hidden"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={(event) => setResume(event.target.files?.[0] ?? null)}
                />
                <label
                  htmlFor="resume-upload"
                  className="flex w-full cursor-pointer items-center justify-center px-3 py-2.5 font-display text-small text-[#4d5563] hover:bg-[#f0f4fa]"
                >
                  {resume ? resume.name : "Choose File"}
                </label>
              </div>
            </label>
          </div>

          <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
            Address
            <input type="text" name="address" value={values.address} onChange={handleChange} className={fieldClass} />
          </label>

          <label className="block font-display text-caption font-medium uppercase tracking-[0.02em] text-[#4d5563]">
            Cover Statement
            <textarea name="coverStatement" value={values.coverStatement} onChange={handleChange} rows="5" className={`${fieldClass} resize-none`} />
          </label>

          {status === "error" && (
            <p className="font-display text-small text-red-600">
              {errors
                ? Object.values(errors).flat().join(" ")
                : "Something went wrong submitting your application. Please try again."}
            </p>
          )}

          <div className="pt-1">
            <Button type="submit" disabled={status === "submitting"} className="min-w-[180px] bg-[#1e56a0] text-white shadow-[0_10px_24px_-8px_rgba(47,95,224,0.55)]">
              {status === "submitting" ? "Submitting…" : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
