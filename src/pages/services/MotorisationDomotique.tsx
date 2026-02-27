
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, CheckCircle2, ArrowRight, Phone, ChevronRight, Smartphone, Zap, Shield, Clock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgMotorisation from "@/assets/service-motorisation.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import StatsSection from "@/components/StatsSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import motorizationWiredImg from "@/assets/motorization-wired.jpg";
import motorizationRadioImg from "@/assets/motorization-radio.jpg";
import motorizationSmartImg from "@/assets/motorization-smart.jpg";
import motorizationTechnicianImg from "@/assets/motorization-technician-section.jpg";

const solutions = [
  { 
    title: "Motorisation filaire", 
    desc: "La solution la plus fiable et économique. Le moteur est commandé par un interrupteur mural fixe.", 
    points: ["Prix accessible", "Très fiable", "Aucune pile à changer", "Installation simple"], 
    prix: "à partir de 200€/volet", 
    color: "border-service-blue/20", 
    badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20",
    image: motorizationWiredImg,
    data: ["Type : Filaire 230V", "Couple : 6 à 50 Nm", "Garantie : 5 ans"]
  },
  { 
    title: "Motorisation radio (sans fil)", 
    desc: "Le moteur est commandé par une télécommande sans fil. Plus de flexibilité, centralisation possible.", 
    points: ["Télécommande sans fil", "Pas de câblage mural", "Centralisation possible", "Programmation horaire"], 
    prix: "à partir de 300€/volet", 
    color: "border-service-rose/20", 
    badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20",
    image: motorizationRadioImg,
    data: ["Protocole : RTS / io", "Portée : 20m (murs)", "Multi-canaux"]
  },
  { 
    title: "Motorisation connectée", 
    desc: "Contrôlez vos volets depuis votre smartphone. Compatible Somfy TaHoma, Google Home, Alexa, Apple HomeKit.", 
    points: ["Contrôle smartphone", "Compatible assistants vocaux", "Scénarios automatisés", "Gestion à distance"], 
    prix: "à partir de 450€/volet", 
    color: "border-service-violet/20", 
    badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20",
    image: motorizationSmartImg,
    data: ["App : TaHoma / Home", "Feedback : Temps réel", "Cloud sécurisé"]
  },
];

const MotorisationDomotiquePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Motorisation & Domotique Volets Roulants | Paris & Île-de-France | Répar'Action Volets";
    const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Motorisation et Domotique de Volets Roulants", "provider": { "@type": "LocalBusiness", "name": "Répar'Action Volets", "address": { "@type": "PostalAddress", "streetAddress": "62 Rue Emile Zola", "addressLocality": "Fontenay-Trésigny", "postalCode": "77610", "addressCountry": "FR" }, "telephone": "+33603205967", "url": "https://reparaction-volets.fr" }, "areaServed": { "@type": "Country", "name": "France" }, "description": "Motorisation et domotique de volets roulants à Paris et en Île-de-France. Contrôle à distance, programmation, scénarios automatisés. Solutions compatibles Somfy, Google Home, Alexa. Devis gratuit.", "url": "https://reparaction-volets.fr/services/motorisation-domotique", "hasOffer": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "200", "maxPrice": "800" }, "availability": "https://schema.org/InStock" } };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Motorisation & Domotique", "item": "https://reparaction-volets.fr/services/motorisation-domotique" }] };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [] };
    const scripts = [serviceSchema, breadcrumbSchema, faqSchema].map(s => { const el = document.createElement('script'); el.type = 'application/ld+json'; el.innerHTML = JSON.stringify(s); document.head.appendChild(el); return el; });
    return () => scripts.forEach(s => document.head.removeChild(s));
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgMotorisation} alt="Motorisation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Motorisation & Domotique</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5" /> Maison connectée
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Motorisation & Domotique de Volets Roulants — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Transformez vos volets manuels en volets motorisés et connectés. Contrôle à distance, programmation horaire, scénarios automatisés — découvrez le confort de la maison intelligente avec nos solutions compatibles Somfy, Google Home et Alexa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi motoriser */}
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
            <Badge variant="serviceCyan" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">Solutions</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Solutions de Motorisation</h2>
            <p className="text-muted-foreground">Chaque solution est adaptée à votre configuration et à vos besoins. Installation en 1 à 2 heures par volet.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${s.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 ${s.badgeColor} border-none`}>{s.prix}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {s.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <Settings className="h-3 w-3 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-service-emerald shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Motoriser mes volets</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection
        title="La Motorisation en Chiffres"
        subtitle="Découvrez l'impact de la domotique sur votre confort quotidien et vos économies d'énergie."
        stats={[
          { value: "+40%", label: "Confort de vie", description: "Gain de temps et de confort quotidien grâce à l'automatisation." },
          { value: "-15%", label: "Facture énergie", description: "Économies réalisées grâce à la gestion intelligente de la chaleur." },
          { value: "100%", label: "Sérénité", description: "Sécurité renforcée par la simulation de présence et le contrôle à distance." }
        ]}
      />
      <ProcessSection />
      <RepairShowcaseSection
        image={motorizationTechnicianImg}
        title="Expertise en Domotique & Automatisation"
        description="Passer du manuel à l'électrique est une étape majeure pour votre habitat. Nos experts vous accompagnent dans le choix de la motorisation la plus adaptée à vos volets existants. Nous maîtrisons les protocoles les plus avancés (RTS, io-homecontrol) pour vous offrir une installation évolutive, fiable et parfaitement intégrée à votre écosystème domotique."
        highlights={[
          "Motorisation de volets existants sans tout remplacer",
          "Compatibilité totale avec Somfy, Google Home et Alexa",
          "Installation propre sans dégradation des murs",
          "Paramétrage complet de vos scénarios personnalisés"
        ]}
      />
      <TestimonialsSection />
      <QuoteFormSection />
      <Footer />
    </main>
  );
};

export default MotorisationDomotiquePage;
