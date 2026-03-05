import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { CONTACT_INFO } from "../config"; // Importamos para usar el número global

const needs = [
  "Contabilidad",
  "Impuestos / DIAN",
  "Emprendimiento",
  "Nómina",
  "Finanzas",
  "Propiedad Horizontal", // Nuevo item añadido
  "Otro servicio",
];

const ContactSection = () => {
  const [selected, setSelected] = useState("Contabilidad");
  const [name, setName] = useState("");

  return (
    <section id="contacto" className="section-padding bg-navy text-cream">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <AnimatedSection>
            <span className="text-gold text-xs font-body tracking-[0.25em] uppercase">
              Contáctenos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
              ¿Cómo podemos ayudarle hoy?
            </h2>
            <p className="text-cream/60 font-body mb-8">
              Seleccione su necesidad principal para recibir una atención
              prioritaria e informada.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {needs.map((n) => (
                <button
                  key={n}
                  onClick={() => setSelected(n)}
                  className={`px-4 py-3 rounded-sm text-sm font-body transition-all duration-300 border ${
                    selected === n
                      ? "bg-gold text-navy border-gold font-semibold"
                      : "border-cream/20 text-cream/60 hover:border-gold/40 hover:text-cream"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-sm p-8">
              <h3 className="text-lg font-heading font-semibold mb-6">
                Solicitud de Asesoría
              </h3>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const tipo = (form.elements.namedItem("tipo") as HTMLSelectElement).value;
                  const msg = `Hola, soy ${name} (${tipo}). Necesito asesoría en: ${selected}.`;
                  window.open(
                    `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(msg)}`,
                    "_blank"
                  );
                }}
              >
                <div>
                  <label className="text-xs text-cream/50 font-body uppercase tracking-wider block mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                    className="w-full bg-cream/5 border border-cream/15 rounded-sm px-4 py-3 text-sm font-body text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors uppercase"
                    placeholder="SU NOMBRE"
                  />
                </div>
                <div>
                  <label className="text-xs text-cream/50 font-body uppercase tracking-wider block mb-1.5">
                    Tipo de Cliente
                  </label>
                  <select
                    name="tipo"
                    // Añadimos clases para asegurar que el texto sea visible
                    className="w-full bg-navy border border-cream/15 rounded-sm px-4 py-3 text-sm font-body text-cream focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    {/* Estilizamos las options para que tengan fondo oscuro y texto claro */}
                    <option value="Persona Natural" className="bg-navy text-cream">Persona Natural</option>
                    <option value="Persona Juridica" className="bg-navy text-cream">Persona Juridica</option>
                    <option value="Independiente" className="bg-navy text-cream">Independiente</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-cream/50 font-body uppercase tracking-wider block mb-1.5">
                    Necesidad Principal
                  </label>
                  <input
                    readOnly
                    value={selected}
                    className="w-full bg-cream/5 border border-cream/15 rounded-sm px-4 py-3 text-sm font-body text-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold text-navy font-body font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;