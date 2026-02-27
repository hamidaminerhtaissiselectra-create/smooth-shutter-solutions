import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  ArrowRight, 
  Phone, 
  Clock, 
  Award,
  Wrench,
  Settings,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";

const ParisPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  useSEO({
    title: "Réparation Volets Roulants Paris | Tous les Arrondissements | Répar'Action Volets",
    description: "Expert en réparation de volets roulants à Paris. Intervention rapide dans les 20 arrondissements. Dépannage express, installation et motorisation. Devis gratuit.",
    keywords: "réparation volets Paris, volets roulants arrondissements Paris, dépannage volets Paris, installation volets 75",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention/paris",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Paris", url: "/zones-intervention/paris" },
  ];

  const arrondissements = [
    { name: "Paris 1er", slug: "reparation-volet-paris-1" },
    { name: "Paris 2e", slug: "reparation-volet-paris-2" },
    { name: "Paris 3e", slug: "reparation-volet-paris-3" },
    { name: "Paris 4e", slug: "reparation-volet-paris-4" },
    { name: "Paris 5e", slug: "reparation-volet-paris-5" },
    { name: "Paris 6e", slug: "reparation-volet-paris-6" },
    { name: "Paris 7e", slug: "reparation-volet-paris-7" },
    { name: "Paris 8e", slug: "reparation-volet-paris-8" },
    { name: "Paris 9e", slug: "reparation-volet-paris-9" },
    { name: "Paris 10e", slug: "reparation-volet-paris-10" },
    { name: "Paris 11e", slug: "reparation-volet-paris-11" },
    { name: "Paris 12e", slug: "reparation-volet-paris-12" },
    { name: "Paris 13e", slug: "reparation-volet-paris-13" },
    { name: "Paris 14e", slug: "reparation-volet-paris-14" },
    { name: "Paris 15e", slug: "reparation-volet-paris-15" },
    { name: "Paris 16e", slug: "reparation-volet-paris-16" },
    { name: "Paris 17e", slug: "reparation-volet-paris-17" },
    { name: "Paris 18e", slug: "reparation-volet-paris-18" },
    { name: "Paris 19e", slug: "reparation-volet-paris-19" },
    { name: "Paris 20e", slug: "reparation-volet-paris-20" },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Réparation & Dépannage",
      description: "Intervention rapide pour volets bloqués, lames cassées ou moteurs en panne."
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: "Pose de volets roulants neufs en aluminium ou PVC sur-mesure."
    },
    {
      icon: Zap,
      title: "Motorisation & Domotique",
      description: "Modernisez vos volets manuels avec solutions Somfy ou Bubendorff."
    }
  ];

  const faqs = [
    {
      question: "Quel est le délai d'intervention à Paris ?",
      answer: "Nous intervenons en urgence sous 24h à 48h pour tous les dépannages à Paris. Pour les installations, nous planifions selon votre disponibilité."
    },
    {
      question: "Intervenez-vous dans tous les arrondissements ?",
      answer: "Oui, nous couvrons les 20 arrondissements de Paris. Nos techniciens sont basés à proximité pour garantir une intervention rapide."
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      answer: "Absolument. Tous nos devis sont gratuits et sans engagement. Contactez-nous pour une évaluation précise de vos besoins."
    },
    {
      question: "Travaillez-vous sur toutes les marques ?",
      answer: "Oui, nos experts interviennent sur toutes les marques majeures : Somfy, Bubendorff, Simu, Nice, Profalux, etc."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[500px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={ileDeFranceImg} alt="Volets roulants Paris" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8 backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                20 Arrondissements — Intervention Express
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Réparation de Volets Roulants à <span className="text-accent">Paris</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Répar'Action Volets est votre expert de proximité dans tous les arrondissements de Paris. Intervention rapide, diagnostic gratuit et garantie 3 ans.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="accent" asChild className="px-8 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                <a href="tel:0603205967" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> 06 03 20 59 67
                </a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="px-8 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/#devis" className="flex items-center gap-2">
                  Demander un Devis <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceBlue">
                  <Clock className="h-5 w-5" />
                  <span>24-48h</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceOrange">
                  <Award className="h-5 w-5" />
                  <span>Certifié RGE</span>
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <service.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrondissements Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tous les Arrondissements de Paris</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Cliquez sur votre arrondissement pour accéder à la page dédiée et découvrir nos services spécifiques.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {arrondissements.map((arr, index) => (
              <motion.div
                key={arr.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/zones-intervention/${arr.slug}`}>
                  <Card className="h-full border-accent/20 hover:border-accent hover:bg-accent/5 transition-all cursor-pointer group">
                    <CardContent className="p-6 flex items-center justify-center h-full text-center">
                      <span className="font-bold text-foreground group-hover:text-accent transition-colors">{arr.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos services à Paris.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une réparation à Paris ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Contactez-nous dès maintenant pour une intervention rapide et un devis gratuit.</p>
          <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
            <a href="tel:0603205967">Appeler le 06 03 20 59 67</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParisPage;
