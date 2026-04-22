function About() {
  return (
    <div className="pt-[76px] md:pt-[114px]">
      <section className="page-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src="/uploads/whopagephoto.jpg"
              alt="Metal scrap yard worker"
              className="w-full max-w-md rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="section-tag">About Rai Metals</span>
            <h1 className="section-title">
              Premier Suppliers of <span className="text-gold">Metal Scrap & Ingots</span>
            </h1>
            <p className="max-w-3xl text-lg text-gray-400">
              We are premier suppliers of imported ferrous and non-ferrous metal scrap,
              metal ingots, and related materials. Our products meet the highest industry
              standards, sourced from reliable partners worldwide.
            </p>
          </div>

        </div>
      </section>

      <section className="page-section bg-dark-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="metal-card lg:col-span-2">
            <h2 className="mb-4 font-bebas text-4xl tracking-wide text-silver-light">
              What We Offer
            </h2>
            <p className="mb-4 leading-relaxed text-gray-400">
              With decades of experience in the metal recycling and supply industry,
              we pride ourselves on delivering exceptional quality and service to our
              clients across various sectors, including manufacturing, construction,
              and automotive industries.
            </p>
            <p className="leading-relaxed text-gray-500">
              All materials are procured from very reliable sources to ensure they meet
              defined industry standards. We supply to countries such as India, China,
              Bangladesh, Sri Lanka, USA, Singapore, Malaysia, and several parts of
              the Middle East.
            </p>
          </div>
          <div className="metal-card">
            <div className="mb-3 font-bebas text-3xl text-gold">Our Product Range</div>
            <div className="space-y-3 text-sm text-gray-400">
              <p>HMS I & II</p>
              <p>Shredded Steel Scrap</p>
              <p>Cast Iron Scrap</p>
              <p>Aluminum Scrap</p>
              <p>Brass Scrap</p>
              <p>Copper Scrap</p>
              <p>MS Plates (Prime & Secondary)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;