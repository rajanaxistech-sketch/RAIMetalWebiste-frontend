import { NavLink } from "react-router-dom";
import { categories } from "../data/categories";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "/uploads/HMS/HMS1.png",
    tag: "Global Scrap Metal Trading",
    title: "TURNING METAL",
    highlight: "INTO VALUE.",
    description:
      "A trusted global trader of ferrous and non-ferrous scrap metals.",
    buttons: [
      { label: "Explore Materials", link: "#materials", type: "primary" },
      { label: "Request a Quote", link: "/contact", type: "outline" },
    ],
  },
  {
    image: "/uploads/HMS/HMS2.png",
    tag: "About Rai Metals",
    title: "BUILT ON TRUST",
    highlight: "DRIVEN BY QUALITY.",
    description:
      "Over 25+ years of experience in global scrap metal trading.",
    buttons: [
      { label: "About Us", link: "/about", type: "primary" },
      { label: "Contact Us", link: "/contact", type: "outline" },
    ],
  },
  {
    image: "/uploads/HMS/HMS3.png",
    tag: "Global Network",
    title: "WORLDWIDE",
    highlight: "METAL SUPPLY.",
    description:
      "Connecting suppliers and buyers across 50+ countries.",
    buttons: [
      { label: "Our Process", link: "#process", type: "primary" },
      { label: "Get in Touch", link: "/contact", type: "outline" },
    ],
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "50+", label: "Countries" },
  { value: "10K+", label: "Tons Monthly" },
  { value: "100%", label: "Transparent" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "As regular buyers of ferrous scrap, we've consistently received top-quality material. Their dependable supply chain ensures our production runs smoothly.",
  },
  {
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Their imported ferrous ingots have significantly improved our foundry operations. The material purity meets our strict quality standards every time.",
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Their competitive pricing on aluminum scrap has helped us maintain profit margins in a challenging market. Highly recommended supplier.",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "The analytics dashboard alone is worth the price. We've been able to make data-driven decisions that increased our conversion rate.",
  },
];

const materials = [
  {
    code: "Cu",
    name: "Copper",
    type: "Non-Ferrous",
    description: "Bare bright, #1/#2 copper, turnings, and insulated wire.",
    tags: ["#1 Grade", "Mill Ready"],
  },
  {
    code: "Al",
    name: "Aluminum",
    type: "Non-Ferrous",
    description: "Extrusions, wheels, siding, and litho sheets.",
    tags: ["Cast", "6063"],
  },
  {
    code: "Fe",
    name: "Ferrous",
    type: "HMS 1 & 2",
    description: "Shredded scrap, structural steel, and cast iron.",
    tags: ["Heavy", "Bundles"],
  },
  {
    code: "Ni",
    name: "Alloys",
    type: "Superalloys",
    description: "Inconel, Monel, Hastelloy, and Nickel solids.",
    tags: ["High Temp"],
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO CAROUSEL */}
      <header className="relative mt-[76px] min-h-[600px] overflow-hidden md:mt-[114px] md:h-[calc(100vh-114px)]">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${heroSlides[current].image})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* LEFT BUTTON */}
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? heroSlides.length - 1 : prev - 1
            )
          }
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2 bg-black/40 px-3 py-2 text-white hover:bg-black"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % heroSlides.length)
          }
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2 bg-black/40 px-3 py-2 text-white hover:bg-black"
        >
          ›
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-6 ${current === index ? "bg-gold" : "bg-white/40"
                }`}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center px-[8%] py-20">

          {/* TAG */}
          <div className="mb-6 inline-block w-fit border border-gold/40 px-3 py-1">
            <span className="font-rajdhani text-[11px] font-bold uppercase tracking-[3px] text-gold">
              {heroSlides[current].tag}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mb-4 font-bebas text-6xl leading-none text-silver-light md:text-8xl">
            {heroSlides[current].title} <br />
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              {heroSlides[current].highlight}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mb-10 max-w-xl text-lg font-light text-gray-300 md:text-xl">
            {heroSlides[current].description}
          </p>

          {/* DYNAMIC BUTTONS */}
          <div className="flex flex-wrap gap-4">
            {heroSlides[current].buttons.map((btn, index) =>
              btn.link.startsWith("/") ? (
                <NavLink
                  key={index}
                  to={btn.link}
                  className={
                    btn.type === "primary"
                      ? "btn-primary"
                      : "btn-outline"
                  }
                >
                  {btn.label}
                </NavLink>
              ) : (
                <a
                  key={index}
                  href={btn.link}
                  className={
                    btn.type === "primary"
                      ? "btn-primary"
                      : "btn-outline"
                  }
                >
                  {btn.label}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="border-b border-gold/20 bg-dark-300">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 text-center ${index !== stats.length - 1
                  ? "border-r border-gold/10"
                  : ""
                }`}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-gold/20 bg-dark-300">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 text-center ${index !== stats.length - 1 ? "border-r border-gold/10" : ""}`}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Industrial recycling yard"
              className="h-[500px] w-full object-cover grayscale-[20%] shadow-metal"
            />
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 border-2 border-gold" />
            <div className="absolute bottom-6 left-6 border border-gold/20 border-l-4 border-l-gold bg-dark-500/90 p-4">
              <span className="block font-bebas text-3xl text-gold">SINCE 1999</span>
              <span className="font-rajdhani text-[11px] uppercase tracking-widest text-gray-400">
                Industry Excellence
              </span>
            </div>
          </div>

          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">
              Built on Trust. <br />
              <span className="text-gold">Driven by Quality.</span>
            </h2>
            <p className="mb-6 max-w-xl leading-relaxed text-gray-400">
              Rai Metals specializes in the procurement and trading of ferrous
              and non-ferrous metals. We operate as a trusted partner for
              manufacturers and industrial buyers worldwide.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="metal-panel p-4 hover:border-gold/40">
                <h4 className="mb-1 font-rajdhani font-bold uppercase tracking-wider text-gold">
                  🌍 Global Reach
                </h4>
                <p className="text-xs text-gray-500">
                  Trading partners across Asia, Middle East, Europe and Americas.
                </p>
              </div>

              <div className="metal-panel p-4 hover:border-gold/40">
                <h4 className="mb-1 font-rajdhani font-bold uppercase tracking-wider text-gold">
                  ⚖️ Fair Pricing
                </h4>
                <p className="text-xs text-gray-500">
                  Competitive market-linked rates with full transparency.
                </p>
              </div>

              <div className="metal-panel p-4 hover:border-gold/40">
                <h4 className="mb-1 font-rajdhani font-bold uppercase tracking-wider text-gold">
                  🔬 Grade Expertise
                </h4>
                <p className="text-xs text-gray-500">
                  Accurate material identification, sorting, and grading at every step.
                </p>
              </div>

              <div className="metal-panel p-4 hover:border-gold/40">
                <h4 className="mb-1 font-rajdhani font-bold uppercase tracking-wider text-gold">
                  🚢 Logistics Support
                </h4>
                <p className="text-xs text-gray-500">
                  End-to-end freight management including export documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="page-section bg-dark-300">
        <div className="mx-auto mb-12 flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-tag">Materials</span>
            <h2 className="section-title">
              Metals We <span className="text-gold">Buy & Sell</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400">
            Comprehensive range of scrap metals, all grades and quantities
            handled with precision.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0.5 border border-gold/10 bg-gold/10 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <article key={material.name} className="group relative overflow-hidden bg-dark-400 p-8">
              <div className="absolute right-4 top-4 font-bebas text-6xl text-gold/5 transition-colors group-hover:text-gold/20">
                {material.code}
              </div>
              <h3 className="mb-1 font-bebas text-2xl text-silver-light">
                {material.name}
              </h3>
              <span className="mb-4 block font-rajdhani text-xs font-semibold uppercase tracking-widest text-gold">
                {material.type}
              </span>
              <p className="mb-4 text-sm text-gray-500">{material.description}</p>
              <div className="flex flex-wrap gap-2">
                {material.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-2 py-1 text-[10px] uppercase text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section border-y border-gold/10">
        <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-tag">Categories</span>
            <h2 className="section-title">
              Open Each <span className="text-gold">Sub Category</span>
            </h2>
          </div>
          <p className="max-w-xl text-gray-400">
            Ferrous Metal, Non Ferrous Metal, and Secondary Metal now open into
            separate components with their own image and text sections.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ...categories,
            {
              slug: "secondary-metal",
              label: "Secondary Metal",
              description:
                "Recycled and processed metals for sustainable industrial use.",
              fallbackImage:
                "uploads/SecondaryMaterial/secondarymaterial1.jpg",
            },
          ].map((category) => (
            <article key={category.slug} className="metal-panel overflow-hidden">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.fallbackImage})` }}
              />
              <div className="p-6">
                <h3 className="mb-3 font-bebas text-3xl tracking-[0.1em] text-silver-light">
                  {category.label}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {category.description}
                </p>

                <NavLink
                  to={
                    category.slug === "secondary-metal"
                      ? "/secondary-metal"
                      : `/categories/${category.slug}`
                  }
                  className="btn-outline"
                >
                  View Details
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="metal-panel p-8 md:p-10">
            <span className="section-tag">Why Rai Metals</span>
            <h2 className="section-title">
              Structured Trading for <span className="text-gold">Serious Buyers</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="metal-card">
                <div className="mb-3 font-bebas text-3xl text-gold">01</div>
                <h3 className="mb-2 font-rajdhani text-lg font-bold uppercase tracking-wide text-silver-light">
                  Verified Supply
                </h3>
                <p className="text-sm text-gray-500">
                  Source validation, yard checks, and dependable material
                  grading.
                </p>
              </div>
              <div className="metal-card">
                <div className="mb-3 font-bebas text-3xl text-gold">02</div>
                <h3 className="mb-2 font-rajdhani text-lg font-bold uppercase tracking-wide text-silver-light">
                  Clean Logistics
                </h3>
                <p className="text-sm text-gray-500">
                  Documentation, loading coordination, and shipment visibility.
                </p>
              </div>
              <div className="metal-card">
                <div className="mb-3 font-bebas text-3xl text-gold">03</div>
                <h3 className="mb-2 font-rajdhani text-lg font-bold uppercase tracking-wide text-silver-light">
                  Fast Response
                </h3>
                <p className="text-sm text-gray-500">
                  Quick commercial turnaround for quotes, samples, and deals.
                </p>
              </div>
            </div>
          </div>

          <div className="metal-panel flex flex-col justify-between p-8 md:p-10">
            <div>
              <span className="section-tag">Next Step</span>
              <h2 className="section-title">
                Need Consistent <span className="text-gold">Metal Supply?</span>
              </h2>
              <p className="mb-8 text-gray-400">
                Share your grade, quantity, and destination. We will align the
                right sourcing channel and commercial terms.
              </p>
            </div>
            <NavLink to="/contact" className="btn-primary w-fit">
              Start a Conversation
            </NavLink>
          </div>
        </div>
      </section>

      <section id="process" className="page-section bg-black border-t border-gold/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
            OUR <span className="text-gold">PROCESS</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-16">
            A streamlined, transparent workflow from initial inquiry to final
            settlement — designed to maximize value at every step.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
            {[
              {
                step: "01",
                title: "INQUIRY",
                desc: "Contact us with your material type, grade, quantity, and location. We respond within 24 hours.",
              },
              {
                step: "02",
                title: "INSPECTION",
                desc: "Material is inspected and graded on-site or at our facility for accurate sorting.",
              },
              {
                step: "03",
                title: "QUOTE",
                desc: "We provide competitive, market-linked pricing with full transparency.",
              },
              {
                step: "04",
                title: "LOGISTICS",
                desc: "We coordinate pickup, packing, freight, and customs for smooth shipment.",
              },
              {
                step: "05",
                title: "SETTLEMENT",
                desc: "Secure payment processed promptly with full documentation.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="mx-auto mb-6 w-16 h-20 bg-dark-400 flex items-center justify-center skew-y-3">
                  <span className="text-gold font-bebas text-2xl -skew-y-3">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-white font-rajdhani tracking-widest text-sm mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="page-section bg-black border-t border-gold/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
            INDUSTRIES <span className="text-gold">WE WORK WITH</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mb-12">
            From auto dismantlers and steel mills to electrical OEMs and construction
            contractors — we serve buyers and sellers across all industrial sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Steel Mills & Foundries",
              "Automotive Dismantlers",
              "Electrical & Electronics Manufacturers",
              "Construction & Demolition",
              "Aerospace & Defense",
              "Shipbuilding & Marine",
              "Cable & Wire Manufacturers",
              "Industrial Equipment OEMs",
              "Refineries & Smelters",
              "Exporters & Traders",
              "Municipal & Government Projects",
              "Scrap Dealers & Aggregators",
            ].map((industry, index) => (
              <div
                key={index}
                className="border border-gold/20 p-6 flex items-center gap-3 hover:border-gold transition"
              >
                <span className="w-2 h-2 bg-gold rotate-45"></span>
                <span className="text-white font-rajdhani tracking-wide text-sm">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-dark-300">
        <div className="mx-auto max-w-7xl text-center mb-12">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="metal-panel p-6 flex flex-col justify-between hover:border-gold/40 transition"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border border-gold/30"
                  />
                  <h4 className="font-rajdhani font-bold text-silver-light">
                    {t.name}
                  </h4>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-4 text-gold text-sm">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
