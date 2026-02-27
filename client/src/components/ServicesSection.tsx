import { motion } from "framer-motion";
import { Wrench, RefreshCcw, GlassWater, Cpu, LayoutGrid, Zap, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import imgReparation from "@/assets/service-reparation.jpg";
import imgInstallation from "@/assets/service-installation.jpg";
import imgVitrerie from "@/assets/service-vitrerie.jpg";
import imgMotorisation from "@/assets/service-motorisation.jpg";
import imgComplete from "@/assets/service-installation-complete.jpg";
import imgDepannage from "@/assets/service-depannage.jpg";

const services = [
  {
    icon: Wrench,
    title: "Réparation de Volets Roulants",
    desc: "Diagnostic et réparation de tous types de volets roulants : manuels, électriques, solaires. Intervention rapide sur tous mécanismes.",
    badge: "Le + demandé",
    iconBg: "bg-service-blue",
    iconShadow: "shadow-[0_4px_14px_hsl(213,72%,50%,0.35)]",
    cardBorder: "hover:border-service-blue/40",
    image: imgReparation,
    link: "/services/reparation-volets-roulants",
  },
  {
    icon: RefreshCcw,
    title: "Remplacement de Volets",
    desc: "Installation de volets roulants neufs en aluminium ou PVC. Large choix de coloris et de modèles sur-mesure.",
    badge: "Sur-mesure",
    iconBg: "bg-service-rose",
    iconShadow: "shadow-[0_4px_14px_hsl(350,80%,55%,0.35)]",
    cardBorder: "hover:border-service-rose/40",
    image: imgInstallation,
    link: "/services/installation-remplacement-volets",
  },
  {
    icon: GlassWater,
    title: "Vitrerie & Vitrage",
    desc: "Remplacement de vitrage simple, double ou triple. Intervention d'urgence pour bris de glace 7j/7.",
    badge: "Urgence 7j/7",
    iconBg: "bg-service-emerald",
    iconShadow: "shadow-[0_4px_14px_hsl(160,70%,40%,0.35)]",
    cardBorder: "hover:border-service-emerald/40",
    image: imgVitrerie,
    link: "/services/vitrerie-remplacement-vitrage",
  },
  {
    icon: Cpu,
    title: "Motorisation & Domotique",
    desc: "Motorisation de vos volets roulants et rideaux métalliques. Intégration domotique compatible Somfy, Google Home, Alexa.",
    badge: "Connecté",
    iconBg: "bg-service-violet",
    iconShadow: "shadow-[0_4px_14px_hsl(260,65%,55%,0.35)]",
    cardBorder: "hover:border-service-violet/40",
    image: imgMotorisation,
    link: "/services/motorisation-domotique",
  },
  {
    icon: LayoutGrid,
    title: "Installation Complète",
    desc: "Prise de mesures, fabrication sur-mesure et pose professionnelle. Accompagnement complet de A à Z.",
    badge: "Clé en main",
    iconBg: "bg-service-cyan",
    iconShadow: "shadow-[0_4px_14px_hsl(190,80%,45%,0.35)]",
    cardBorder: "hover:border-service-cyan/40",
    image: imgComplete,
    link: "/services/installation-remplacement-volets",
  },
  {
    icon: Zap,
    title: "Dépannage Express",
    desc: "Service de dépannage rapide pour volets bloqués ou moteurs en panne. Intervention le jour même.",
    badge: "Express",
    iconBg: "bg-service-orange",
    iconShadow: "shadow-[0_4px_14px_hsl(25,90%,55%,0.35)]",
    cardBorder: "hover:border-service-orange/40",
    image: imgDepannage,
    link: "/services/depannage-express",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-12 sm:py-16 md:py-20 bg-section-gradient relative overflow-hidden">
    {/* Animated background elements */}
    <motion.div 
      className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      animate={{
        y: [0, 50, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div 
      className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      animate={{
        y: [0, -50, 0],
        x: [0, -30, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <motion.span 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.2)",
              "0 0 40px rgba(59, 130, 246, 0.4)",
              "0 0 20px rgba(59, 130, 246, 0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
            <Shield className="h-3.5 w-3.5" />
          </motion.div>
          Solutions Complètes
        </motion.span>
        <motion.h2 
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Services Complets de Réparation, Installation et Motorisation de Volets Roulants
        </motion.h2>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Réparation, installation et motorisation de volets roulants. Expertise multimarques (Somfy, Bubendorff), intervention rapide, garantie 3 ans pièces et main d'œuvre. Paris & Île-de-France.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className={`group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border border-border ${s.cardBorder} relative`}
          >
            {/* Animated background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            {/* Image with icon badge overlay */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating icon badge - top left */}
              <motion.div 
                className={`absolute top-3 left-3 w-12 h-12 rounded-2xl ${s.iconBg} ${s.iconShadow} flex items-center justify-center border-2 border-white/20 z-10`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <s.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </motion.div>
              </motion.div>
              
              {/* Badge top right */}
              <motion.span 
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-card/90 backdrop-blur-sm text-foreground shadow-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              >
                {s.badge}
              </motion.span>
            </div>

            {/* Content */}
            <div className="p-6 pt-5 relative z-10">
              <motion.h3 
                className="font-display font-bold text-lg text-foreground mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2 }}
              >
                {s.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground text-sm leading-relaxed mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3 }}
              >
                {s.desc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.4 }}
              >
                <Link to={s.link} className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all group-hover:text-accent">
                  Découvrir <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-4 w-4" /></motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
