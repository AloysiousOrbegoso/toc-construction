import { Link } from "react-router-dom";
import WipeButton from "../../ui/WipeButton";

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
        <WipeButton as={Link} to="/get-quote">
          Get Free Consultation
        </WipeButton>
      </div>
    </section>
  );
}
