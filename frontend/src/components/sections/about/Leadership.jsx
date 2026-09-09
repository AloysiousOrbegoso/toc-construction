import eng1 from "./profiles/eng1.png";
import eng2 from "./profiles/eng2.png";
import eng3 from "./profiles/eng3.png";
import eng4 from "./profiles/eng4.png";

const team = [
  { photo: eng1, name: "Engr. Robi Balboa", role: "Chief Executive Officer" },
  { photo: eng2, name: "Engr. John Baguio", role: "VP of Engineering" },
  { photo: eng3, name: "Engr. Jasmine Bruns", role: "Chief Operations Officer" },
  { photo: eng4, name: "Engr. Claire Meldo", role: "Chief Financial Officer" },
];

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
          {team.map(({ photo, name, role }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f9f9f9] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
                <img src={photo} alt={name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mb-2 font-body text-h3 font-semibold text-[#00195c]">
                {name}
              </h3>
              <span className="font-display text-small font-semibold tracking-[0.1em] text-[#444651]">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
