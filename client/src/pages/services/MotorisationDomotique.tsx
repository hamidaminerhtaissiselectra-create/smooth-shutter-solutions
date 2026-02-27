import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, CheckCircle2, ArrowRight, Phone, ChevronRight, Smartphone, Wifi, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgMotorisation from "@/assets/service-motorisation.jpg";

const solutions = [
  { title: "Motorisation filaire", desc: "La solution la plus fiable et économique. Le moteur est commandé par un interrupteur mural fixe.", points: ["Prix accessible", "Très fiable", "Aucune pile à changer", "Installation simple"], prix: "à partir de 200€/volet", color: "border-service-blue/20", badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20" },
  { title: "Motorisation radio (sans fil)", desc: "Le moteur est commandé par une télécommande sans fil. Plus de flexibilité, centralisation possible.", points: ["Télécommande sans fil", "Pas de câblage mural", "Centralisation possible", "Programmation horaire"], prix: "à partir de 300€/volet", color: "border-service-rose/20", badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20" },
  { title: "Motorisation solaire", desc: "Autonome et écologique, alimenté par un petit panneau photovoltaïque intégré au coffre du volet.", points: ["100% autonome", "Pas de raccordement", "Écologique", "Idéal rénovation"], prix: "à partir de 400€/volet", color: "border-service-emerald/20", badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20" },
  { title: "Motorisation connectée (domotique)", desc: "Contrôlez vos volets depuis votre smartphone. Compatible Somfy TaHoma, Google Home, Alexa, Apple HomeKit.", points: ["Contrôle smartphone", "Compatible assistants vocaux", "Scénarios automatisés", "Gestion à distance"], prix: "à partir de 450€/volet", color: "border-service-violet/20", badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20" },
];

const marques = [
  { name: "Somfy", desc: "Leader mondial de la motorisation. Gamme complète filaire, radio et connectée. Écosystème TaHoma.", color: "border-service-blue/20" },
  { name: "Bubendorff", desc: "Fabricant français. Spécialiste des solutions solaires et monoblocs. Qualité premium.", color: "border-service-emerald/20" },
  { name: "Nice", desc: "Spécialiste italien de l'automatisation. Solutions fiables et innovantes.", color: "border-service-orange/20" },
  { name: "SIMU", desc: "Fabricant français de moteurs tubulaires. Excellent rapport qualité/prix.", color: "border-service-violet/20" },
];

const MotorisationDomotiquePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Motorisation & Domotique Volets Roulants | Paris & Île-de-France | Répar'Action Volets";

    // Schema.org Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Motorisation et Domotique de Volets Roulants",
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
      "description": "Motorisation et domotique de volets roulants à Paris et en Île-de-France. Contrôle à distance, programmation, scénarios automatisés. Solutions compatibles Somfy, Google Home, Alexa. Devis gratuit. Répar'Action Volets.",
      "url": "https://reparaction-volets.fr/services/motorisation-domotique",
      "hasOffer": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "200",
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
          "name": "Motorisation & Domotique",
          "item": "https://reparaction-volets.fr/services/motorisation-domotique"
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
          <img src={imgMotorisation} alt="Motorisation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Motorisation & Domotique</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-service-violet/20 text-primary-foreground text-sm font-semibold border border-service-violet/30 mb-6 backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5" /> Maison connectée
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-primary-foreground">
              Motorisation & Domotique de Volets Roulants - Paris & France Entière
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Transformez vos volets manuels en volets motorisés et connectés. Contrôle à distance, programmation horaire, scénarios automatisés — découvrez le confort de la maison intelligente avec nos solutions compatibles Somfy, Google Home et Alexa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi Motoriser Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La motorisation de volets roulants est l'un des investissements les plus rentables pour améliorer le <strong className="text-foreground">confort de votre habitat</strong>. Fini les efforts pour monter et descendre vos volets manuellement — un simple appui sur un bouton, une commande vocale ou une programmation automatique suffit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Au-delà du confort, la motorisation apporte des avantages concrets en matière de <strong className="text-foreground">sécurité</strong> (simulation de présence pendant les vacances), d'<strong className="text-foreground">économie d'énergie</strong> (fermeture automatique au coucher du soleil) et d'<strong className="text-foreground">accessibilité</strong> pour les personnes à mobilité réduite.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Smartphone, label: "Contrôle smartphone", color: "bg-service-violet/10 text-service-violet", border: "border-service-violet/20" },
                { icon: Clock, label: "Programmation horaire", color: "bg-service-blue/10 text-service-blue", border: "border-service-blue/20" },
                { icon: Shield, label: "Simulation présence", color: "bg-service-emerald/10 text-service-emerald", border: "border-service-emerald/20" },
                { icon: Zap, label: "Économies d'énergie", color: "bg-service-orange/10 text-service-orange", border: "border-service-orange/20" },
              ].map((item) => (
                <motion.div key={item.label} whileHover={{ scale: 1.03 }} className={`bg-card rounded-xl p-4 border ${item.border} card-shadow text-center transition-all`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${item.color} shadow-lg border border-white/10`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display font-bold text-foreground text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-cyan/10 text-service-cyan text-sm font-semibold border border-service-cyan/20 mb-4">Solutions</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Solutions de Motorisation</h2>
            <p className="text-muted-foreground">Chaque solution est adaptée à votre configuration et à vos besoins. Installation en 1 à 2 heures par volet.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${s.color} card-shadow hover:card-shadow-hover transition-all`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-foreground text-lg">{s.title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ml-2 border ${s.badgeColor}`}>{s.prix}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-orange/10 text-service-orange text-sm font-semibold border border-service-orange/20 mb-4">Partenaires</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Marques que Nous Installons</h2>
              <p className="text-muted-foreground">Nous travaillons exclusivement avec les marques leaders du marché.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {marques.map((m) => (
                <motion.div key={m.name} whileHover={{ scale: 1.02 }} className={`bg-card rounded-xl p-5 border ${m.color} card-shadow transition-all`}>
                  <h4 className="font-display font-bold text-foreground mb-2">{m.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Passez à la Maison Connectée</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Motorisez vos volets roulants et profitez du confort de la domotique. Devis gratuit, installation par un technicien certifié.</p>
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

export default MotorisationDomotiquePage;
