import {
  Phone,
  ShieldCheck,
  Star,
  ArrowRight,
  Wrench,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Flame,
  ChevronRight,
  MapPin,
} from 'lucide-react'

const services = [
  {
    title: 'Emergency Plumbing',
    desc: 'Rapid-response repairs for leaks, burst pipes, blocked drains, and emergencies.',
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: 'Boiler Installations',
    desc: 'Premium boiler replacements, servicing, diagnostics, and heating upgrades.',
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: 'Bathroom Renovations',
    desc: 'High-end bathroom plumbing and luxury renovation installations.',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
]

const reviews = [
  {
    name: 'Sarah Thompson',
    review:
      'The website instantly made them look more professional than every other plumber we checked. Fast response and excellent work.',
  },
  {
    name: 'James Carter',
    review:
      'Everything felt premium from the first phone call. Extremely trustworthy and efficient.',
  },
  {
    name: 'Emily Walker',
    review:
      'The best contractor experience we’ve had. Clean, modern, and genuinely reliable.',
  },
]

export default function PremiumTradesWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
      </div>

      {/* TOP BAR */}
      <div className="relative z-50 border-b border-white/10 bg-cyan-500 text-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm font-bold">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            24/7 Emergency Callouts Available
          </div>

          <div className="hidden md:block">
            Average Response Time: Under 45 Minutes
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              PrimeFlow Services
            </h1>
            <p className="text-sm text-slate-400">
              Premium Emergency Plumbing & Heating
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:flex">
            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>
            <a href="#why" className="hover:text-cyan-400">
              Why Us
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#reviews" className="hover:text-cyan-400">
              Reviews
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </nav>

          <a
            href="tel:01234567890"
            className="hidden rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:scale-105 md:inline-flex"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              Trusted By 1,000+ Local Homeowners
            </div>

            <h2 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-white lg:text-7xl">
              Websites That Make Trades Businesses Look Dominant.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
              This premium trades website system is engineered around one goal:
              helping local service businesses generate more calls, more trust,
              and higher-paying customers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black transition hover:scale-105"
              >
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Emergency Call
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Fully Insured
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Licensed Engineers
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Same Day Service
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop"
                alt="Trades Engineer"
                className="h-[700px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">
                        Emergency response average
                      </p>

                      <h3 className="mt-2 text-5xl font-black text-white">
                        38 mins
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-cyan-400 px-5 py-4 text-sm font-bold text-black">
                      Available Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] py-10 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
          {[
            ['1,200+', 'Local Jobs Completed'],
            ['4.9★', 'Average Google Rating'],
            ['15+', 'Years Experience'],
            ['24/7', 'Emergency Availability'],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-5xl font-black text-cyan-400">{value}</div>
              <p className="mt-3 text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Premium Service Structure
            </p>

            <h3 className="mt-5 text-5xl font-black tracking-tight text-white">
              Built Around What Actually Converts Homeowners.
            </h3>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  {service.icon}
                </div>

                <h4 className="mt-8 text-3xl font-black text-white">
                  {service.title}
                </h4>

                <p className="mt-5 leading-relaxed text-slate-400">
                  {service.desc}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-4">
                  Learn More
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="why"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] py-28 backdrop-blur-xl"
      >
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Why These Websites Work
            </p>

            <h3 className="mt-5 text-5xl font-black tracking-tight text-white">
              Designed Around Real Buyer Psychology.
            </h3>

            <div className="mt-10 space-y-8">
              {[
                'Premium aesthetics increase perceived professionalism.',
                'Emergency-first layouts increase call conversions.',
                'Trust-heavy design reduces hesitation instantly.',
                'Mobile-first UX captures urgent searches.',
                'Fast performance improves SEO and conversions.',
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400" />
                  <p className="text-lg text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              'Mobile Optimized',
              'Local SEO Ready',
              'Fast Loading',
              'Conversion Focused',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-black/30 p-10"
              >
                <h4 className="text-2xl font-black text-white">{item}</h4>
                <p className="mt-4 text-slate-400">
                  Built specifically for modern trades lead generation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Recent Projects
              </p>

              <h3 className="mt-5 text-5xl font-black tracking-tight text-white">
                Real Visual Proof Builds Trust Faster Than Words.
              </h3>
            </div>

            <p className="max-w-xl text-lg text-slate-400">
              High-converting trades websites should showcase real projects,
              engineers, vehicles, and transformations.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
            ].map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img
                  src={image}
                  alt="Project"
                  className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] py-28 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Customer Reviews
            </p>

            <h3 className="mt-5 text-5xl font-black tracking-tight text-white">
              Trust Is The Most Important Conversion Tool.
            </h3>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[2rem] border border-white/10 bg-black/30 p-8"
              >
                <div className="mb-6 flex gap-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                </div>

                <p className="text-lg leading-relaxed text-slate-300">
                  “{review.review}”
                </p>

                <div className="mt-8 font-bold text-white">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-12 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Built For More Leads
            </p>

            <h3 className="mt-6 text-6xl font-black leading-tight text-white">
              Your Website Should Help You Charge More & Win More Jobs.
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              This template system combines premium branding, modern UX,
              conversion psychology, and local SEO strategy to help trades
              businesses dominate their area.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-bold text-black transition hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Emergency Line
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 PrimeFlow Services. Premium Trades Website System.
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Bristol • Bath • Cardiff
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#060816]/95 p-4 backdrop-blur-xl md:hidden">
        <a
          href="tel:01234567890"
          className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-4 text-base font-bold text-black"
        >
          <Phone className="h-5 w-5" />
          Call Emergency Plumber
        </a>
      </div>
    </main>
  )
}
