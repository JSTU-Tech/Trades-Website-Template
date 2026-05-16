"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export default function Page() {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <main className="bg-[#05060a] text-white overflow-x-hidden">

      {/* === ATMOSPHERIC BACKGROUND === */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-500/20 blur-[200px] rounded-full animate-pulse" />
      </div>

      {/* === NAV === */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="font-bold text-lg tracking-tight">
            Elevate Trade Systems
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-white/60">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#work">Work</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>

          <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Get Quote
          </button>
        </div>
      </header>

      {/* === HERO (CINEMATIC LAYERED SYSTEM) === */}
      <section className="relative min-h-screen flex items-center px-6 pt-40">

        <motion.div
          style={{ y: y1, opacity }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
              Premium Websites for Trade Businesses
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mt-6">
              Turn Your Trade Business Into a{" "}
              <span className="text-cyan-400">Premium Brand</span>
            </h1>

            <p className="mt-6 text-white/60 text-lg max-w-xl">
              We build cinematic, high-conversion websites for electricians,
              builders, roofers, and contractors who want premium clients — not price shoppers.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
                Book Call <ArrowRight size={16} />
              </button>

              <button className="border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition">
                View Work
              </button>
            </div>

            <div className="flex gap-6 mt-8 text-sm text-white/60">
              <div className="flex items-center gap-2"><Check size={14}/> Premium Design</div>
              <div className="flex items-center gap-2"><Check size={14}/> High Conversion</div>
              <div className="flex items-center gap-2"><Check size={14}/> SEO Ready</div>
            </div>
          </div>

          {/* VISUAL STACK */}
          <div className="relative">

            {/* glow layer */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[140px] rounded-[60px]" />

            {/* image card */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600"
                className="h-[650px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

              {/* floating stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">

                <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-cyan-400">4.9★</div>
                  <div className="text-xs text-white/60">Client Rating</div>
                </div>

                <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-cyan-400">1.2k+</div>
                  <div className="text-xs text-white/60">Projects</div>
                </div>

              </div>

            </div>
          </div>

        </motion.div>
      </section>

      {/* === SERVICES === */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black">
            Built for High-Value Trade Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              ["Electrical & HVAC", "Premium positioning for high-ticket service businesses."],
              ["Builders & Renovation", "Showcase craftsmanship and large-scale project trust."],
              ["Roofing & Exterior", "Dominate your local area with authority-driven design."]
            ].map(([title, desc]) => (

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-white/60 mt-3">{desc}</p>
              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-black leading-tight">
            Your Website Should Win Customers Before You Speak
          </h2>

          <p className="text-white/60 mt-6">
            We build high-end digital experiences that turn trade businesses into premium brands.
          </p>

          <button className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Get Free Strategy Call
          </button>

        </div>
      </section>

    </main>
  )
}