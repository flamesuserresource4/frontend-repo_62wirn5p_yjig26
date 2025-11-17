import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just a friendly confirm. Can be wired to backend later.
    if (!email) return;
    alert(`Thanks! We'll reach out at ${email}`);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50"/>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Now live in beta
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Lower your effort. Raise your outcomes.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
            Lower is a modern platform to streamline the busywork so your team can focus on what matters. Automate routine tasks, get clear insights, and ship faster.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-xl items-center gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-900 shadow-sm outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Join waitlist
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500">
            No spam. Unsubscribe anytime.
          </div>
        </div>

        <div className="relative mt-14 lg:mt-0 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-emerald-200/40 via-sky-200/30 to-transparent blur-2xl" />
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="h-64 rounded-xl bg-gradient-to-br from-emerald-500 via-sky-500 to-indigo-500" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="text-gray-900 font-semibold">Automations</div>
                  <div className="mt-1 text-gray-600">Create flows in minutes.</div>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="text-gray-900 font-semibold">Dashboards</div>
                  <div className="mt-1 text-gray-600">See what matters.</div>
                </div>
                <div className="rounded-lg border border-gray-200 p-3">
                  <div className="text-gray-900 font-semibold">Collaboration</div>
                  <div className="mt-1 text-gray-600">Keep teams aligned.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
