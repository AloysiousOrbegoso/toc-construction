import { DownloadIcon, PhoneIcon } from "../../../ui/icons";

const STAT_LABELS = [
  { key: "client", label: "Client" },
  { key: "status", label: "Project Status" },
  { key: "market", label: "Market" },
];

export default function ProjectInfo({ project }) {
  const { contactPerson, pdfHref } = project;

  return (
    <section className="bg-white px-6 py-12 text-neutral-950 md:px-12 lg:px-22 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STAT_LABELS.map(({ key, label }) => (
            <div key={key}>
              <p className="font-display text-caption font-medium uppercase tracking-[0.12em] text-neutral-500">
                {label}
              </p>
              <p className="mt-2 font-body text-h3 font-bold uppercase tracking-tight">
                {project[key]}
              </p>
            </div>
          ))}
        </div>

        {contactPerson && (
          <div className="flex w-full items-center gap-4 rounded-xl bg-[#101b2c] p-5 text-white sm:w-90 lg:w-80">
            <img
              src={contactPerson.avatar}
              alt={contactPerson.name}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-body text-body font-bold leading-tight">{contactPerson.name}</p>
              <p className="mt-0.5 font-display text-small leading-tight text-muted-on-dark">
                {contactPerson.role}
              </p>
              <p className="mt-2 flex items-center gap-1.5 font-display text-small text-blue-300">
                <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
                {contactPerson.phone}
              </p>
            </div>
            {pdfHref && (
              <a
                href={pdfHref}
                className="flex shrink-0 items-center justify-center rounded-full border border-white/25 p-2.5 text-white transition-colors hover:bg-white/10"
                aria-label="Download project PDF"
              >
                <DownloadIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
