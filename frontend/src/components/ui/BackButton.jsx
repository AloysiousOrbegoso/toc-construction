import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/about/back-arrow.png";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="absolute left-6 top-8 inline-flex items-center gap-2 font-display text-lead font-medium text-white transition-opacity hover:opacity-75 md:left-12 md:top-11 lg:left-22 lg:top-24"
    >
      <img src={backArrow} alt="" className="h-3.5 w-[18px] object-contain" />
      Back
    </button>
  );
}