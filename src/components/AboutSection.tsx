import AnimatedSection from "./AnimatedSection";
import { Target, Eye } from "lucide-react";

const AboutSection = () => (
  <section id="presentacion" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
              Presentación
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6 gold-border-bottom">
              Quiénes Somos
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mt-10">
              En JSC Asesores y Consultores acompañamos la correcta gestión de
              sus obligaciones contables, tributarias, financieras y legales.
              Nuestro enfoque combina profesionalismo, cercanía,
              confidencialidad y soluciones prácticas adaptadas a la normatividad
              vigente en Colombia.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="p-6 bg-card rounded-sm elegant-shadow border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Misión
                </h3>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Brindar servicios contables, financieros y jurídicos confiables y
                oportunos, aportando valor real mediante asesoría clara, ética y
                orientada al crecimiento sostenible.
              </p>
            </div>
            <div className="p-6 bg-card rounded-sm elegant-shadow border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Visión
                </h3>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Consolidarnos como una firma reconocida a nivel regional por su
                seriedad y calidad profesional, siendo aliados estratégicos en el
                desarrollo empresarial de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
