"use client"

import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <main className="bg-white text-black">

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="font-semibold tracking-tight">
            Studio Elevate
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-black/60">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Enquire
          </a>

        </div>
      </header>

      {/* HERO (EDITORIAL STYLE) */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <p className="text-sm uppercase tracking-widest text-black/50">
          Web Design Studio
        </p>

        <h1 className="text-6xl md:text-7xl font-light leading-[1.05] mt-6">
          Websites that
          <br />
          bring you clients,
          <br />
          not just traffic.
        </h1>

        <p className="mt-8 text-lg text-black/60 max-w-2xl">
          We design high-performing digital experiences for modern businesses
          that want clarity, conversion, and credibility online.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 text-sm flex items-center gap-2"
          >
            Start a project <ArrowRight size={16} />
          </a>

          <a
            href="#work"
            className="border border-black px-6 py-3 text-sm"
          >
            View work
          </a>
        </div>

      </section>

      {/* STAT BAR */}
      <section className="border-y border-black/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center py-12">

          <div>
            <p className="text-3xl font-light">+120%</p>
            <p className="text-sm text-black/60">Average lead increase</p>
          </div>

          <div>
            <p className="text-3xl font-light">Fast</p>
            <p className="text-sm text-black/60">Turnaround delivery</p>
          </div>

          <div>
            <p className="text-3xl font-light">Premium</p>
            <p className="text-sm text-black/60">Brand positioning</p>
          </div>

        </div>
      </section>

      {/* SERVICES (EDITORIAL GRID) */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-light">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[
            ["Web Design", "Conversion-focused websites built for clarity and performance."],
            ["Brand Identity", "Minimal, premium branding systems that build trust."],
            ["SEO Strategy", "Visibility systems designed to bring consistent leads."]
          ].map(([title, desc]) => (
            <div className="border-t border-black pt-6">
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-black/60 mt-3">{desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* WORK */}
      <section id="work" className="bg-black text-white py-28">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-light">Selected Work</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {["Finance Brand", "Ecommerce Brand", "Service Brand"].map((item) => (
              <div className="border border-white/10 p-6 h-[260px] flex items-end">
                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-light">Process</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[
            ["Discover", "We understand your business and goals."],
            ["Design", "We create a premium conversion-focused system."],
            ["Deliver", "We launch and optimise for performance."]
          ].map(([title, desc]) => (
            <div className="border-t border-black pt-6">
              <h3 className="font-medium">{title}</h3>
              <p className="text-black/60 mt-3">{desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-black/10 py-28">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-light">
            Let’s work together
          </h2>

          <p className="text-black/60 mt-6">
            Tell us about your project and we’ll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">

            <input className="w-full border border-black/20 p-3" placeholder="Name" />
            <input className="w-full border border-black/20 p-3" placeholder="Email" />
            <textarea className="w-full border border-black/20 p-3 h-32" placeholder="Project details" />

            <button className="bg-black text-white px-6 py-3">
              Send enquiry
            </button>

          </div>

          <div className="mt-10 text-sm text-black/60">
            you@email.com · +44 0000 000 000
          </div>

        </div>

      </section>

    </main>
  )
}