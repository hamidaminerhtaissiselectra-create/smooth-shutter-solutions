import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshCcw, CheckCircle2, ArrowRight, Phone, Shield, ChevronRight, Thermometer, Volume2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgInstallation from "@/assets/service-installation.jpg";

const avantages = [
  { icon: Thermometer, title: "Isolation thermique renforcée", desc: "Les volets roulants modernes en aluminium offrent une isolation thermique jusqu'à 25% supérieure aux anciens modèles, réduisant significativement vos factures de chauffage et de climatisation.", color: "border-service-blue/20", iconColor: "bg-service-blue/10 text-service-blue" },
  { icon: Volume2, title: "Isolation phonique optimale", desc: "Le double paroi en aluminium avec mousse polyuréthane injectée absorbe les bruits extérieurs. Idéal pour les habitations situées en zone urbaine ou à proximité d'axes routiers.", color: "border-service-violet/20", iconColor: "bg-service-violet/10 text-service-violet" },
  { icon: Shield, title: "Sécurité anti-effraction", desc: "Les volets roulants neufs intègrent des systèmes anti-relevage et des verrous automatiques qui renforcent considérablement la sécurité de votre domicile contre les tentatives d'intrusion.", color: "border-service-rose/20", iconColor: "bg-service-rose/10 text-service-rose" },
  { icon: Sun, title: "Gestion de la luminosité", desc: "Contrôlez précisément la lumière dans chaque pièce grâce à des lames orientables ou un réglage fin de la position du volet. Créez l'ambiance idéale à tout moment.", color: "border-service-orange/20", iconColor: "bg-service-orange/10 text-service-orange" },
];

const types = [
  { title: "Volets roulants en aluminium", desc: "Le choix le plus populaire. L'aluminium offre le meilleur rapport poids/résistance, une excellente isolation thermique grâce à la mousse polyuréthane injectée, et une durabilité exceptionnelle.", points: ["Léger et résistant", "Isolation thermique et phonique", "200+ coloris disponibles", "Durée de vie 20+ ans"], color: "border-service-blue/20", badge: "Populaire", badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20" },
  { title: "Volets roulants en PVC", desc: "Solution économique et performante, les volets en PVC offrent un bon niveau d'isolation et une grande facilité d'entretien. Ils sont particulièrement adaptés aux fenêtres de taille standard.", points: ["Prix accessible", "Entretien minimal", "Bonne isolation", "Résistance aux UV"], color: "border-service-emerald/20", badge: "Économique", badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20" },
  { title: "Motorisation de rideaux métalliques", desc: "Installation et motorisation de rideaux métalliques pour commerces et garages. Solutions robustes avec commande radio ou filaire, intégration domotique possible.", points: ["Commande radio ou filaire", "Robuste et sécurisé", "Compatible domotique", "Entretien simplifié"], color: "border-service-orange/20", badge: "Pro", badgeColor: "bg-service-orange/10 text-service-orange border-service-orange/20" },
];

const InstallationRemplacementPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Installation & Remplacement Volets Roulants | Paris & Île-de-France | Répar'Action Volets";

    // Schema.org Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Installation et Remplacement de Volets Roulants",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Répar'Action Volets",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "62 Rue Emile Zola",
          "addressLocality": "Fontenay-Trésigny",
          "postalCode": "77610",
          "addressCountry": "FR"
        },
        "telephone": "+33603205967",
        "url": "https://reparaction-volets.fr"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "description": "Installation et remplacement de volets roulants sur-mesure à Paris et en Île-de-France. Aluminium, PVC. Devis gratuit, garantie 3 ans pièces et main d'œuvre, artisans RGE. Répar'Action Volets.",
      "url": "https://reparaction-volets.fr/services/installation-remplacement-volets",
      "hasOffer": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "150",
          "maxPrice": "800"
        },
        "availability": "https://schema.org/InStock"
      }
    };

    // Schema.org BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://reparaction-volets.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Installation & Remplacement de Volets",
          "item": "https://reparaction-volets.fr/services/installation-remplacement-volets"
        }
      ]
    };

    const scriptService = document.createElement('script');
    scriptService.type = 'application/ld+json';
    scriptService.innerHTML = JSON.stringify(serviceSchema);
    document.head.appendChild(scriptService);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    return () => {
      document.head.removeChild(scriptService);
      document.head.removeChild(scriptBreadcrumb);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgInstallation} alt="Installation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Installation & Remplacement de Volets</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-service-rose/20 text-primary-foreground text-sm font-semibold border border-service-rose/30 mb-6 backdrop-blur-sm">
              <RefreshCcw className="h-3.5 w-3.5" /> Fabrication sur-mesure
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-primary-foreground">
              Installation & Remplacement de Volets Roulants - Paris & France Entière
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Transformez votre habitat avec des volets roulants neufs fabriqués sur-mesure. Aluminium ou PVC — nous vous accompagnons du choix du matériau à la pose professionnelle, avec garantie 3 ans pièces et main d'œuvre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit Personnalisé <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi remplacer */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi Installer ou Remplacer Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les volets roulants jouent un rôle essentiel dans le <strong className="text-foreground">confort, la sécurité et la performance énergétique</strong> de votre habitation. Qu'il s'agisse d'une construction neuve ou d'une rénovation, l'installation de volets roulants modernes est un investissement qui se rentabilise rapidement grâce aux économies d'énergie réalisées.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si vos volets actuels sont vétustes, difficiles à manœuvrer ou mal isolés, leur remplacement vous permettra de bénéficier des dernières technologies en matière d'isolation, de motorisation et de sécurité. De plus, vous pourrez profiter d'aides financières comme <strong className="text-foreground">MaPrimeRénov'</strong> et le <strong className="text-foreground">crédit d'impôt</strong> grâce à notre certification RGE.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {avantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${a.color} card-shadow hover:card-shadow-hover transition-all`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${a.iconColor} shadow-lg border border-white/10`}>
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de volets */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-emerald/10 text-service-emerald text-sm font-semibold border border-service-emerald/20 mb-4">Matériaux</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Quel Matériau Choisir pour Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground">Chaque matériau a ses avantages. Nous vous conseillons la solution la mieux adaptée à votre habitat et à votre budget.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {types.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${t.color} card-shadow hover:card-shadow-hover transition-all`}>
                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${t.badgeColor}`}>{t.badge}</span>
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-cyan/10 text-service-cyan text-sm font-semibold border border-service-cyan/20 mb-4">Financement</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Aides Financières et Subventions Disponibles</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En tant qu'artisan certifié <strong className="text-foreground">RGE (Reconnu Garant de l'Environnement)</strong>, nos installations vous donnent accès à plusieurs aides financières pour réduire le coût de votre projet :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "MaPrimeRénov'", desc: "Jusqu'à 25€/m² pour l'installation de volets isolants, sous conditions de revenus.", color: "border-service-emerald/20" },
                { title: "TVA réduite à 5,5%", desc: "Pour les travaux d'amélioration énergétique dans les logements de plus de 2 ans.", color: "border-service-blue/20" },
                { title: "Éco-prêt à taux zéro", desc: "Financement jusqu'à 30 000€ sans intérêts pour vos travaux de rénovation énergétique.", color: "border-service-orange/20" },
                { title: "CEE (Certificats d'Économie d'Énergie)", desc: "Primes versées par les fournisseurs d'énergie pour vos travaux d'isolation.", color: "border-service-violet/20" },
              ].map((aide) => (
                <motion.div key={aide.title} whileHover={{ scale: 1.02 }} className={`bg-card rounded-xl p-5 border ${aide.color} card-shadow transition-all`}>
                  <h4 className="font-display font-bold text-foreground text-sm mb-2">{aide.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{aide.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Prêt à Transformer Vos Fenêtres ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Obtenez un devis gratuit et personnalisé pour l'installation ou le remplacement de vos volets roulants. Garantie 3 ans pièces et main d'œuvre.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InstallationRemplacementPage;
