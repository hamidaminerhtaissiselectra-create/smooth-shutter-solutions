
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshCcw, CheckCircle2, ArrowRight, Phone, Shield, ChevronRight, Thermometer, Volume2, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgInstallation from "@/assets/service-installation.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import installationTechnicianImg from "@/assets/installation-technician-section.jpg";

const avantages = [
  { icon: Thermometer, title: "Isolation thermique renforcée", desc: "Les volets roulants modernes en aluminium offrent une isolation thermique jusqu'à 25% supérieure aux anciens modèles, réduisant significativement vos factures de chauffage et de climatisation.", color: "border-service-blue/20", iconColor: "bg-service-blue/10 text-service-blue" },
  { icon: Volume2, title: "Isolation phonique optimale", desc: "Le double paroi en aluminium avec mousse polyuréthane injectée absorbe les bruits extérieurs. Idéal pour les habitations situées en zone urbaine ou à proximité d'axes routiers.", color: "border-service-violet/20", iconColor: "bg-service-violet/10 text-service-violet" },
  { icon: Shield, title: "Sécurité anti-effraction", desc: "Les volets roulants neufs intègrent des systèmes anti-relevage et des verrous automatiques qui renforcent considérablement la sécurité de votre domicile contre les tentatives d'intrusion.", color: "border-service-rose/20", iconColor: "bg-service-rose/10 text-service-rose" },
  { icon: Sun, title: "Gestion de la luminosité", desc: "Contrôlez précisément la lumière dans chaque pièce grâce à des lames orientables ou un réglage fin de la position du volet. Créez l'ambiance idéale à tout moment.", color: "border-service-orange/20", iconColor: "bg-service-orange/10 text-service-orange" },
];

const types = [
  { 
    title: "Volets roulants en aluminium", 
    desc: "Le choix le plus populaire. L'aluminium offre le meilleur rapport poids/résistance, une excellente isolation thermique grâce à la mousse polyuréthane injectée, et une durabilité exceptionnelle.", 
    points: ["Léger et résistant", "Isolation thermique et phonique", "200+ coloris disponibles", "Durée de vie 20+ ans"], 
    color: "border-service-blue/20", 
    badge: "Populaire", 
    badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20",
    image: "/images/materiaux/alu.jpg",
    data: ["Isolation : R=0.25", "Résistance : Haute", "Entretien : Nul"]
  },
  { 
    title: "Volets roulants en PVC", 
    desc: "Solution économique et performante, les volets en PVC offrent un bon niveau d'isolation et une grande facilité d'entretien. Ils sont particulièrement adaptés aux fenêtres de taille standard.", 
    points: ["Prix accessible", "Entretien minimal", "Bonne isolation", "Résistance aux UV"], 
    color: "border-service-emerald/20", 
    badge: "Économique", 
    badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20",
    image: "/images/materiaux/pvc.jpg",
    data: ["Isolation : R=0.22", "Résistance : Moyenne", "Entretien : Eau savonneuse"]
  },
  { 
    title: "Volets roulants solaires", 
    desc: "Installation de volets solaires autonomes avec panneau photovoltaïque intégré. Idéaux en rénovation car ils ne nécessitent aucun raccordement électrique. Écologiques et performants.", 
    points: ["Zéro câblage", "Énergie gratuite", "Autonomie 45 jours", "Marques Somfy/Bubendorff"], 
    color: "border-service-orange/20", 
    badge: "Éco-Responsable", 
    badgeColor: "bg-service-orange/10 text-service-orange border-service-orange/20",
    image: "/images/materiaux/solaire.jpg",
    data: ["Installation : 1h", "Batterie : 10 ans", "Économie : 100% élec"]
  },
];

const faqsInstallation = [
  { q: "Quel est le prix moyen d'une installation de volet roulant neuf ?", a: "Le prix dépend du type (manuel, électrique, solaire), des dimensions et du matériau (aluminium, PVC). En moyenne, comptez entre 300€ et 800€ par volet installé. Nous fournissons un devis gratuit et détaillé après visite technique." },
  { q: "Combien de temps dure l'installation d'un volet roulant ?", a: "L'installation d'un volet roulant prend en moyenne 2 à 4 heures selon la configuration (neuf, rénovation, intégré au coffre). Pour un remplacement à l'identique, c'est souvent plus rapide (1h30 à 2h)." },
  { q: "Faut-il un permis ou une autorisation pour installer des volets roulants ?", a: "En copropriété, l'accord du syndic peut être nécessaire. Pour les maisons individuelles, aucune autorisation n'est requise sauf si le bâtiment est classé. Nous vous conseillons sur les démarches si besoin." },
  { q: "Aluminium ou PVC, quel matériau choisir ?", a: "L'aluminium est plus résistant, plus durable (20+ ans) et offre un meilleur rapport isolation/poids. Le PVC est plus économique et convient aux dimensions standard. Pour les grandes baies vitrées, l'aluminium est recommandé." },
  { q: "Peut-on bénéficier d'aides financières pour l'installation ?", a: "Oui ! En tant qu'artisan RGE, nos installations vous donnent accès à MaPrimeRénov', la TVA à 5,5%, l'éco-prêt à taux zéro et les CEE. Le montant dépend de vos revenus et du type de volet installé." },
  { q: "Installez-vous des volets roulants solaires ?", a: "Oui, nous installons des volets solaires autonomes (panneau photovoltaïque intégré). Idéaux en rénovation car ils ne nécessitent aucun raccordement électrique. Marques : Somfy, Bubendorff." },
];

const InstallationRemplacementPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Installation & Remplacement Volets Roulants | Paris & Île-de-France | Répar'Action Volets";
    const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Installation et Remplacement de Volets Roulants", "provider": { "@type": "LocalBusiness", "name": "Répar'Action Volets", "address": { "@type": "PostalAddress", "streetAddress": "62 Rue Emile Zola", "addressLocality": "Fontenay-Trésigny", "postalCode": "77610", "addressCountry": "FR" }, "telephone": "+33603205967", "url": "https://reparaction-volets.fr" }, "areaServed": { "@type": "Country", "name": "France" }, "description": "Installation et remplacement de volets roulants sur-mesure à Paris et en Île-de-France. Aluminium, PVC. Devis gratuit, garantie 3 ans pièces et main d'œuvre, artisans RGE.", "url": "https://reparaction-volets.fr/services/installation-remplacement-volets", "hasOffer": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "150", "maxPrice": "800" }, "availability": "https://schema.org/InStock" } };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Installation & Remplacement", "item": "https://reparaction-volets.fr/services/installation-remplacement-volets" }] };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsInstallation.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };
    const scripts = [serviceSchema, breadcrumbSchema, faqSchema].map(s => { const el = document.createElement('script'); el.type = 'application/ld+json'; el.innerHTML = JSON.stringify(s); document.head.appendChild(el); return el; });
    return () => scripts.forEach(s => document.head.removeChild(s));
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgInstallation} alt="Installation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Installation & Remplacement de Volets</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <RefreshCcw className="h-3.5 w-3.5" /> Fabrication sur-mesure
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Installation & Remplacement de Volets Roulants — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Transformez votre habitat avec des volets roulants neufs fabriqués sur-mesure. Aluminium ou PVC — nous vous accompagnons du choix du matériau à la pose professionnelle, avec garantie 3 ans pièces et main d'œuvre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit Personnalisé <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
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
            <Badge variant="serviceEmerald" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-service-emerald/20 mb-4">Matériaux</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Quel Matériau Choisir pour Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground">Chaque matériau a ses avantages. Nous vous conseillons la solution la mieux adaptée à votre habitat et à votre budget.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {types.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${t.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 ${t.badgeColor} border-none`}>{t.badge}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {t.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <Zap className="h-3.5 w-3.5 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-service-emerald shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Choisir ce matériau</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <RepairShowcaseSection
        image={installationTechnicianImg}
        title="Installation Professionnelle & Savoir-Faire"
        description="Nos techniciens certifiés RGE réalisent vos installations avec précision et professionnalisme. Chaque volet roulant est installé selon les normes de sécurité les plus strictes, avec un respect du délai et une finition impeccable. Nous prenons soin de votre domicile et laissons les lieux propres après intervention. Que ce soit une installation complète, un remplacement ou une motorisation, nos experts s'adaptent à vos besoins spécifiques."
        highlights={[
          "Installation sur-mesure adaptée à votre configuration",
          "Accès aux aides financières (MaPrimeRénov', TVA réduite, CEE)",
          "Garantie 3 ans pièces et main d'œuvre",
          "Nettoyage et finition soignée après travaux"
        ]}
      />
      <TestimonialsSection />

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Questions Fréquentes — Installation & Remplacement</h2>
          <div className="space-y-4">
            {faqsInstallation.map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-border card-shadow group">
                <summary className="p-5 cursor-pointer font-display font-semibold text-foreground hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <QuoteFormSection />
      <Footer />
    </main>
  );
};

export default InstallationRemplacementPage;
