import camellaLogo from "../../../assets/about/companyLogo/Camella_Homes_Logo 1.png";
import primeWater from "../../../assets/about/companyLogo/primewater.png";
import vistaMall from "../../../assets/about/companyLogo/vistamall.png";
import golden from "../../../assets/about/companyLogo/goldenmyholdings.png";
import bria from "../../../assets/about/companyLogo/bria.png";
import Lumina from "../../../assets/about/companyLogo/lumina.png";
export default function TrustedBy() {
  return (
    <section className="bg-[#f6f6f6] py-[57px] text-center">
      <div className="mx-auto w-full max-w-360 px-6 md:px-12 lg:px-22">
        <span className="mb-8 block font-display text-lead font-medium uppercase tracking-[0.067em] text-black">
          Trusted by Industry Leaders
        </span>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-20">
            <img
              src={camellaLogo}
              alt="Camella Homes logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={primeWater}
              alt="Partner company logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={vistaMall}
              alt="Partner company logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={golden}
              alt="Partner company logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={bria}
              alt="Home of Choice logo"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={Lumina}
              alt="Partner company logo"
              className="h-11 w-auto shrink-0 object-contain"
            />

            <img
              src={camellaLogo}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={primeWater}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={vistaMall}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={golden}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={bria}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
            <img
              src={Lumina}
              alt=""
              aria-hidden="true"
              className="h-11 w-auto shrink-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
