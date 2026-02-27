import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, CheckCircle2, ArrowRight, ChevronRight, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const AboutUsPage = () => {
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
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Qui Sommes-Nous</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Qui Sommes-Nous ? Votre Expert en Volets depuis 10 ans
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Répar'Action Volets est une entreprise spécialisée dans la réparation, l'installation et la motorisation de volets roulants. Depuis plus de 10 ans, nous servons les clients à Paris et dans toute la France avec expertise et professionnalisme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Notre Expertise & Autorité</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {expertiseItems.map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border border-border card-shadow">
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

      {/* Nos Valeurs */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Nos Valeurs</h2>
            <div className="space-y-6">
              {[
                { title: "Professionnalisme", desc: "Chaque intervention est réalisée avec rigueur et respect des normes. Nos techniciens sont formés aux dernières techniques." },
                { title: "Transparence", desc: "Devis clair et détaillé avant toute intervention. Pas de frais cachés. Communication honnête sur les délais et les coûts." },
                { title: "Qualité", desc: "Nous utilisons uniquement des pièces de qualité et des matériaux durables. Garantie 3 ans pièces et main d'œuvre sur toutes nos interventions." },
                { title: "Réactivité", desc: "Disponibles 7j/7 pour les urgences. Réponse rapide à vos demandes. Intervention dans les meilleurs délais." }
              ].map((value, i) => (
                <motion.div key={value.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Nos Certifications</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border card-shadow text-center">
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

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Faites Confiance à l'Expertise</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez Répar'Action Volets pour bénéficier de 10 ans d'expertise et de professionnalisme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967">06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;