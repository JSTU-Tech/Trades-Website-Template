"use client"

import { Check, ArrowRight } from "lucide-react"

export default function NorthvoltPage() {
  return (
    <main className="bg-white text-black">

      {/* NAV */}
      <header className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="font-semibold tracking-tight">
            Northvolt Electrical
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-black/60">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
          >
            Get Quote
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <p className="text-sm uppercase tracking-widest text-black/50">
          Electrical Contractors • London
        </p>

        <h1 className="text-6xl font-light leading-[1.05] mt-6">
          Precision electrical work for
          <br />
          modern homes & businesses
        </h1>

        <p className="mt-8 text-black/60 max-w-2xl text-lg">
          We design, install, and maintain high-end electrical systems with a focus on safety,
          reliability, and modern living standards.
        </p>

        <div className="flex gap-4 mt-10">
          <a className="bg-black text-white px-6 py-3 text-sm flex items-center gap-2">
            Request Quote <ArrowRight size={16} />
          </a>

          <a className="border border-black px-6 py-3 text-sm">
            View Projects
          </a>
        </div>

      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-black/10 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center">

          <div>
            <p className="text-3xl font-light">15+</p>
            <p className="text-sm text-black/60">Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-light">500+</p>
            <p className="text-sm text-black/60">Projects Completed</p>
          </div>

          <div>
            <p className="text-3xl font-light">5★</p>
            <p className="text-sm text-black/60">Customer Rating</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-light">Services</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {[
            ["Residential Wiring", "Full home electrical systems designed for safety and efficiency."],
            ["Smart Home Installations", "Lighting, automation, and integrated smart systems."],
            ["Commercial Projects", "Scalable electrical infrastructure for business spaces."]
          ].map(([title, desc]) => (
            <div className="border-t border-black pt-6">
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-black/60 mt-3">{desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-black text-white py-28">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-light">Recent Work</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {["Luxury Apartment Wiring", "Office Fit-out", "Smart Lighting Install"].map((p) => (
              <div className="border border-white/10 p-6 h-[260px] flex items-end">
                <p>{p}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-light">About Northvolt</h2>

        <p className="mt-8 text-black/60 max-w-3xl text-lg">
          Northvolt Electrical is a London-based electrical contractor specialising in high-end residential
          and commercial installations. We focus on precision engineering, modern systems, and long-term reliability.
        </p>

      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-black/10 py-28">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-light">Get a Quote</h2>

          <p className="text-black/60 mt-6">
            Tell us about your project and we’ll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">

            <input className="w-full border border-black/20 p-3" placeholder="Name" />
            <input className="w-full border border-black/20 p-3" placeholder="Email" />
            <textarea className="w-full border border-black/20 p-3 h-32" placeholder="Project details" />

            <button className="bg-black text-white px-6 py-3">
              Send Enquiry
            </button>

          </div>

          <div className="mt-10 text-sm text-black/60">
            northvolt@email.com · +44 0000 000 000
          </div>

        </div>

      </section>

    </main>
  )
}