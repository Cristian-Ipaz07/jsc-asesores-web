import AnimatedSection from "./AnimatedSection";
import { Calculator, FileText, Users, Building2, TrendingUp, Scale } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Servicios Contables",
    items: [
      "Contabilidad general: Organización y registro, libros contables.",
      "Estados financieros: Balance, resultados y flujo de caja.",
      "Análisis financiero para evaluación de situación real.",
    ],
  },
  {
    icon: FileText,
    title: "Impuestos (Tributario)",
    items: [
      "Presentación de Renta, IVA, ICA.",
      "Planeación tributaria básica y periódica.",
      "Acompañamiento en requerimientos DIAN.",
    ],
  },
  {
    icon: Users,
    title: "Nómina y Seguridad Social",
    items: [
      "Elaboración de nómina y liquidaciones.",
      "Aportes PILA y Parafiscales.",
      "Apoyo documental en contratación laboral.",
    ],
  },
  {
    icon: Building2,
    title: "Formalización",
    items: [
      "Inscripción Cámara de Comercio.",
      "Registro y actualización del RUT.",
      "Implementación de Facturación Electrónica.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Servicios Financieros",
    items: [
      "Elaboración de presupuestos y flujo de caja.",
      "Análisis de costos y fijación de precios.",
      "Evaluación de proyectos e indicadores.",
    ],
  },
  {
    icon: Scale,
    title: "Servicios Jurídicos",
    subtitle: "(En alianza profesional)",
    items: [
      "Contratos civiles, comerciales y laborales.",
      "Constitución de empresas y reformas estatutarias.",
      "Elaboración de actas y trámites administrativos.",
    ],
  },
];

const ServicesSection = () => (
  <section id="servicios" className="section-padding bg-cream">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-gold-dark text-xs font-body tracking-[0.25em] uppercase">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Nuestros Servicios Integrales
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="bg-card p-7 rounded-sm elegant-shadow h-full group hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-gold/20">
              <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-500">
                <s.icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                {s.title}
              </h3>
              {s.subtitle && (
                <span className="text-xs text-gold font-body">{s.subtitle}</span>
              )}
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground font-body flex items-start gap-2"
                  >
                    <span className="text-gold mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
