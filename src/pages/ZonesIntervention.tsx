import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Truck
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import des images locales des régions
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

  // SEO adapté pour Répar'Action Volets
  useSEO({
    title: "Zones d'Intervention France | Réparation & Installation Volets Roulants | Répar'Action Volets",
    description: "Répar'Action Volets intervient dans toute la France pour la réparation, l'installation et la motorisation de vos volets roulants. Intervention express en Île-de-France et grandes métropoles.",
    keywords: "réparation volets roulants France, installation volets roulants, motorisation volets, dépannage volets express, Répar'Action Volets zones intervention",
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
    { icon: MapPin, value: "13", label: "Régions couvertes" },
    { icon: Building2, value: "96", label: "Départements" },
    { icon: Users, value: "5000+", label: "Clients satisfaits" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention IdF" }
  ];

  // FAQ adaptée
  const faqs = [
    {
      question: "Dans quelles zones Répar'Action Volets intervient-il en priorité ?",
      answer: "Répar'Action Volets intervient en priorité en Île-de-France, notamment à Paris et dans les départements 77, 78, 91, 92, 93, 94 et 95. Ces zones bénéficient d'interventions garanties sous 24 à 48 heures. Nous couvrons également l'ensemble des grandes métropoles françaises."
    },
    {
      question: "Quels sont les délais d'intervention pour une réparation de volet ?",
      answer: "En Île-de-France : intervention sous 24h à 48h pour les urgences. Dans les grandes métropoles (Lyon, Marseille, Bordeaux, etc.) : intervention rapide sous 48h à 72h. Pour les autres zones, nous planifions l'intervention selon la disponibilité de nos techniciens locaux."
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Expertise Nationale en Volets Roulants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nos Zones d'Intervention : <span className="text-primary">Réparation & Installation</span> partout en France
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Basés en Île-de-France, nous intervenons sur l'ensemble du territoire français pour garantir le bon fonctionnement de vos volets roulants. Que ce soit pour un dépannage urgent ou une installation neuve, nos techniciens experts sont à votre service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
                asChild
              >
                <Link to="/#devis">Demander un Devis Gratuit</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href="tel:0603205967">
                  <Phone className="mr-2 w-5 h-5" />
                  06 03 20 59 67
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos Services Disponibles dans Toutes les Régions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Bénéficiez de la même qualité d'expertise Répar'Action Volets, où que vous soyez en France.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesPrincipaux.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
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

      {/* Regions Grid Section */}
      <section id="regions-grid" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Découvrez nos Interventions par Région</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Cliquez sur votre région pour découvrir nos services locaux et départements couverts.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionsData.map((region, index) => (
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
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {region.departments.length} départements
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn" asChild>
                        <Link to={`/zones-intervention/${region.slug}`}>
                          Voir les détails <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
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
      <section className="py-20 bg-primary text-primary-foreground">
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
