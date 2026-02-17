import AnimatedSection from "./AnimatedSection";
import { Rocket, Store, Briefcase, Building, FileCheck } from "lucide-react";

const segments = [
  { icon: Rocket, label: "Emprendedores iniciales" },
  { icon: Store, label: "Comerciantes independientes" },
  { icon: Briefcase, label: "Profesionales independientes" },
  { icon: Building, label: "PYMES" },
  { icon: FileCheck, label: "Empresas en formalización" },
];

const ClientSegments = () => (
  <section className="section-padding bg-cream">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="text-gold-dark text-xs font-body tracking-[0.25em] uppercase">Clientes</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Nuestros Segmentos
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-4" />
        </div>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {segments.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-sm elegant-shadow hover:-translate-y-1 hover:border-gold/20 border border-transparent transition-all duration-300">
              <s.icon className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm font-body font-medium text-foreground">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClientSegments;
