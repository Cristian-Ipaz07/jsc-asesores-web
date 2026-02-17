import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Oficina corporativa elegante"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 border border-gold/40 rounded-sm"
        >
          <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
            Contabilidad · Finanzas · Derecho
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-cream leading-tight mb-6"
        >
          Soluciones integrales{" "}
          <span className="text-gold-gradient">contables, financieras</span>{" "}
          y jurídicas.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-cream/70 font-body leading-relaxed mb-10 max-w-xl"
        >
          Acompañamos a emprendedores, profesionales independientes y PYMES en
          Colombia para fortalecer la rentabilidad y cumplir sus obligaciones con
          tranquilidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/573188815276"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Habla con un asesor
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-cream/30 text-cream font-body rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
          >
            Ver Portafolio
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
