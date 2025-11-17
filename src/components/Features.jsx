function Features() {
  const features = [
    {
      title: "Automate the busywork",
      desc: "Build no-code workflows that connect your tools and keep work moving while you sleep.",
    },
    {
      title: "One place for clarity",
      desc: "Custom dashboards turn data into decisions—track KPIs without spreadsheet chaos.",
    },
    {
      title: "Works with your stack",
      desc: "Integrates with Slack, Notion, Google Workspace and 2,000+ apps via webhooks.",
    },
    {
      title: "Secure by default",
      desc: "SSO, role-based access, and audit logs keep your org compliant and protected.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Do more with less effort
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lower ties your tools together so your team can move faster with fewer meetings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
