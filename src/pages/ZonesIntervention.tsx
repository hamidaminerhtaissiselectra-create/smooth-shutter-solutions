import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { regionsData } from "@/data/regionsData";
import { 
  MapPin, 
  ArrowRight, 
  Building2, 
  Shield, 
  Phone, 
  CheckCircle, 
  Clock, 
  Award, 
  Users,
  Wrench,
  Settings,
  Hammer,
  Zap,
  Home as HomeIcon,
  ShieldCheck,
  Truck,
  ChevronDown
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import des images des régions
import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";
import auvergneRhoneAlpesImg from "@/assets/regions/auvergne-rhone-alpes.webp";
import provenceAlpesCoteAzurImg from "@/assets/regions/provence-alpes-cote-d-azur.webp";
import nouvelleAquitaineImg from "@/assets/regions/nouvelle-aquitaine.webp";
import occitanieImg from "@/assets/regions/occitanie.webp";
import hautsDeFranceImg from "@/assets/regions/hauts-de-france.webp";
import grandEstImg from "@/assets/regions/grand-est.webp";
import paysDeLaLoireImg from "@/assets/regions/pays-de-la-loire.webp";
import bretagneImg from "@/assets/regions/bretagne.webp";
import normandieImg from "@/assets/regions/normandie.webp";
import bourgogneFrancheComteImg from "@/assets/regions/bourgogne-franche-comte.webp";
import centreValDeLoireImg from "@/assets/regions/centre-val-de-loire.webp";
import corseImg from "@/assets/regions/corse.webp";

const ZonesIntervention = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Zones d'Intervention France | Réparation & Installation Volets Roulants | Répar'Action Volets",
    description: "Répar'Action Volets intervient à Paris, Île-de-France et partout en France pour la réparation, l'installation et la motorisation de vos volets roulants. Intervention express en 24-48h.",
    keywords: "réparation volets roulants France, installation volets roulants, motorisation volets, dépannage volets express, zones intervention",
    canonicalUrl: "https://reparaction-volets.fr/zones-intervention",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
  ];

  // Services adaptés
  const servicesPrincipaux = [
    {
      icon: Wrench,
      title: "Réparation & Dépannage",
      description: "Intervention rapide sur volets bloqués, lames cassées ou moteurs en panne. Diagnostic gratuit et réparation immédiate.",
      actions: ["Dépannage Express", "Réparation Lames", "Remplacement Moteur"],
      link: "/services/reparation-volets-roulants"
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: "Pose de volets roulants neufs en aluminium ou PVC. Solutions sur-mesure adaptées à votre habitat.",
      actions: ["Neuf", "Rénovation", "Sur-mesure"],
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Zap,
      title: "Motorisation & Domotique",
      description: "Modernisez vos volets manuels avec nos solutions de motorisation filaire ou radio (Somfy, Bubendorff).",
      actions: ["Motorisation", "Centralisation", "Connecté"],
      link: "/services/motorisation-domotique"
    }
  ];

  // Stats adaptées
  const stats = [
    { icon: MapPin, value: "50+", label: "Villes desservies" },
    { icon: Building2, value: "40", label: "Arrondissements Paris" },
    { icon: Users, value: "5000+", label: "Clients satisfaits" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention" }
  ];

  // FAQ adaptée
  const faqs = [
    {
      question: "Où intervenez-vous en priorité ?",
      answer: "Répar'Action Volets intervient en priorité à Paris et en Île-de-France, avec des délais garantis de 24 à 48h. Nous couvrons également l'ensemble des grandes métropoles françaises pour vos besoins de réparation et installation."
    },
    {
      question: "Quels sont les délais d'intervention à Paris ?",
      answer: "À Paris : intervention sous 24h à 48h pour les urgences. En Île-de-France : intervention rapide sous 48h à 72h. Pour les autres zones, nous planifions l'intervention selon la disponibilité de nos techniciens locaux."
    },
    {
      question: "Proposez-vous des devis gratuits partout en France ?",
      answer: "Oui, nous proposons des devis gratuits et sans engagement pour tous vos projets de réparation ou d'installation, quelle que soit votre localisation en France métropolitaine."
    },
    {
      question: "Intervenez-vous sur toutes les marques de volets roulants ?",
      answer: "Absolument. Nos techniciens sont formés pour intervenir sur toutes les marques majeures : Somfy, Bubendorff, Simu, Nice, Profalux, etc., que vos volets soient manuels ou électriques."
    }
  ];

  const regionImages: Record<string, string> = {
    "paris": ileDeFranceImg,
    "ile-de-france": ileDeFranceImg,
    "auvergne-rhone-alpes": auvergneRhoneAlpesImg,
    "provence-alpes-cote-d-azur": provenceAlpesCoteAzurImg,
    "nouvelle-aquitaine": nouvelleAquitaineImg,
    "occitanie": occitanieImg,
    "hauts-de-france": hautsDeFranceImg,
    "grand-est": grandEstImg,
    "pays-de-la-loire": paysDeLaLoireImg,
    "bretagne": bretagneImg,
    "normandie": normandieImg,
    "bourgogne-franche-comte": bourgogneFrancheComteImg,
    "centre-val-de-loire": centreValDeLoireImg,
    "corse": corseImg,
  };

  // Villes avec pages locales (Paris et IdF)
  const citiesWithPages = {
    paris: [
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
      { name: "Paris 20e", slug: "reparation-volet-paris-20" }
    ],
    "ile-de-france": [
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
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Style similaire à la page d'accueil */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
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
                Couverture Nationale — Paris & Île-de-France en Priorité
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Nos Zones d'Intervention : <span className="text-accent">Réparation & Installation</span> partout en France
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Basés à Fontenay-Trésigny, nous intervenons sur l'ensemble du territoire français pour garantir le bon fonctionnement de vos volets roulants. Intervention express en Île-de-France et dans les grandes métropoles.
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
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceBlue">
                  <Shield className="h-5 w-5" />
                  <span>Garantie 3 ans</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceOrange">
                  <Clock className="h-5 w-5" />
                  <span>Intervention sous 48h</span>
                </Badge>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-bold backdrop-blur-sm"
              >
                <Badge variant="serviceEmerald">
                  <Award className="h-5 w-5" />
                  <span>Artisan certifié RGE</span>
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services Disponibles Partout</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Bénéficiez de la même qualité d'expertise Répar'Action Volets, où que vous soyez en France.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPrincipaux.map((service, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="pt-6">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.actions.map((action, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">{action}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paris Section - Mise en avant */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Réparation de Volets à Paris</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Intervention rapide dans tous les arrondissements de Paris. 20 arrondissements couverts avec des délais garantis.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
            {citiesWithPages.paris.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/zones-intervention/${city.slug}`}>
                  <div className="p-3 bg-card border border-accent/20 rounded-lg text-center hover:border-accent hover:bg-accent/5 transition-all cursor-pointer">
                    <span className="text-sm font-semibold text-foreground">{city.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Île-de-France Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Réparation de Volets en Île-de-France</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Couverture complète des 7 départements de la région. 33 villes avec pages dédiées et service rapide.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
            {citiesWithPages["ile-de-france"].map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/zones-intervention/${city.slug}`}>
                  <div className="p-3 bg-card border border-accent/20 rounded-lg text-center hover:border-accent hover:bg-accent/5 transition-all cursor-pointer">
                    <span className="text-sm font-semibold text-foreground">{city.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres Régions - Grille Simple */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Couverture Nationale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nous intervenons dans toute la France. Découvrez nos services dans votre région.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionsData.slice(2).map((region, index) => (
              <AnimatedSection key={region.slug} animation="fade-up" delay={index * 50}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all border-border">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={regionImages[region.slug] || ileDeFranceImg} 
                      alt={region.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{region.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{region.description}</p>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {region.departments.length} départements
                    </span>
                  </CardContent>
                </Card>
              </AnimatedSection>
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
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur notre couverture géographique.</p>
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
          <Truck className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un problème de volet roulant ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Nos techniciens interviennent rapidement chez vous, partout en France. Devis gratuit et intervention garantie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
              <Link to="/#devis">Demander mon devis gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-10" asChild>
              <a href="tel:0603205967">Appeler le 06 03 20 59 67</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZonesIntervention;
