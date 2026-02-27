import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, ChevronDown, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-shutters.jpg";
import { useRef, useState } from "react";

const badges = [
  { icon: Shield, text: "Garantie 3 ans", bg: "bg-service-blue/10", border: "border-service-blue/20", textColor: "text-service-blue" },
  { icon: Clock, text: "Intervention sous 48h", bg: "bg-service-orange/10", border: "border-service-orange/20", textColor: "text-service-orange" },
  { icon: Award, text: "Artisan certifié RGE", bg: "bg-service-emerald/10", border: "border-service-emerald/20", textColor: "text-service-emerald" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  return (
    <section ref={ref} id="accueil" className="relative min-h-screen flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Parallax background image with enhanced effects */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.img 
          src={heroImg} 
          alt="Volets roulants modernes sur une maison française" 
          className="w-full h-[120%] object-cover"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        {/* Animated overlay gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8 backdrop-blur-sm"
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
                <Shield className="h-4 w-4" />
              </motion.div>
              Expert en Volets Roulants depuis 10 ans — Paris, Île-de-France & Partout en France
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground"
          >
            Réparation, Installation & Motorisation de <motion.span 
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >Volets Roulants</motion.span> à Paris & Île-de-France
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
          >
            Spécialiste en réparation, installation et motorisation de volets roulants à Paris, Île-de-France et partout en France. Intervention rapide sous 48h, diagnostic gratuit, devis transparent, garantie 3 ans pièces et main d'œuvre. Artisans certifiés RGE et Qualibat. Volets bloqués, moteurs en panne, vitrerie cassée : nous intervenons en urgence 7j/7.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-10"
          >
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base font-semibold shadow-lg shadow-accent/25 rounded-full transition-all duration-300">
                <Link to="/#devis">Demander un Devis Gratuit <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="h-5 w-5" /></motion.div></Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5 text-base gap-2 rounded-full transition-all duration-300">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            {badges.map((b, i) => (
              <motion.div 
                key={b.text} 
                className={`flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 rounded-lg border text-sm font-medium ${b.bg} ${b.border} ${b.textColor} backdrop-blur-sm cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: `0 8px 20px ${b.textColor}20`,
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <b.icon className="h-4 w-4" />
                </motion.div>
                <span>{b.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.span 
          className="text-xs font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Découvrir
        </motion.span>
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
