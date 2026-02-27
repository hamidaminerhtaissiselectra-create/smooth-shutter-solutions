import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
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
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";

const IdFPage = () => {
  useSEO({
    title: "Réparation Volets Île-de-France | 7 Départements | Répar'Action Volets",
    description: "Expert en réparation de volets roulants en Île-de-France. Intervention rapide dans les départements 77, 78, 91, 92, 93, 94, 95. Dépannage express et installation.",
    keywords: "réparation volets Île-de-France, volets roulants IdF, dépannage volets 77 78 91 92 93 94 95, installation volets",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention/ile-de-france",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
  ];

  const villes = [
    { name: "Aubervilliers", slug: "reparation-volet-aubervilliers" },
    { name: "Bagnolet", slug: "reparation-volet-bagnolet" },
    { name: "Bobigny", slug: "reparation-volet-bobigny" },
    { name: "Boulogne-Billancourt", slug: "reparation-volet-boulogne-billancourt" },
    { name: "Cergy", slug: "reparation-volet-cergy" },
    { name: "Corbeil-Essonnes", slug: "reparation-volet-corbeil-essonnes" },
    { name: "Courbevoie", slug: "reparation-volet-courbevoie" },
    { name: "Créteil", slug: "reparation-volet-créteil" },
    { name: "Fontenay-sous-Bois", slug: "reparation-volet-fontenaysous-bois" },
    { name: "Ivry-sur-Seine", slug: "reparation-volet-ivrysur-seine" },
    { name: "La Défense", slug: "reparation-volet-la-défense" },
    { name: "Levallois-Perret", slug: "reparation-volet-levallois-perret" },
    { name: "Mantes-la-Jolie", slug: "reparation-volet-mantesla-jolie" },
    { name: "Melun", slug: "reparation-volet-melun" },
    { name: "Montreuil", slug: "reparation-volet-montreuil" },
    { name: "Neuilly-sur-Seine", slug: "reparation-volet-neuillysur-seine" },
    { name: "Noisy-le-Sec", slug: "reparation-volet-noisyle-sec" },
    { name: "Pantin", slug: "reparation-volet-pantin" },
    { name: "Pontoise", slug: "reparation-volet-pontoise" },
    { name: "Puteaux", slug: "reparation-volet-puteaux" },
    { name: "Rambouillet", slug: "reparation-volet-rambouillet" },
    { name: "Rueil-Malmaison", slug: "reparation-volet-rueil-malmaison" },
    { name: "Saint-Cloud", slug: "reparation-volet-saint-cloud" },
    { name: "Saint-Denis", slug: "reparation-volet-saint-denis" },
    { name: "Saint-Germain-en-Laye", slug: "reparation-volet-saint-germainen-laye" },
    { name: "Saint-Mandé", slug: "reparation-volet-saint-mandé" },
    { name: "Saint-Ouen", slug: "reparation-volet-saint-ouen" },
    { name: "Sèvres", slug: "reparation-volet-sèvres" },
    { name: "Versailles", slug: "reparation-volet-versailles" },
    { name: "Villejuif", slug: "reparation-volet-villejuif" },
    { name: "Vincennes", slug: "reparation-volet-vincennes" },
    { name: "Vitry-sur-Seine", slug: "reparation-volet-vitrysur-seine" },
    { name: "Évry", slug: "reparation-volet-évry" }
  ];

  const departements = [
    { name: "Seine-et-Marne", code: "77" },
    { name: "Yvelines", code: "78" },
    { name: "Essonne", code: "91" },
    { name: "Hauts-de-Seine", code: "92" },
    { name: "Seine-Saint-Denis", code: "93" },
    { name: "Val-de-Marne", code: "94" },
    { name: "Val-d'Oise", code: "95" }
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
      question: "Quel est le délai d'intervention en Île-de-France ?",
      answer: "Nous intervenons rapidement dans tous les départements de la région. Les délais varient de 48h à 72h selon votre localisation. Pour les urgences, contactez-nous directement."
    },
    {
      question: "Couvrez-vous tous les départements de l'IdF ?",
      answer: "Oui, nous couvrons les 7 départements : Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95)."
    },
    {
      question: "Proposez-vous des devis gratuits en IdF ?",
      answer: "Absolument. Tous nos devis sont gratuits et sans engagement. Contactez-nous pour une évaluation précise de vos besoins, où que vous soyez en Île-de-France."
    },
    {
      question: "Intervenez-vous sur toutes les marques de volets ?",
      answer: "Oui, nos experts interviennent sur toutes les marques majeures : Somfy, Bubendorff, Simu, Nice, Profalux, etc., que vos volets soient manuels ou électriques."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
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
                7 Départements — Couverture Complète
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Réparation de Volets en <span className="text-accent">Île-de-France</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Répar'Action Volets intervient dans toute la région parisienne. Nos techniciens couvrent les 7 départements pour garantir votre satisfaction.
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
                  <span>48-72h</span>
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

      {/* Départements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Les 7 Départements de l'Île-de-France</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nous couvrons l'intégralité de la région parisienne.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {departements.map((dept, index) => (
              <motion.div
                key={dept.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-accent/20 hover:border-accent hover:bg-accent/5 transition-all">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <span className="text-3xl font-bold text-accent mb-2">{dept.code}</span>
                    <span className="font-semibold text-foreground">{dept.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Villes Desservies en Île-de-France</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Cliquez sur votre ville pour accéder à la page dédiée et découvrir nos services spécifiques.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {villes.map((ville, index) => (
              <motion.div
                key={ville.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/zones-intervention/${ville.slug}`}>
                  <Card className="h-full border-accent/20 hover:border-accent hover:bg-accent/5 transition-all cursor-pointer group">
                    <CardContent className="p-6 flex items-center justify-center h-full text-center">
                      <span className="font-bold text-foreground group-hover:text-accent transition-colors text-sm">{ville.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos services en Île-de-France.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une réparation en Île-de-France ?</h2>
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

export default IdFPage;
