import { Phone, Mail, MapPin } from "lucide-react";
export const CONTACT_INFO = {
  phoneRaw: "573162933804", // Formato para el enlace de WhatsApp
  phoneDisplay: "316 293 3804", // Formato visual para el Footer
  whatsappLink: "https://wa.me/573162933804",
};

const Footer = () => (
  <footer className="bg-navy border-t border-cream/10">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <span className="text-2xl font-heading font-bold text-gold">JSC</span>
          <span className="ml-2 text-sm font-body text-cream/60 tracking-wider uppercase">
            Asesores y Consultores
          </span>
          <p className="mt-4 text-cream/40 text-sm font-body leading-relaxed max-w-xs">
            Soluciones integrales contables, financieras y jurídicas. Acompañamos
            su crecimiento con transparencia y ética profesional.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-body font-semibold text-cream/80 uppercase tracking-wider mb-4">
            Contacto Directo
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-cream/50 text-sm font-body">
              <Phone className="w-4 h-4 text-gold" />
              {/* Se actualizará solo cuando cambies el archivo config */}
              {CONTACT_INFO.phoneDisplay}
            </li>
            <li className="flex items-center gap-3 text-cream/50 text-sm font-body">
              <Mail className="w-4 h-4 text-gold" />
              jsc.asesoresyconsultores@gmail.com
            </li>
            <li className="flex items-center gap-3 text-cream/50 text-sm font-body">
              <MapPin className="w-4 h-4 text-gold" />
              Pasto, Nariño – Colombia
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-body font-semibold text-cream/80 uppercase tracking-wider mb-4">
            Atención
          </h4>
          <p className="text-cream/50 text-sm font-body">
            Modalidad Presencial y Virtual
          </p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-cream/10 text-center">
        <p className="text-cream/30 text-xs font-body">
          © 2025 JSC Asesores y Consultores. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
