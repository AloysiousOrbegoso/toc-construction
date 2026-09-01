import { useState } from "react";
import ContactInformation from "./ContactInformation";
import ProjectInformation from "./ProjectInformation";
import AttachmentsSubmission from "./AttachmentsSubmission";

export default function QuoteForm() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <ContactInformation onContinue={() => setStep(2)} />}

      {step === 2 && (
        <ProjectInformation
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && <AttachmentsSubmission onBack={() => setStep(2)} />}
    </>
  );
}
