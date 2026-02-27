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
  Clock, 
  Award, 
  Users,
  Wrench,
  Settings,
  Zap,
  Truck,
  CheckCircle
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuoteFormSection from "@/components/QuoteFormSection";

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
      link: "/services/reparation-volets-roulants"
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: "Pose de volets roulants neufs en aluminium ou PVC. Solutions sur-mesure adaptées à votre habitat.",
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Zap,
      title: "Motorisation & Domotique",
      description: "Modernisez vos volets manuels avec nos solutions de motorisation filaire ou radio (Somfy, Bubendorff).",
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
    },
    {
      question: "Comment obtenir un devis rapidement ?",
      answer: "Vous pouvez demander un devis en remplissant le formulaire ci-dessous, en nous appelant au 06 03 20 59 67, ou en nous envoyant un email. Nous vous recontactons sous 24h avec votre devis personnalisé."
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

      {/* Paris & IdF - Présentation par Blocs (Image + Texte) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Bloc Paris */}
          <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={ileDeFranceImg} 
                  alt="Réparation volets Paris" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div>
                <Badge variant="serviceOrange" className="mb-4">Secteur Prioritaire</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Réparation de Volets à Paris</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Répar'Action Volets est votre expert de proximité dans tous les arrondissements de Paris. Nous intervenons en urgence pour tout dépannage de volet roulant bloqué ou moteur en panne.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">20</span>
                    <span className="text-sm text-muted-foreground">Arrondissements</span>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">24h</span>
                    <span className="text-sm text-muted-foreground">Délai moyen</span>
                  </div>
                </div>
                <Button size="lg" variant="accent" asChild className="rounded-full px-8">
                  <Link to="/zones-intervention/paris">
                    Voir tous les arrondissements <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Bloc Île-de-France */}
          <AnimatedSection animation="fade-up">
            <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="md:order-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={ileDeFranceImg} 
                  alt="Réparation volets Île-de-France" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="md:order-1">
                <Badge variant="serviceBlue" className="mb-4">Couverture Régionale</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Intervention en Île-de-France</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nous couvrons l'intégralité de la région parisienne. Nos techniciens circulent quotidiennement dans les départements 77, 78, 91, 92, 93, 94 et 95 pour assurer vos réparations.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">7</span>
                    <span className="text-sm text-muted-foreground">Départements</span>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">50+</span>
                    <span className="text-sm text-muted-foreground">Villes desservies</span>
                  </div>
                </div>
                <Button size="lg" variant="accent" asChild className="rounded-full px-8">
                  <Link to="/zones-intervention/ile-de-france">
                    Découvrir les départements <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services Disponibles Partout</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Bénéficiez de la même qualité d'expertise Répar'Action Volets, où que vous soyez en France.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPrincipaux.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="border-border hover:border-accent/50 transition-colors h-full">
                  <CardContent className="pt-6">
                    <service.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={service.link}>En savoir plus <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Autres Régions - Grille Simple */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Autres Régions de France</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nous intervenons également dans les grandes métropoles nationales.</p>
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
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
              <p className="text-muted-foreground">Tout ce qu'il faut savoir sur nos zones d'intervention et nos services.</p>
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

      {/* Quote Form Section */}
      <section id="devis" className="py-20 bg-background">
        <QuoteFormSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <Truck className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un problème de volet roulant ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Nos techniciens interviennent rapidement chez vous, partout en France. Devis gratuit et intervention garantie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
              <Link to="#devis">Demander mon devis gratuit</Link>
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
