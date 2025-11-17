function FAQ() {
  const faqs = [
    {
      q: "What is Lower?",
      a: "Lower is a platform that automates routine work and brings your data together so teams can focus on impact.",
    },
    {
      q: "Can I try it for free?",
      a: "Yes, start with the Starter plan and upgrade anytime.",
    },
    {
      q: "Do you integrate with our tools?",
      a: "We support native integrations and webhooks, with more added regularly.",
    },
    {
      q: "How secure is Lower?",
      a: "We follow best practices with SSO, RBAC, audit logs, and encryption in transit and at rest.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-600">Everything you need to know about getting started with Lower.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
