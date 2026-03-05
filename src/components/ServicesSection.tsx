import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  Calculator, FileText, Users, Building2, 
  TrendingUp, Scale, Home, ChevronRight 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CONTACT_INFO } from "../config";

const services = [
  {
    icon: Calculator,
    title: "Servicios Contables",
    description: "Es el servicio encargado de organizar, registrar y estructurar la información financiera de tu empresa conforme a la normatividad vigente.",
    detailedItems: ["Registro y organización contable", "Elaboración de estados financieros", "Conciliaciones bancarias", "Informes periódicos", "Análisis financiero básico"],
    target: "Empresas, pymes y emprendedores que ya facturan o están en crecimiento.",
    problem: "Desorden contable, falta de claridad financiera y riesgos ante entidades de control.",
    items: ["Contabilidad general", "Estados financieros", "Análisis financiero"],
  },
  {
    icon: FileText,
    title: "Impuestos (Tributario)",
    description: "Es el servicio de cumplimiento y planeación de obligaciones tributarias ante la DIAN y entidades municipales.",
    detailedItems: ["Declaración de Renta", "Declaración de IVA", "Declaración de ICA", "Planeación tributaria", "Respuesta a requerimientos"],
    target: "Personas naturales y jurídicas obligadas a declarar impuestos.",
    problem: "Multas, sanciones e intereses por mala planificación tributaria.",
    items: ["Renta, IVA, ICA", "Planeación tributaria", "Requerimientos DIAN"],
  },
  {
    icon: Users,
    title: "Nómina y Seguridad Social",
    description: "Servicio de gestión y liquidación de obligaciones laborales y aportes a seguridad social.",
    detailedItems: ["Elaboración de nómina", "Liquidaciones laborales", "Aportes a seguridad social (PILA)", "Aportes parafiscales", "Soporte en contratación"],
    target: "Empresas que cuentan con empleados o planean contratar personal.",
    problem: "Errores en pagos, demandas laborales y sanciones.",
    items: ["Liquidaciones y nómina", "Aportes PILA", "Contratación laboral"],
  },
  {
    icon: Building2,
    title: "Formalización Empresarial",
    description: "Acompañamiento integral para la creación, legalización y estructuración formal de negocios.",
    detailedItems: ["Inscripción en Cámara de Comercio", "Registro y actualización del RUT", "Implementación de facturación electrónica", "Asesoría en régimen tributario", "Constitución de empresa"],
    target: "Emprendedores y empresarios que desean formalizar su negocio.",
    problem: "Informalidad y limitaciones para contratar o acceder a créditos.",
    items: ["Cámara de Comercio", "RUT", "Facturación Electrónica"],
  },
  {
    icon: TrendingUp,
    title: "Servicios Financieros",
    description: "Asesoría estratégica para mejorar la rentabilidad, liquidez y sostenibilidad del negocio.",
    detailedItems: ["Presupuestos", "Flujo de caja proyectado", "Análisis de costos", "Fijación estratégica de precios", "Evaluación de proyectos"],
    target: "Empresas que desean crecer o mejorar utilidades.",
    problem: "Baja rentabilidad y decisiones sin soporte técnico.",
    items: ["Presupuestos y Flujo de caja", "Análisis de costos", "Indicadores"],
  },
  {
    icon: Scale,
    title: "Servicios Jurídicos",
    subtitle: "(En alianza profesional)",
    description: "Asesoría legal empresarial orientada a la prevención y solución de riesgos jurídicos.",
    detailedItems: ["Contratos civiles y comerciales", "Reformas estatutarias", "Elaboración de actas", "Trámites administrativos", "Derechos de petición"],
    target: "Empresas y personas que requieren respaldo legal.",
    problem: "Conflictos contractuales y falta de protección jurídica.",
    items: ["Contratos", "Reformas estatutarias", "Trámites legales"],
  },
  {
    icon: Home,
    title: "Propiedad Horizontal",
    description: "Servicio especializado en la administración contable, financiera y jurídica de copropiedades.",
    detailedItems: ["Contabilidad de la copropiedad", "Estados financieros", "Presupuesto anual", "Control de cartera", "Asesoría en reglamento y actas"],
    target: "Conjuntos residenciales, edificios, consejos de administración entre otros.",
    problem: "Falta de transparencia financiera y cartera morosa.",
    items: ["Contabilidad copropiedad", "Control de cartera", "Presupuesto anual"],
  },
];

const ServicesSection = () => {
  return (
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
              <div className="bg-card p-7 rounded-sm elegant-shadow h-full group flex flex-col transition-all duration-500 border border-transparent hover:border-gold/20">
                <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-500">
                  <s.icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                {s.subtitle && (
                  <span className="text-xs text-gold font-body">{s.subtitle}</span>
                )}
                
                <ul className="mt-4 space-y-2 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-gold mt-1 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* MODAL DETALLADO */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-6 flex items-center gap-1 text-xs font-bold text-navy hover:text-gold transition-colors uppercase tracking-wider">
                      Saber más <ChevronRight className="w-4 h-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] bg-cream border-gold/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-heading text-navy flex items-center gap-2">
                        <s.icon className="w-6 h-6 text-gold" />
                        {s.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="mt-4 space-y-4 font-body text-sm leading-relaxed">
                      <div>
                        <h4 className="font-bold text-navy uppercase text-[11px] tracking-widest mb-1">¿Qué es?</h4>
                        <p className="text-muted-foreground">{s.description}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-navy uppercase text-[11px] tracking-widest mb-1">¿Qué incluye?</h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {s.detailedItems?.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-gold rounded-full" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <h4 className="font-bold text-navy uppercase text-[11px] tracking-widest mb-1">¿A quién va?</h4>
                          <p className="text-[12px] leading-tight text-muted-foreground">{s.target}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-navy uppercase text-[11px] tracking-widest mb-1">Solución</h4>
                          <p className="text-[12px] leading-tight text-muted-foreground">{s.problem}</p>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(`Hola, me interesa contratar el servicio de: ${s.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-6 bg-navy text-cream py-3 rounded-sm font-bold text-center block hover:bg-gold hover:text-navy transition-all"
                      >
                        Contratar Servicio
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;