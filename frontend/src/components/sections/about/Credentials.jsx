export default function Credentials() {
  return (
    <section className="bg-[#07112b] py-18 text-center text-white">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <h2 className="mb-[15px] font-body text-h1 font-semibold tracking-[-0.025em]">
          Credentials
        </h2>
        <p className="mb-[33px] font-display text-lead">Highest Industry Classification</p>

        <div className="flex flex-wrap justify-center gap-[clamp(1.25rem,1rem+2vw,3rem)]">
          <div className="w-48 rounded-2xl border border-white/20 bg-[#112e81] p-[25px] shadow-[0px_4px_8px_rgba(0,0,0,0.08)]">
            <p className="font-display text-small font-semibold leading-tight tracking-[0.1em]">
              PCAB License
              <br />
              AAAA
            </p>
          </div>

          <div className="w-48 rounded-2xl border border-white/20 bg-[#112e81] p-[25px] shadow-[0px_4px_8px_rgba(0,0,0,0.08)]">
            <p className="font-display text-small font-semibold leading-tight tracking-[0.1em]">
              ISO 9001:2015
              <br />
              Certified
            </p>
          </div>

          <div className="w-48 rounded-2xl border border-white/20 bg-[#112e81] p-[25px] shadow-[0px_4px_8px_rgba(0,0,0,0.08)]">
            <p className="font-display text-small font-semibold leading-tight tracking-[0.1em]">
              ISO 14001:2015
              <br />
              Certified
            </p>
          </div>

          <div className="w-48 rounded-2xl border border-white/20 bg-[#112e81] p-[25px] shadow-[0px_4px_8px_rgba(0,0,0,0.08)]">
            <p className="font-display text-small font-semibold leading-tight tracking-[0.1em]">
              ISO 45001:2018
              <br />
              Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
