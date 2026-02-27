import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassWater, CheckCircle2, ArrowRight, Phone, Shield, ChevronRight, AlertTriangle, Thermometer, Volume2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgVitrerie from "@/assets/service-vitrerie.jpg";

const typesVitrage = [
  { title: "Simple vitrage", desc: "Remplacement de vitrages simples pour les bâtiments anciens ou les structures ne nécessitant pas d'isolation renforcée.", features: ["Remplacement rapide", "Prix économique", "Toutes dimensions"], color: "border-service-blue/20", badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20" },
  { title: "Double vitrage", desc: "La solution standard pour une isolation thermique et phonique efficace. Réduit les pertes de chaleur de 40%.", features: ["Isolation thermique 40%+", "Isolation phonique", "Standard construction neuve"], color: "border-service-emerald/20", badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20" },
  { title: "Triple vitrage", desc: "Le nec plus ultra de l'isolation. Recommandé pour les façades exposées au nord ou dans les régions à climat rigoureux.", features: ["Isolation maximale", "Performances BBC/RT2012", "Façades Nord"], color: "border-service-violet/20", badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20" },
  { title: "Vitrage anti-effraction", desc: "Vitrage feuilleté de sécurité avec film PVB. Résiste aux tentatives d'intrusion et protège contre les blessures.", features: ["Retarde les intrusions", "Sécurité anti-blessure", "Norme EN 356"], color: "border-service-rose/20", badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20" },
  { title: "Vitrage acoustique", desc: "Composition asymétrique pour réduire les nuisances sonores. Idéal pour les zones urbaines.", features: ["Réduction -35 dB", "Zones urbaines", "Composition asymétrique"], color: "border-service-cyan/20", badgeColor: "bg-service-cyan/10 text-service-cyan border-service-cyan/20" },
  { title: "Vitrage à contrôle solaire", desc: "Isolation renforcée avec couche à faible émissivité. Confort été/hiver.", features: ["Confort été/hiver", "Luminosité préservée", "Économies d'énergie"], color: "border-service-orange/20", badgeColor: "bg-service-orange/10 text-service-orange border-service-orange/20" },
];

const urgences = [
  "Bris de glace suite à un cambriolage",
  "Vitre cassée par intempéries (grêle, tempête)",
  "Vitrage fissuré posant un risque de sécurité",
  "Porte vitrée brisée",
  "Baie vitrée endommagée",
  "Vitrine de commerce cassée",
];

const VitreriePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Vitrerie & Remplacement de Vitrage | Urgence 7j/7 Paris & Île-de-France | Répar'Action Volets";

    // Schema.org Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Vitrerie et Remplacement de Vitrage",
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
      "description": "Vitrier d'urgence à Paris et en Île-de-France. Remplacement de vitrage cassé, simple, double ou triple vitrage. Intervention rapide 7j/7 pour sécuriser votre domicile. Devis gratuit. Contactez Répar'Action Volets.",
      "url": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage",
      "hasOffer": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "100",
          "maxPrice": "1000"
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
          "name": "Vitrerie & Remplacement de Vitrage",
          "item": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage"
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
          <img src={imgVitrerie} alt="Vitrerie et remplacement de vitrage" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vitrerie & Remplacement de Vitrage</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-service-emerald/20 text-primary-foreground text-sm font-semibold border border-service-emerald/30 mb-6 backdrop-blur-sm">
              <GlassWater className="h-3.5 w-3.5" /> Urgence 7j/7
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-primary-foreground">
              Vitrerie & Remplacement de Vitrage à Paris & France Entière - Urgence 7j/7
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Bris de glace, vitrage cassé ou remplacement programmé ? Nos vitriers professionnels interviennent en urgence 7 jours sur 7 pour sécuriser votre habitation. Simple, double ou triple vitrage — nous traitons toutes les situations avec réactivité et expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Urgence : 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgence */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Service d'Urgence Vitrerie — Intervention Rapide</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un vitrage cassé constitue une <strong className="text-foreground">urgence de sécurité</strong>. Que ce soit suite à un cambriolage, un accident domestique ou des intempéries, chaque minute compte pour sécuriser votre habitation. Notre service d'urgence vitrerie est disponible <strong className="text-foreground">7 jours sur 7</strong> pour intervenir dans les meilleurs délais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos vitriers arrivent équipés pour réaliser une <strong className="text-foreground">mise en sécurité immédiate</strong> (pose de panneau provisoire) puis procèdent au remplacement définitif du vitrage dans les plus brefs délais. Nous travaillons avec les principales compagnies d'assurance pour simplifier vos démarches.
            </p>
            <div className="bg-card rounded-xl p-6 border border-service-rose/20 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-service-rose/10 flex items-center justify-center shadow-lg border border-white/10">
                   <AlertTriangle className="h-5 w-5 text-service-rose" />
                </div>
                <h3 className="font-display font-bold text-foreground">Nous intervenons en urgence pour :</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {urgences.map((u) => (
                  <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {u}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types de vitrage */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-blue/10 text-service-blue text-sm font-semibold border border-service-blue/20 mb-4">Catalogue</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tous les Types de Vitrage Disponibles</h2>
            <p className="text-muted-foreground">Nous posons et remplaçons tous types de vitrage, du simple au triple, en passant par les vitrages spéciaux.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {typesVitrage.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${v.color} card-shadow hover:card-shadow-hover transition-all`}>
                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 ${v.badgeColor}`}>{v.title.split(" ").pop()}</span>
                <h3 className="font-display font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{v.desc}</p>
                <ul className="space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages isolation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-orange/10 text-service-orange text-sm font-semibold border border-service-orange/20 mb-4">Avantages</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Avantages d'un Vitrage Performant</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Thermometer, title: "Économies d'énergie", desc: "Jusqu'à 40% de réduction des pertes de chaleur avec un double vitrage performant.", color: "bg-service-emerald/10 text-service-emerald", border: "border-service-emerald/20" },
                { icon: Volume2, title: "Confort acoustique", desc: "Un vitrage acoustique adapté peut réduire le bruit extérieur de 35 dB.", color: "bg-service-violet/10 text-service-violet", border: "border-service-violet/20" },
                { icon: Lock, title: "Sécurité renforcée", desc: "Les vitrages feuilletés retardent considérablement les tentatives d'effraction.", color: "bg-service-rose/10 text-service-rose", border: "border-service-rose/20" },
              ].map((item) => (
                <motion.div key={item.title} whileHover={{ y: -4 }} className={`text-center bg-card rounded-xl p-6 border ${item.border} card-shadow transition-all`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${item.color} shadow-lg border border-white/10`}>
                     <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Besoin d'un Vitrier Professionnel ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Urgence ou projet planifié, nos vitriers interviennent rapidement avec du matériel de qualité. Devis gratuit et sans engagement.</p>
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

export default VitreriePage;
