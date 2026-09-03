export default function ProjectInformation({ onBack, onContinue }) {
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-lead font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9]">
                ✓
              </div>
              <span className="text-center font-display text-small font-semibold tracking-[0.08em] text-black">
                Your Details
              </span>
            </li>

            <li className="relative z-10 flex flex-col items-center gap-3 bg-[#f6f6f6] px-2 sm:gap-4 sm:px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-lead font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9,0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                2
              </div>
              <span className="text-center font-display text-small font-semibold tracking-[0.08em] text-black">
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
            <div className="border-b border-[#e2e2e2] pb-[25px]">
              <h2 className="font-body text-h1 font-semibold text-[#1a1c1c]">
                Project Information
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-b border-[#e2e2e2] pb-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c]"
                >
                  <option value="" disabled hidden>
                    Select project type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c]"
                >
                  <option value="" disabled hidden>
                    Select estimated budget
                  </option>
                  <option value="under-1m">Under ₱1M</option>
                  <option value="1m-5m">₱1M – ₱5M</option>
                  <option value="5m-20m">₱5M – ₱20M</option>
                  <option value="20m-50m">₱20M – ₱50M</option>
                  <option value="over-50m">Over ₱50M</option>
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="location" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Project Location
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-[17px] top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, Province or Exact Address"
                    className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] py-[14px] pl-[44px] pr-[17px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="timeline" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Expected Timeline
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-[17px] top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g., Start in 3 months, 1 year duration"
                    className="w-full rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] py-[14px] pl-[44px] pr-[17px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label htmlFor="scope" className="font-display text-small font-semibold tracking-[0.1em] text-black">
                  Description / Scope of Work
                </label>
                <textarea
                  id="scope"
                  name="scope"
                  rows={6}
                  required
                  placeholder="Please provide a detailed description of the project requirements, specific challenges, and core objectives."
                  className="w-full resize-y rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-body text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onBack}
                className="rounded-xl border border-[#c5c5d3] bg-white px-6 py-4 font-display text-body font-semibold text-[#1a1c1c] hover:bg-[#f6f6f6]"
              >
                Back to Step 1
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1e56a0] px-8 py-4 font-display text-lead font-bold text-white hover:bg-[#163172]"
              >
                Continue to Attachments
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
