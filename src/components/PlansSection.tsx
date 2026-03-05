import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";
// 1. Importamos la configuración global
import { CONTACT_INFO } from "../config"; 

const plans = [
  {
    name: "Plan Básico",
    featured: false,
    items: ["Contabilidad esencial.", "Estados financieros básicos."],
  },
  {
    name: "Plan Emprendedor",
    featured: true,
    badge: "RECOMENDADO",
    items: ["Contabilidad completa.", "Gestión de Impuestos.", "Nómina básica."],
  },
  {
    name: "Plan Premium",
    featured: false,
    items: [
      "Contabilidad completa.",
      "Gestión de Impuestos.",
      "Nómina completa.",
      "Asesoría financiera periódica.",
    ],
  },
  {
    name: "Servicio por Horas",
    featured: false,
    items: [
      "Asesoría especializada.",
      "Tiempo definido.",
      "Según necesidad puntual.",
    ],
  },
];

const PlansSection = () => (
  <section id="planes" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-4">
          <span className="text-gold-dark text-xs font-body tracking-[0.25em] uppercase">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-3">
            Nuestros Planes de Servicio
          </h2>
          <p className="text-muted-foreground text-sm font-body max-w-lg mx-auto">
            Personalizables de acuerdo con el tamaño, actividad económica y
            volumen de operaciones del cliente.
          </p>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-4" />
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {plans.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.1}>
            <div
              className={`relative rounded-sm p-7 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                p.featured
                  ? "bg-navy text-cream elegant-shadow ring-2 ring-gold/50"
                  : "bg-card elegant-shadow border border-border"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-body font-bold tracking-widest uppercase gold-gradient text-navy rounded-sm">
                  {p.badge}
                </span>
              )}
              <h3
                className={`text-xl font-heading font-bold mb-5 ${
                  p.featured ? "text-gold" : "text-foreground"
                }`}
              >
                {p.name}
              </h3>
              <ul className="space-y-3 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-body">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.featured ? "text-gold" : "text-gold-dark"
                      }`}
                    />
                    <span className={p.featured ? "text-cream/80" : "text-muted-foreground"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* 2. Link dinámico con el nombre del plan */}
              <a
                href={`https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(`Hola, me interesa el ${p.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block text-center py-3 rounded-sm text-sm font-body font-semibold transition-all duration-300 ${
                  p.featured
                    ? "bg-gold text-navy hover:bg-gold-light"
                    : "border border-navy text-navy hover:bg-navy hover:text-cream"
                }`}
              >
                Solicitar
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;