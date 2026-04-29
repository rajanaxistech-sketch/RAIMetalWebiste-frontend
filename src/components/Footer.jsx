import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/10 bg-dark-500/95 px-[5%] pb-8 pt-16">
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4 font-bebas text-3xl tracking-widest text-gold">
            RAI METALS
          </div>
          <p className="mb-6 text-sm leading-relaxed text-gray-500">
            Global recycling partner connecting suppliers, yards, and mills with
            reliable metal sourcing.
          </p>
          <div className="border-t border-gold/20 pt-4 font-rajdhani text-[11px] uppercase tracking-widest text-gold">
            Business with Integrity
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-rajdhani text-[12px] font-bold uppercase tracking-widest text-gold">
            Company
          </h4>
          <div className="space-y-3 text-sm text-gray-400">
            <NavLink to="/" className="block hover:text-gold">
              Home
            </NavLink>
            <NavLink to="/about" className="block hover:text-gold">
              About Us
            </NavLink>
            <NavLink to="/contact" className="block hover:text-gold">
              Contact
            </NavLink>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-rajdhani text-[12px] font-bold uppercase tracking-widest text-gold">
            Materials
          </h4>
          <div className="space-y-3 text-sm text-gray-400">
            <NavLink to="/categories/ferrous-metal" className="block hover:text-gold">
              Ferrous Metal
            </NavLink>
            <NavLink to="/categories/non-ferrous-metal" className="block hover:text-gold">
              Non Ferrous Metal
            </NavLink>
            <NavLink to="/secondary-metal" className="block hover:text-gold">
              Secondary Metal
            </NavLink>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-rajdhani text-[12px] font-bold uppercase tracking-widest text-gold">
            Support
          </h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p>amar@raimetals.net</p>
            <p>+1 980 229 1914</p>
            <NavLink to="/contact" className="text-gold underline">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-[11px] text-gray-500 md:flex-row">
        <p>© 2026 Rai Metals. All rights reserved.</p>
        <p>
          Powered By{" "}
          <a
            href="https://anaxistech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            AnaxisTech
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
