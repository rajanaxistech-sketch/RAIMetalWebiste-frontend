function About() {
  return (
    <div className="pt-[76px] md:pt-[114px]">

      {/* HERO SECTION */}
      <section className="page-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src="/uploads/whoimage.png"
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

      {/* WHAT WE OFFER */}
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

      {/* OUR HISTORY TIMELINE */}
      <section className="page-section bg-black">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Our Journey
          </p>

          <h2 className="text-5xl font-extrabold mb-12">
            <span className="text-white">Our </span>
            <span className="text-gold">History</span>
          </h2>

          <div className="relative border-l border-gold/30 pl-10 space-y-12">

            {/* ITEM */}
            {[
              {
                year: "1999",
                title: "Founded",
                text: "Rai Metals was established with a clear mission — to bring integrity, precision, and global connectivity to the scrap metal trading industry."
              },
              {
                year: "2004",
                title: "First International Exports",
                text: "Secured our first export contracts in South-East Asia, establishing strong overseas trade relationships."
              },
              {
                year: "2010",
                title: "Expanded to Specialty Metals",
                text: "Diversified into high-temperature alloys including Inconel, Hastelloy, and Tungsten Carbide."
              },
              {
                year: "2016",
                title: "Middle East & European Network",
                text: "Expanded trade corridors into the Middle East and Europe, building strong partnerships."
              },
              {
                year: "2024",
                title: "25 Years & Growing",
                text: "Celebrating over two decades of trusted global trading across 50+ countries."
              }
            ].map((item, index) => (
              <div key={index} className="relative">

                {/* DOT */}
                <span className="absolute -left-[42px] top-2 h-3 w-3 rounded-full bg-gold"></span>

                <div className="flex flex-col md:flex-row md:items-start gap-4">

                  {/* YEAR */}
                  <div className="text-gold text-2xl font-bold min-w-[80px]">
                    {item.year}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="uppercase tracking-wide text-white font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-1 max-w-2xl">
                      {item.text}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;