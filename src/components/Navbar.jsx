import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { categories } from "../data/categories";

const pageLinks = [
  { to: "/about", label: "About" },
  { to: "/#process", label: "Process" },
  { to: "/#industries", label: "Industries" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle smooth scroll after route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, target) => {
    e.preventDefault();

    if (target.includes("#")) {
      navigate(target);
    } else {
      navigate(target);
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="fixed top-0 z-[101] hidden h-[38px] w-full items-center justify-end gap-5 border-b border-gold/10 bg-dark-500/95 px-[5%] md:flex">

        <div className="h-4 w-px bg-gold/20" />

        {/* EMAIL */}
        <a
          href="mailto:amar@raimetals.net"
          className="flex items-center gap-2 font-rajdhani text-[13px] font-bold text-gold"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          amar@raimetals.net
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/19802291914"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-rajdhani text-[13px] font-bold text-gold hover:text-white"
        >
          <i className="fab fa-whatsapp text-gold text-lg"></i>
          +1 980 229 1914
        </a>

      </div>

      {/* MAIN NAV */}
      <nav className="fixed top-0 z-[100] flex min-h-[76px] w-full items-center justify-between border-b border-gold/20 bg-dark-500/90 px-[5%] py-2 backdrop-blur-md md:top-[38px]">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/uploads/Logo1.jpeg"
            alt="Rai Metals logo"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded border border-gold/20 object-cover"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-9 lg:flex">
          {pageLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}

          {/* MATERIALS DROPDOWN */}
          <div className="group relative">
            <div className="nav-link flex items-center gap-2 cursor-pointer">
              Materials
              <span className="text-[10px] text-gold transition-transform duration-200 group-hover:rotate-180">▼</span>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-full z-[120] w-[900px] -translate-x-1/2 pt-6 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="border border-gold/20 bg-dark-400/95 p-6 shadow-metal backdrop-blur-xl">
                <div className="mb-5 border-b border-gold/10 pb-4">
                  <span className="section-tag mb-2">Materials</span>
                  <h3 className="font-bebas text-3xl tracking-[0.12em] text-silver-light">Our Materials</h3>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <Link
                        to={`/categories/${category.slug}`}
                        className="mb-3 block font-rajdhani text-lg font-bold uppercase tracking-[0.16em] text-gold hover:text-white"
                      >
                        {category.label}
                      </Link>

                      <div className="flex flex-col gap-2">
                        {category.subcategories.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/categories/${category.slug}/${item.slug}`}
                            className="text-sm text-gray-400 hover:text-gold"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                    </div>
                  ))}

                  {/* Secondary Metal */}
                  <div>
                    <Link
                      to="/secondary-metal"
                      className="mb-3 block font-rajdhani text-lg font-bold uppercase tracking-[0.16em] text-gold hover:text-white"
                    >
                      Secondary Metal
                    </Link>

                    <p className="text-sm text-gray-400">
                      Recycled and processed metals for sustainable industrial use.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <NavLink to="/contact" className="btn-primary hidden px-6 py-2 sm:inline-flex">
            Contact Us
          </NavLink>

          <button
            className="flex flex-col gap-1 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="h-[2px] w-6 bg-gold"></span>
            <span className="h-[2px] w-6 bg-gold"></span>
            <span className="h-[2px] w-6 bg-gold"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[76px] left-0 w-full bg-dark-500/95 backdrop-blur-md z-[99] transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          } lg:hidden`}
      >
        <div className="flex flex-col gap-6 p-6">

          {/* PAGE LINKS */}
          {pageLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="text-lg text-gold"
            >
              {link.label}
            </NavLink>
          ))}

          {/* MATERIALS MOBILE */}
          <div>
            <p className="text-lg text-gold mb-2">Materials</p>

            <div className="ml-4 flex flex-col gap-3">

              {categories.map((category) => (
                <div key={category.slug}>
                  <Link
                    to={`/categories/${category.slug}`}
                    className="text-md text-gold"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.label}
                  </Link>

                  <div className="ml-3 flex flex-col gap-1 mt-1">
                    {category.subcategories.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/categories/${category.slug}/${item.slug}`}
                        className="text-sm text-gray-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Secondary Metal */}
              <NavLink
                to="/secondary-metal"
                className="text-md text-gold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Secondary Metal
              </NavLink>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;