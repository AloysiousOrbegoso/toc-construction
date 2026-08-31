import Button from "../../ui/Button";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-[#c7cbd3] bg-white px-3 py-2.5 text-[13px] text-[#1f2937] placeholder:text-[#8a93a3] outline-none transition focus:border-[#2f5fc6] focus:shadow-[0_0_0_3px_rgba(47,95,198,0.08)]";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="application-form" className="bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px] rounded-[18px] border border-[#d9dce2] bg-[#f1f1f1] p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)] sm:p-7 lg:p-9">
        <h2 className="mb-6 font-display text-[clamp(2rem,3vw,2.7rem)] font-semibold tracking-[-0.04em] text-[#2e2e2e]">
          Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Surname
              <input type="text" className={fieldClass} placeholder="" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              First Name
              <input type="text" className={fieldClass} placeholder="" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Middle Name
              <input type="text" className={fieldClass} placeholder="" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Birthday
              <input type="text" className={fieldClass} placeholder="mm/dd/yyyy" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Sex
              <select defaultValue="" className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"%3E%3Cpath fill=\"%236b7280\" d=\"M4.5 6.5 8 10l3.5-3.5\"/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[position:calc(100%-12px)_50%] bg-no-repeat pr-9`}>
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Contact Number
              <input type="tel" className={fieldClass} placeholder="" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Email
              <input type="email" className={fieldClass} placeholder="" />
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Position Applying For
              <select defaultValue="" className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"%3E%3Cpath fill=\"%236b7280\" d=\"M4.5 6.5 8 10l3.5-3.5\"/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[position:calc(100%-12px)_50%] bg-no-repeat pr-9`}>
                <option value="" disabled hidden>
                  Select Position
                </option>
                <option value="senior-engineer">Senior Engineer</option>
                <option value="project-manager">Project Manager</option>
                <option value="site-supervisor">Site Supervisor</option>
              </select>
            </label>

            <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
              Resume Upload
              <div className="mt-1.5 flex w-full items-center overflow-hidden rounded-md border border-[#c7cbd3] bg-white">
                <input type="file" className="hidden" id="resume-upload" />
                <label
                  htmlFor="resume-upload"
                  className="flex w-full cursor-pointer items-center justify-center px-3 py-2.5 text-[12px] text-[#4d5563] hover:bg-[#f0f4fa]"
                >
                  Choose File
                </label>
              </div>
            </label>
          </div>

          <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
            Address
            <input type="text" className={fieldClass} />
          </label>

          <label className="block text-[11px] font-medium uppercase tracking-[0.02em] text-[#4d5563]">
            Cover Statement
            <textarea rows="5" className={`${fieldClass} resize-none`} />
          </label>

          <div className="pt-1">
            <Button type="submit" className="min-w-[180px] bg-[#1e56a0] text-white shadow-[0_10px_24px_-8px_rgba(47,95,224,0.55)]">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
