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

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl mt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-foreground"
            >
              Nos Zones d'Intervention : <span className="text-accent">Réparation & Installation</span> partout en France
            </motion.h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Basés à Fontenay-Trésigny, nous intervenons sur l'ensemble du territoire français pour garantir le bon fonctionnement de vos volets roulants.
            </p>
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

      {/* Autres Régions - Grille Simple */}
      <section className="py-20 bg-secondary/20">
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

      <Footer />
    </div>
  );
};

export default ZonesIntervention;
