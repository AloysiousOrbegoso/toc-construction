export default function Leadership() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <div className="mb-[46px] text-center">
          <span className="mb-4 block font-display text-lead font-medium uppercase tracking-[0.067em] text-black">
            Our Leadership
          </span>
          <h2 className="font-display text-h1 font-semibold text-[#1a1c1c]">
            Meet the Team Behind TOC
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] justify-items-center gap-x-5 gap-y-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f9f9f9] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.figma.com/api/mcp/asset/84580bef-00cd-41c0-bf67-1f282f4fee3d.png"
                alt="Engr. Robi Balboa"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 font-body text-h3 font-semibold text-[#00195c]">
              Engr. Robi Balboa
            </h3>
            <span className="font-display text-small font-semibold tracking-[0.1em] text-[#444651]">
              Chief Executive Officer
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f9f9f9] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.figma.com/api/mcp/asset/4a9be298-2652-4111-95de-3dc577934398.png"
                alt="Engr. John Baguio"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 font-body text-h3 font-semibold text-[#00195c]">
              Engr. John Baguio
            </h3>
            <span className="font-display text-small font-semibold tracking-[0.1em] text-[#444651]">
              VP of Engineering
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f9f9f9] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.figma.com/api/mcp/asset/4bd640a2-dfb5-4238-8cb2-8e7a994f6740.png"
                alt="Engr. Jasmine Bruns"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 font-body text-h3 font-semibold text-[#00195c]">
              Engr. Jasmine Bruns
            </h3>
            <span className="font-display text-small font-semibold tracking-[0.1em] text-[#444651]">
              Chief Operations Officer
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f9f9f9] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.figma.com/api/mcp/asset/6d297dfe-d29f-4782-ada1-4688225f3199.png"
                alt="Engr. Claire Meldo"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-2 font-body text-h3 font-semibold text-[#00195c]">
              Engr. Claire Meldo
            </h3>
            <span className="font-display text-small font-semibold tracking-[0.1em] text-[#444651]">
              Chief Financial Officer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
