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
              En JSC Asesores y Consultores acompañamos a personas y organizaciones en la gestión y toma de decisiones relacionadas con sus actividades económicas, aportando claridad, orden y respaldo profesional.
              <br /><br />
              Nuestro enfoque combina profesionalismo, cercanía y confidencialidad, con soluciones prácticas y estratégicas que contribuyen al crecimiento sostenible y al desarrollo responsable de cada cliente, adaptándonos a sus necesidades y al entorno normativo aplicable.
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
                Brindar servicios profesionales confiables y oportunos, mediante un acompañamiento integral, claro y ético, que aporte valor real, facilite la toma de decisiones y contribuya al crecimiento sostenible y ordenado de las actividades económicas de nuestros clientes.
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
                Ser una firma de referencia por su excelencia profesional, ética y enfoque estratégico, reconocida por acompañar y fortalecer a personas y organizaciones en la toma de decisiones y la gestión responsable, siendo un apoyo estratégico para su crecimiento, sostenibilidad y evolución en diversos entornos empresariales.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
