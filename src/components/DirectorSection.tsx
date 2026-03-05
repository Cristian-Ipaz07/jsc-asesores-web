import AnimatedSection from "./AnimatedSection";

const sectors = [
  "Comercial y Ventas",
  "Servicios Técnicos",
  "Educación",
  "Salud",
  "Industrial",
  "Tecnología y Economía Digital",
  "Propiedad Horizontal", // Aprovechamos para añadir el nuevo enfoque
  "Sector Jurídico",
];

const DirectorSection = () => (
  <section id="director" className="section-padding bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        {/* Contenedor centrado y con ancho máximo para que no se estire demasiado */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
            Dirección General
          </span>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-2">
            Juan Sebastián Castro Suárez
          </h2>
          
          <p className="text-gold-dark font-body text-base md:text-lg font-medium mb-8 uppercase tracking-widest">
            Contador Público – Especialista en Alta Gerencia
          </p>

          <div className="w-20 h-1 gold-gradient mx-auto mb-10" />

          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Profesional con enfoque estratégico e integral en el acompañamiento
            contable, tributario y financiero. Se caracteriza por combinar una
            visión corporativa y gerencial con un trato cercano y claro,
            orientado a que cada cliente pueda comprender su situación financiera
            para crecer de manera ordenada y sostenible.
          </p>

          {/* Sección de Sectores con mejor distribución */}
          <div className="bg-navy/5 p-8 rounded-sm border border-navy/5">
            <p className="text-sm font-body font-bold text-navy uppercase tracking-widest mb-6">
              Experiencia Multidisciplinaria en Sectores:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((s) => (
                <div
                  key={s}
                  className="flex items-center justify-center p-3 text-[11px] md:text-xs font-body font-semibold bg-white text-navy border border-gold/20 rounded-sm shadow-sm uppercase tracking-wider hover:border-gold transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DirectorSection;