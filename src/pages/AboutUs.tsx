import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, CheckCircle2, ArrowRight, ChevronRight, Trophy, Zap, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteFormSection from "@/components/QuoteFormSection";
import aboutTeamImg from "@/assets/about-team.jpg";
import aboutExpertiseImg from "@/assets/about-expertise.jpg";

const expertiseItems = [
  { icon: Trophy, title: "10+ ans d'expérience", desc: "Depuis plus de 10 ans, nous intervenons sur des milliers de volets roulants. Notre expérience nous permet de diagnostiquer et résoudre rapidement tout type de panne.", color: "bg-service-blue", iconShadow: "shadow-[0_4px_14px_hsl(213,72%,50%,0.35)]" },
  { icon: Award, title: "Certifications professionnelles", desc: "Nos techniciens sont certifiés RGE (Reconnu Garant de l'Environnement) et Qualibat. Nous respectons les normes les plus strictes du secteur.", color: "bg-service-emerald", iconShadow: "shadow-[0_4px_14px_hsl(160,70%,40%,0.35)]" },
  { icon: Zap, title: "Intervention rapide", desc: "Nous intervenons sous 48 heures en France. En cas d'urgence (bris de glace, volet bloqué), nous nous déplaçons le jour même.", color: "bg-service-orange", iconShadow: "shadow-[0_4px_14px_hsl(25,90%,55%,0.35)]" },
  { icon: Users, title: "500+ clients satisfaits", desc: "Nos clients nous font confiance. Note moyenne : 4.9/5 étoiles. Garantie 3 ans pièces et main d'œuvre sur toutes nos interventions.", color: "bg-service-violet", iconShadow: "shadow-[0_4px_14px_hsl(260,65%,55%,0.35)]" },
];

const certifications = [
  { name: "RGE", desc: "Reconnu Garant de l'Environnement", color: "bg-service-emerald", iconShadow: "shadow-[0_4px_14px_hsl(160,70%,40%,0.35)]" },
  { name: "Qualibat", desc: "Certification qualité bâtiment", color: "bg-service-blue", iconShadow: "shadow-[0_4px_14px_hsl(213,72%,50%,0.35)]" },
  { name: "Garantie 3 ans", desc: "Pièces et main d'œuvre", color: "bg-service-orange", iconShadow: "shadow-[0_4px_14px_hsl(25,90%,55%,0.35)]" },
  { name: "Assurance RC", desc: "Responsabilité civile complète", color: "bg-service-violet", iconShadow: "shadow-[0_4px_14px_hsl(260,65%,55%,0.35)]" },
];

const stats = [
  { number: "10+", label: "Années d'expérience", icon: Trophy },
  { number: "5000+", label: "Interventions réalisées", icon: Zap },
  { number: "500+", label: "Clients satisfaits", icon: Users },
  { number: "4.9/5", label: "Note moyenne", icon: Award },
];

const AboutUsPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Qui Sommes-Nous ? | Répar'Action Volets - Experts depuis 10 ans";
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Répar'Action Volets",
      "url": "https://reparaction-volets.fr",
      "logo": "https://reparaction-volets.fr/logo.png",
      "description": "Expert en réparation, installation et motorisation de volets roulants depuis plus de 10 ans. Présent à Paris et dans toute la France.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "62 Rue Emile Zola",
        "addressLocality": "Fontenay-Trésigny",
        "postalCode": "77610",
        "addressCountry": "FR"
      },
      "telephone": "+33603205967",
      "email": "contact@reparaction-volets.fr",
      "areaServed": { "@type": "Country", "name": "France" },
      "sameAs": [
        "https://www.facebook.com/reparactionvolets",
        "https://www.google.com/maps/place/Répar'Action+Volets"
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500", "bestRating": "5" }
    };

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.innerHTML = JSON.stringify(organizationSchema);
    document.head.appendChild(scriptOrg);

    return () => { document.head.removeChild(scriptOrg); };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={aboutTeamImg} alt="Notre équipe d'experts" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Qui Sommes-Nous</span>
            </div>
            <Badge className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm bg-service-blue">
              <Trophy className="h-3.5 w-3.5" /> Experts depuis 10 ans
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Qui Sommes-Nous ? Votre Expert en Volets depuis 10 ans
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Répar'Action Volets est une entreprise spécialisée dans la réparation, l'installation et la motorisation de volets roulants. Depuis plus de 10 ans, nous servons les clients à Paris et dans toute la France avec expertise et professionnalisme.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <a href="tel:0603205967">06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Notre Expertise - Image à gauche, texte à droite */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden card-shadow">
              <img src={aboutExpertiseImg} alt="Notre expertise et savoir-faire" className="w-full h-auto object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Notre Expertise & Savoir-Faire</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Avec plus de 10 ans d'expérience, Répar'Action Volets s'est établi comme le leader incontournable de la réparation et de l'installation de volets roulants à Paris et en Île-de-France. Notre équipe de techniciens certifiés maîtrise tous les types de volets : manuels, électriques, solaires, ainsi que les dernières technologies domotiques.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous intervenons sur toutes les marques reconnues (Somfy, Bubendorff, Profalux, Franciaflex, etc.) et disposons d'un stock complet de pièces de rechange pour assurer une intervention rapide et efficace. Notre diagnostic gratuit et notre devis transparent vous permettent de prendre la meilleure décision.
              </p>
              <ul className="space-y-3">
                {[
                  "Diagnostic gratuit et sans engagement",
                  "Intervention sous 48 heures",
                  "Garantie 3 ans pièces et main d'œuvre",
                  "Pièces de qualité en stock permanent"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistiques Section */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Chiffres Clés</h2>
            <p className="text-muted-foreground">Une décennie d'engagement envers l'excellence et la satisfaction client</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-8 border border-border card-shadow text-center">
                <div className="w-12 h-12 rounded-2xl bg-service-blue/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-service-blue" />
                </div>
                <div className="font-display text-4xl font-extrabold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Nos Valeurs - Texte à gauche, image à droite */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nos Valeurs Fondamentales</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chez Répar'Action Volets, nos valeurs guident chaque décision et chaque intervention. Nous croyons que la qualité du service n'est pas négociable, et que chaque client mérite une attention particulière et un travail impeccable.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Professionnalisme", desc: "Chaque intervention est réalisée avec rigueur et respect des normes. Nos techniciens sont formés aux dernières techniques." },
                  { title: "Transparence", desc: "Devis clair et détaillé avant toute intervention. Pas de frais cachés. Communication honnête sur les délais et les coûts." },
                  { title: "Qualité", desc: "Nous utilisons uniquement des pièces de qualité et des matériaux durables. Garantie 3 ans pièces et main d'œuvre." },
                  { title: "Réactivité", desc: "Disponibles 7j/7 pour les urgences. Réponse rapide à vos demandes. Intervention dans les meilleurs délais." }
                ].map((value) => (
                  <motion.div key={value.title} whileHover={{ x: 4 }} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden card-shadow">
              <img src={aboutTeamImg} alt="Nos valeurs et engagement" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Notre Expertise & Autorité</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {expertiseItems.map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} ${item.iconShadow} flex items-center justify-center border border-white/20`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Nos Certifications & Garanties</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border card-shadow text-center hover:card-shadow-hover transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${cert.color} ${cert.iconShadow} flex items-center justify-center mx-auto mb-3 border border-white/20`}>
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteFormSection />

      <Footer />
    </main>
  );
};

export default AboutUsPage;
