import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../config";

const WhatsAppButton = () => (
  <motion.a
    href={CONTACT_INFO.whatsappLink} // <--- Cambio clave aquí
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-card" />
  </motion.a>
);

export default WhatsAppButton;
