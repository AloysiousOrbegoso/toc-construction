import { useState } from "react";
import ContactInformation from "./ContactInformation";
import ProjectInformation from "./ProjectInformation";
import AttachmentsSubmission from "./AttachmentsSubmission";
import { submitQuoteRequest } from "../../../lib/api";

const initialValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  role: "",
  country: "philippines",
  cityProvince: "",
  projectType: "",
  budget: "",
  location: "",
  timeline: "",
  scope: "",
  notes: "",
  website: "", // honeypot
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState(null);

  function updateValues(patch) {
    setValues((current) => ({ ...current, ...patch }));
  }

  async function handleFinalSubmit() {
    setStatus("submitting");
    setErrors(null);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    files.forEach((file) => formData.append("attachments[]", file));

    try {
      await submitQuoteRequest(formData);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrors(error.errors);
    }
  }

  return (
    <>
      {step === 1 && (
        <ContactInformation
          values={values}
          onChange={updateValues}
          onContinue={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <ProjectInformation
          values={values}
          onChange={updateValues}
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <AttachmentsSubmission
          notes={values.notes}
          onNotesChange={(notes) => updateValues({ notes })}
          files={files}
          onFilesChange={setFiles}
          onBack={() => setStep(2)}
          onSubmit={handleFinalSubmit}
          status={status}
          errors={errors}
        />
      )}
    </>
  );
}
