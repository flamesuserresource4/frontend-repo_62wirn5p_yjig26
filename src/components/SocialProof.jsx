function SocialProof() {
  const logos = [
    "Acme", "Northwind", "Globex", "Umbrella", "Stark", "Wayne"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500">Trusted by leaders at</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center rounded-xl border border-gray-200 bg-white py-3 text-gray-600">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
