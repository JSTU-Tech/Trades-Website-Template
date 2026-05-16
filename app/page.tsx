export default function EmergencyPlumberDemo() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">RapidFlow Plumbing</h1>
            <p className="text-xs text-zinc-500">24/7 Emergency Plumbing</p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-zinc-500">
              Services
            </a>
            <a href="#reviews" className="transition hover:text-zinc-500">
              Reviews
            </a>
            <a href="#about" className="transition hover:text-zinc-500">
              About
            </a>
            <a href="#contact" className="transition hover:text-zinc-500">
              Contact
            </a>
          </nav>

          <a
            href="tel:01234567890"
            className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              Available 24/7 Across Bristol
            </div>

            <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Emergency Plumbing That Arrives Fast.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              Burst pipes, boiler issues, blocked drains, and urgent leaks repaired by trusted local plumbers.
              Fast response times. Transparent pricing. 5-star rated service.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:01234567890"
                className="rounded-2xl bg-zinc-900 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-zinc-700"
              >
                Call Emergency Line
              </a>

              <a
                href="#quote"
                className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 text-center text-base font-semibold transition hover:bg-zinc-100"
              >
                Request Free Quote
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">
              <div>✓ 15+ Years Experience</div>
              <div>✓ Fully Insured</div>
              <div>✓ Same Day Service</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop"
                alt="Plumber working"
                className="h-[520px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-8 text-sm font-medium text-zinc-500">
          <div>⭐ 4.9/5 Average Rating</div>
          <div>500+ Emergency Repairs Completed</div>
          <div>Trusted Across Bristol & Bath</div>
          <div>Fully Certified Engineers</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Services
            </p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">
              Plumbing Services Built Around Fast Response.
            </h3>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Emergency Repairs',
                text: 'Rapid response for leaks, burst pipes, and urgent plumbing issues.',
              },
              {
                title: 'Boiler Services',
                text: 'Boiler repairs, installations, servicing, and diagnostics.',
              },
              {
                title: 'Drain Unblocking',
                text: 'Fast and effective drain cleaning and blockage removal.',
              },
              {
                title: 'Bathroom Plumbing',
                text: 'High-quality plumbing installations and renovations.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h4 className="text-xl font-bold">{service.title}</h4>
                <p className="mt-4 leading-relaxed text-zinc-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Why Homeowners Choose Us
              </p>
              <h3 className="mt-4 text-4xl font-black tracking-tight">
                Trusted Local Plumbing Specialists.
              </h3>

              <div className="mt-10 space-y-6">
                {[
                  'Fast response times across Bristol',
                  'Transparent pricing with no hidden fees',
                  'Clean, professional workmanship',
                  'Modern tools and efficient diagnostics',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-zinc-900" />
                    <p className="text-lg text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                alt="Plumbing work"
                className="h-72 w-full rounded-3xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                alt="Plumber repair"
                className="h-72 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Reviews
            </p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">
              Trusted By Local Homeowners.
            </h3>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              'Fastest response we’ve ever had from a plumber. Completely professional from start to finish.',
              'Our leak was fixed within an hour. Website made it easy to call immediately.',
              'Clean work, transparent pricing, and genuinely trustworthy engineers.',
            ].map((review, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8"
              >
                <div className="mb-4 text-lg">⭐⭐⭐⭐⭐</div>
                <p className="leading-relaxed text-zinc-700">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Emergency Plumbing Support
          </p>

          <h3 className="mt-4 text-5xl font-black tracking-tight">
            Need a Plumber Fast?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Contact our team today for urgent plumbing repairs, same-day appointments, and transparent quotes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:01234567890"
              className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              Call Emergency Line
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-zinc-700 px-8 py-4 text-base font-semibold transition hover:bg-zinc-800"
            >
              Request Callback
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-lg font-bold">RapidFlow Plumbing</h4>
            <p className="mt-2 text-zinc-500">
              Serving Bristol & surrounding areas.
            </p>
          </div>

          <div className="text-sm text-zinc-500">
            © 2026 RapidFlow Plumbing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white p-4 md:hidden">
        <a
          href="tel:01234567890"
          className="block rounded-2xl bg-zinc-900 py-4 text-center text-base font-semibold text-white"
        >
          Call Emergency Plumber
        </a>
      </div>
    </div>
  )
}

