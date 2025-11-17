function FooterCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ready to lower the effort?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Start free today and see how much time your team can save in the first week.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700">Start free</a>
            <a href="#pricing" className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterCTA;
