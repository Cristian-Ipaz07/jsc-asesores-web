import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'; // Añadido EffectFade aquí
import AnimatedSection from "./AnimatedSection";

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Añadido el estilo del efecto

const team = [
  {
    role: "Dirección General",
    name: "Juan Sebastián Castro Suárez",
    title: "Contador Público – Especialista en Alta Gerencia",
    description: "Profesional con enfoque estratégico e integral en el acompañamiento contable, tributario y financiero. Se caracteriza por combinar una visión corporativa y gerencial con un trato cercano y claro.",
    sectors: ["Comercial y Ventas", "Servicios Técnicos", "Educación", "Salud", "Industrial", "Tecnología y Economía Digital", "Propiedad Horizontal", "Sector Jurídico"]
  },
  {
    role: "Dirección Jurídica",
    name: "Daniela Estefanía Castro Suárez",
    title: "ABOGADA – DIRECTORA JURÍDICA",
    description: "Profesional del derecho con enfoque estratégico y preventivo. Brinda asesoría clara y responsable en defensa de derechos, resolución de conflictos y cumplimiento normativo en áreas constitucionales y empresariales.",
    sectors: ["Derecho Constitucional", "Derecho Empresarial", "Asesoría Preventiva", "Resolución de Conflictos", "Cumplimiento Normativo"]
  }
];

const DirectorSection = () => (
  <section id="director" className="section-padding bg-background py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]} // Añade EffectFade si quieres suavidad
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true} // ESTA ES LA CLAVE PARA EL INFINITO
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="max-w-5xl mx-auto pb-12"
          >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4 md:px-12">
                <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
                  {member.role}
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-2">
                  {member.name}
                </h2>
                <p className="text-gold-dark font-body text-sm md:text-base font-medium mb-8 uppercase tracking-widest">
                  {member.title}
                </p>
                <div className="w-20 h-1 gold-gradient mx-auto mb-10" />
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                  {member.description}
                </p>
                
                <div className="bg-navy/5 p-6 rounded-sm border border-navy/5">
                  <p className="text-[10px] font-body font-bold text-navy uppercase tracking-widest mb-4">
                    Especialidades y Enfoque:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.sectors.map((s) => (
                      <span key={s} className="px-3 py-1 text-[10px] font-body font-semibold bg-white text-navy border border-gold/20 rounded-full shadow-sm uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSection>
    </div>
  </section>
);

export default DirectorSection;