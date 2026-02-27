import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import RegionHeroParallax from "@/components/region/RegionHeroParallax";
import { getRegionBySlug } from "@/data/regionsData";
import { getCitiesByRegion } from "@/data/citiesData";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Settings,
  Zap,
  Home,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";


const RegionPage = () => {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const { phoneNumber } = usePhoneCall();


  if (!regionSlug) {
    return <Navigate to="/zones-intervention" replace />;
  }

  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return <Navigate to="/zones-intervention" replace />;
  }

  // Récupérer les villes de la région qui ont une page dédiée
  getCitiesByRegion(region.name);

  useSEO({
    title: `Réparation Volets Roulants ${region.name} | Installation & Dépannage | Répar'Action Volets`,
    description: `Expert en volets roulants en ${region.name}. Réparation, installation et motorisation toutes marques. Intervention rapide dans les départements : ${region.departments.map(d => d.code).join(", ")}.`,
    keywords: `réparation volets ${region.name}, installation volets ${region.name}, motorisation volets ${region.name}, Répar'Action Volets ${region.name}`,
    canonicalUrl: `https://reparaction-volets.fr/zones-intervention/${region.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: region.name, url: `/zones-intervention/${region.slug}` },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Réparation & Dépannage",
      description: `Intervention rapide sur volets bloqués ou cassés en ${region.name}. Diagnostic gratuit et réparation immédiate.`,
      link: "/services/reparation-volets-roulants"
    },
    {
      icon: Settings,
      title: "Installation & Remplacement",
      description: `Pose de volets roulants neufs sur-mesure en ${region.name}. Solutions aluminium ou PVC haute qualité.`,
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Zap,
      title: "Motorisation",
      description: `Modernisez vos volets manuels en ${region.name}. Installation de moteurs Somfy, Bubendorff et solutions connectées.`,
      link: "/services/motorisation-domotique"
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Centralisez le contrôle de vos volets en ${region.name}. Pilotage à distance via smartphone et scénarios intelligents.`,
      link: "/services/motorisation-domotique"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Renforcée",
      description: `Installation de verrous de sécurité et volets anti-effraction en ${region.name} pour protéger votre habitat.`,
      link: "/services/installation-remplacement-volets"
    },
    {
      icon: Truck,
      title: "Dépannage Express",
      description: `Service d'urgence disponible en ${region.name} pour les pannes critiques. Intervention sous 24h en Île-de-France.`,
      link: "/services/depannage-express"
    }
  ];

  const faqItems = [
    {
      question: `Répar'Action Volets intervient-il dans toute la région ${region.name} ?`,
      answer: `Oui, nous assurons une couverture complète de la région ${region.name}. Nos techniciens interviennent dans l'ensemble des ${region.departments.length} départements : ${region.departments.map(d => d.name).join(", ")}.`
    },
    {
      question: `Quels sont les délais d'intervention en ${region.name} ?`,
      answer: `Nos délais d'intervention en ${region.name} sont généralement de 24 à 48 heures pour les urgences en Île-de-France, et de 48 à 72 heures pour les autres zones. Nous planifions les installations selon vos disponibilités.`
    },
    {
      question: `Proposez-vous des devis gratuits en ${region.name} ?`,
      answer: `Oui, tous nos devis sont gratuits et sans engagement, que ce soit pour une simple réparation ou une installation complète en ${region.name}.`
    },
    {
      question: `Quelles villes couvrez-vous en ${region.name} ?`,
      answer: `Nous intervenons dans les principales villes de ${region.name} : ${region.mainCities.join(", ")}, ainsi que dans toutes les communes des départements de la région.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section avec Parallax */}
      <RegionHeroParallax region={region} breadcrumbItems={breadcrumbItems} />

      {/* Départements - avec animations */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Départements Couverts en {region.name}</h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {region.departments.map((dept, index) => (
              <motion.span 
                key={dept.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
              >
                {dept.name} ({dept.code})
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services de Volets Roulants en {region.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Répar'Action Volets propose une gamme complète de solutions pour vos volets roulants en {region.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="hover:shadow-md transition-shadow h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Villes Stratégiques */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Villes Principales en {region.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous intervenons dans toutes les communes de la région, notamment :
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {region.mainCities.map((cityName, index) => (
              <div key={index} className="p-3 bg-card border border-border rounded-lg text-center text-sm font-medium">
                {cityName}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes - {region.name}</h2>
            </AnimatedSection>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une intervention en {region.name} ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Contactez nos experts pour un diagnostic gratuit et une intervention rapide sur vos volets roulants.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
              <Link to="/#devis">Demander un devis gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-10" asChild>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>Appeler le {phoneNumber}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegionPage;
