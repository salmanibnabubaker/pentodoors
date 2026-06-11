interface ProductApplicationsProps {
  applications: string[];
}

export default function ProductApplications({
  applications,
}: ProductApplicationsProps) {
  return (
    <div className="pt-8">

      <h3 className="text-xl font-semibold mb-6">
        Recommended Applications
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">

        {applications.map((application) => (
          <div
            key={application}
            className="
              flex
              items-center
              gap-3
              text-neutral-700
            "
          >
            <span className="text-black">
              ✓
            </span>

            <span>{application}</span>
          </div>
        ))}

      </div>

    </div>
  );
}