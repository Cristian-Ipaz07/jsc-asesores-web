import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "../config";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Nosotros", href: "#director" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-heading font-bold text-gold shrink-0">
            JSC
          </span>
          <span className="flex flex-col sm:block text-[10px] sm:text-sm font-body text-cream/80 tracking-wider uppercase leading-tight">
            <span>Asesores y</span>
            <span className="sm:ml-1">Consultores</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-cream/70 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm font-semibold font-body rounded-sm bg-gold text-navy hover:bg-gold-light transition-colors duration-300"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream/80 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/98 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/70 hover:text-gold transition-colors font-body"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/573188815276"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gold text-navy font-semibold rounded-sm font-body"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
