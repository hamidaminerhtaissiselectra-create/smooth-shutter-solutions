import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-shutters.jpg";
import { useRef } from "react";

const badges = [
  { icon: Shield, text: "Garantie 3 ans", variant: "serviceBlue" },
  { icon: Clock, text: "Intervention sous 48h", variant: "serviceOrange" },
  { icon: Award, text: "Artisan certifié RGE", variant: "serviceEmerald" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section ref={ref} id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img 
          src={heroImg} 
          alt="Volets roulants modernes" 
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Expert en Volets Roulants depuis 10 ans — Paris & France
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-foreground"
          >
            Réparation, Installation & Motorisation de <span className="text-accent">Volets Roulants</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Spécialiste en réparation, installation et motorisation de volets roulants à Paris, Île-de-France et partout en France. Intervention rapide sous 48h, diagnostic gratuit et garantie 3 ans.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" variant="accent" asChild className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/#devis" className="flex items-center gap-2">
                Demander un Devis Gratuit <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="accent-outline" asChild className="px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105">
              <a href="tel:0603205967" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> 06 03 20 59 67
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {badges.map((b, i) => (
              <motion.div 
                key={b.text} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant={b.variant as any}>
                  <b.icon className="h-5 w-5" />
                  <span>{b.text}</span>
                </Badge>
              </motion.div>
            
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
