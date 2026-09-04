export default function ContactInformation({ onContinue }) {
  function handleSubmit(event) {
    event.preventDefault();
    onContinue();
  }

  return (
    <section className="bg-[#f6f6f6] pt-[61px] pb-24">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <div className="mx-auto mb-14 max-w-[660px]">
          <ol className="relative flex items-start justify-between">
            <div className="absolute left-10 right-10 top-6 h-0.5 bg-[#e2e2e2]" />

            <li className="relative z-10 flex flex-col items-center gap-3 bg-[#f6f6f6] px-2 sm:gap-4 sm:px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-lead font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9,0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                1
              </div>
              <span className="text-center font-display text-small font-semibold tracking-[0.08em] text-black">
                Your Details
              </span>
            </li>

            <li className="relative z-10 flex flex-col items-center gap-3 bg-[#f6f6f6] px-2 sm:gap-4 sm:px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e2e2e2] text-lead font-bold text-[#444651] shadow-[0px_0px_0px_4px_#f9f9f9]">
                2
              </div>
              <span className="text-center font-display text-small font-semibold tracking-[0.08em] text-[#444651]">
                Project Information
              </span>
            </li>

            <li className="relative z-10 flex flex-col items-center gap-3 bg-[#f6f6f6] px-2 sm:gap-4 sm:px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e2e2e2] text-lead font-bold text-[#444651] shadow-[0px_0px_0px_4px_#f9f9f9]">
                3
              </div>
              <span className="text-center font-display text-small font-semibold tracking-[0.08em] text-[#444651]">
                Attachments
              </span>
            </li>
          </ol>
        </div>

        <div className="mx-auto max-w-[622px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 rounded-xl border border-[#e2e2e2] bg-white p-[clamp(1.25rem,1rem+3vw,3rem)] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col gap-[7px] border-b border-[#e2e2e2] pb-[25px]">
              <h2 className="font-body text-h1 font-semibold text-[#1a1c1c]">
                Contact Information
              </h2>
              <p className="font-display text-lead text-[#444651]">
                Please provide your primary contact details so our team can reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Juan"
                  required
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Dela Cruz"
                  required
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="companyName" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="PhilBuild Inc."
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@example.com"
                  required
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+63 900 000 0000"
                  required
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="role" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Profession / Role
                </label>
                <select
                  id="role"
                  name="role"
                  defaultValue=""
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c]"
                >
                  <option value="" disabled hidden>
                    Select your role
                  </option>
                  <option value="architect">Architect</option>
                  <option value="engineer">Engineer</option>
                  <option value="contractor">Contractor</option>
                  <option value="property-developer">Property Developer</option>
                  <option value="homeowner">Homeowner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  defaultValue="philippines"
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c]"
                >
                  <option value="philippines">Philippines</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cityProvince" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  City / Province
                </label>
                <input
                  id="cityProvince"
                  name="cityProvince"
                  type="text"
                  placeholder="Metro Manila"
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1e56a0] px-8 py-4 font-display text-lead font-bold text-white hover:bg-[#163172]"
                >
                  Continue to Project Details
                  
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
