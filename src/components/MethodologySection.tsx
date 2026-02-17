import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Diagnóstico Inicial", desc: "Situación contable, tributaria y financiera." },
  { num: "02", title: "Propuesta", desc: "Personalizada a sus necesidades." },
  { num: "03", title: "Firma de Contrato", desc: "Acuerdo legal de prestación de servicios." },
  { num: "04", title: "Ejecución", desc: "Gestión profesional permanente." },
  { num: "05", title: "Seguimiento", desc: "Mejora continua y resultados." },
];

const MethodologySection = () => (
  <section className="section-padding bg-navy text-cream overflow-hidden">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">Proceso</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Metodología de Trabajo</h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto" />
        </div>
      </AnimatedSection>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gold/20 -translate-y-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.12}>
              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-4 bg-navy relative z-10">
                  <span className="text-gold font-heading font-bold text-lg">{s.num}</span>
                </div>
                <h3 className="text-base font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-cream/50 text-sm font-body">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MethodologySection;
