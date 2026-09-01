import { useRef, useState } from "react";

export default function AttachmentsSubmission({ onBack }) {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function addFiles(fileList) {
    const incoming = Array.from(fileList);
    if (incoming.length === 0) return;
    setFiles((current) => [...current, ...incoming]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  function removeFile(index) {
    setFiles((current) => current.filter((_, i) => i !== index));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#f6f6f6] pt-[61px] pb-24">
      <div className="mx-auto w-full max-w-360 px-22">
        <div className="mx-auto mb-14 max-w-[660px]">
          <ol className="relative flex items-start justify-between">
            <div className="absolute left-10 right-10 top-6 h-0.5 bg-[#e2e2e2]" />

            <li className="relative z-10 flex flex-col items-center gap-4 bg-[#f6f6f6] px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-[18px] font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9]">
                ✓
              </div>
              <span className="whitespace-nowrap font-display text-[18px] font-semibold tracking-[0.08em] text-black">
                Your Details
              </span>
            </li>

            <li className="relative z-10 flex flex-col items-center gap-4 bg-[#f6f6f6] px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-[18px] font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9]">
                ✓
              </div>
              <span className="whitespace-nowrap font-display text-[18px] font-semibold tracking-[0.08em] text-black">
                Project Information
              </span>
            </li>

            <li className="relative z-10 flex flex-col items-center gap-4 bg-[#f6f6f6] px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#112e81] text-[18px] font-bold text-white shadow-[0px_0px_0px_4px_#f9f9f9,0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
                3
              </div>
              <span className="whitespace-nowrap font-display text-[18px] font-semibold tracking-[0.08em] text-black">
                Attachments
              </span>
            </li>
          </ol>
        </div>

        <div className="mx-auto max-w-[622px]">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#e2e2e2] bg-white p-[49px] text-center shadow-[0px_8px_15px_0px_rgba(0,0,0,0.08)]">
              <h2 className="font-body text-[40px] font-semibold text-[#1a1c1c]">
                Request Submitted
              </h2>
              <p className="font-display text-[18px] text-[#444651]">
                Thank you. Our team will review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 rounded-xl border border-[#e2e2e2] bg-white p-[49px] shadow-[0px_8px_15px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="border-b border-[#e2e2e2] pb-[25px]">
                <h2 className="font-body text-[40px] font-semibold text-[#1a1c1c]">
                  Attachments &amp; Submission
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div
                  onDragOver={(event) => {
                    event.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current?.click()}
                  className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors ${
                    isDragging
                      ? "border-[#1e56a0] bg-[#eef3fa]"
                      : "border-[#c5c5d3] bg-[#f9f9f9]"
                  }`}
                >
                  <svg
                    className="h-10 w-10 text-[#1e56a0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9M8 17l4-4 4 4" />
                  </svg>
                  <span className="font-display text-[18px] font-semibold text-[#1a1c1c]">
                    Drag and drop files here
                  </span>
                  <span className="font-display text-[14px] text-[#444651]">
                    or click to browse your device
                  </span>
                  <span className="mt-3 inline-flex items-center rounded-lg border border-[#c5c5d3] bg-white px-5 py-2 font-display text-[14px] font-semibold text-[#1a1c1c]">
                    Select Files
                  </span>
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(event) => addFiles(event.target.files)}
                  />
                </div>

                <p className="font-display text-[13px] text-[#6b7280]">
                  Upload project site photos, blueprints, or specifications (PDF, JPG,
                  PNG). Max 10MB per file.
                </p>

                {files.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {files.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between rounded-lg border border-[#e2e2e2] bg-[#f9f9f9] px-4 py-2 font-display text-[14px] text-[#1a1c1c]"
                      >
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-4 shrink-0 font-semibold text-[#1e56a0] hover:text-[#163172]"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="notes"
                  className="font-display text-[16px] font-semibold text-[#1a1c1c]"
                >
                  Additional Notes or Instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  placeholder="Any final details we should know before reviewing your request?"
                  className="w-full resize-y rounded-lg border border-[#c5c5d3] bg-[#f9f9f9] px-[17px] py-[14px] font-display text-[16px] text-[#1a1c1c] placeholder:text-[#6b7280]"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-xl border border-[#c5c5d3] bg-white px-6 py-4 font-display text-[16px] font-semibold text-[#1a1c1c] hover:bg-[#f6f6f6]"
                >
                  Back to Step 2
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1e56a0] px-8 py-4 font-display text-[18px] font-bold text-white hover:bg-[#163172]"
                >
                  Submit Request
                  
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
