import { Link } from "react-router-dom";

export default function ReadyToStart() {
  return (
    <section id="contact" className="bg-[#f6f6f6] py-[106px] text-center">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <span className="mb-8 block font-display text-lead font-medium text-black">
          READY TO START YOUR PROJECT?
        </span>
        <h2 className="mb-8 font-body text-h1 font-semibold leading-[1.2] text-black">
          Let&rsquo;s Build Something Amazing Together
        </h2>
        <Link
          to="/get-quote"
          className="inline-flex items-center justify-center rounded-xl bg-[#1e56a0] px-10 py-4 font-display text-lead font-bold text-white hover:bg-[#163172]"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
