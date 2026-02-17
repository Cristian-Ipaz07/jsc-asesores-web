import AnimatedSection from "./AnimatedSection";
import directorImg from "@/assets/director.jpg";

const sectors = [
  "Comercial y Ventas",
  "Servicios Técnicos",
  "Educación",
  "Salud",
  "Industrial",
  "Tecnología y Economía Digital",
];

const DirectorSection = () => (
  <section id="director" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
              <div className="absolute -inset-8 border border-gold/10 rounded-sm" />
              <img
                src={directorImg}
                alt="Juan Sebastián Castro Suárez"
                className="w-64 h-80 object-cover rounded-sm relative z-10"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-3">
            <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
              Director General
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-2">
              Juan Sebastián Castro Suárez
            </h2>
            <p className="text-gold-dark font-body text-sm font-medium mb-5">
              Contador Público – Especialista en Alta Gerencia
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Profesional con enfoque estratégico e integral en el acompañamiento
              contable, tributario y financiero. Se caracteriza por combinar una
              visión corporativa y gerencial con un trato cercano y claro,
              orientado a que cada cliente pueda comprender su situación financiera
              para crecer de manera ordenada y sostenible.
            </p>

            <p className="text-sm font-body font-semibold text-foreground mb-3">
              Experiencia en Sectores:
            </p>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-body bg-navy/5 text-navy border border-navy/10 rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DirectorSection;
