function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Start free. Upgrade when your team is ready.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-gray-600">For individuals and small projects</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$0</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>Up to 3 workflows</li>
              <li>Basic dashboards</li>
              <li>Email support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 text-white font-semibold hover:bg-gray-800">Get started</button>
          </div>

          <div className="rounded-2xl border-2 border-emerald-500 p-6 shadow-md relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">Team</h3>
            <p className="mt-2 text-gray-600">For growing teams that need automation</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$29</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>Unlimited workflows</li>
              <li>Advanced dashboards</li>
              <li>Slack + Notion integration</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-emerald-600 px-4 py-3 text-white font-semibold hover:bg-emerald-700">Start free trial</button>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-2 text-gray-600">Security-first at scale</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">Custom</p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li>SSO + RBAC</li>
              <li>Audit logs</li>
              <li>Dedicated support</li>
              <li>Custom SLAs</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 text-white font-semibold hover:bg-gray-800">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
