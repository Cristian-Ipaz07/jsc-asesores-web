import AnimatedSection from "./AnimatedSection";
import { UserCheck, MessageCircle, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Atención Directa",
    desc: "Atención personalizada directamente con Contador Público titulado.",
  },
  {
    icon: MessageCircle,
    title: "Lenguaje Claro",
    desc: "Explicaciones comprensibles para que entienda su negocio, sin tecnicismos innecesarios.",
  },
  {
    icon: ShieldCheck,
    title: "Enfoque Preventivo",
    desc: "Acompañamiento constante para evitar sanciones y contingencias legales ante entes de control.",
  },
];

const WhyUsSection = () => (
  <section className="section-padding bg-navy text-cream">
    <div className="container mx-auto text-center">
      <AnimatedSection>
        <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
          Propuesta de Valor
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
          ¿Por qué elegir JSC?
        </h2>
        <div className="w-16 h-0.5 gold-gradient mx-auto mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="glass-card rounded-sm p-8 hover:border-gold/30 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-cream/60 text-sm font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
