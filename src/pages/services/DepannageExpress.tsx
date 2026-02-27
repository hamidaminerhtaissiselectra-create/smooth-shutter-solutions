
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Phone, ChevronRight, Clock, Shield, AlertTriangle, Wrench, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgDepannage from "@/assets/service-depannage.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import emergencyTechnicianImg from "@/assets/emergency-technician-section.jpg";

const situations = [
  { 
    title: "Urgence Nocturne & Sécurité", 
    desc: "Volet bloqué en position ouverte la nuit ou suite à une panne moteur ? Nous intervenons pour sécuriser votre domicile immédiatement.", 
    urgency: "CRITIQUE", 
    color: "border-service-rose/30",
    image: "/images/depannage/nuit.jpg",
    data: ["Intervention : < 1h", "Dispo : 24h/24", "Sécurisation : Immédiate"]
  },
  { 
    title: "Tentative d'Effraction", 
    desc: "Votre volet a été forcé ou endommagé ? Nous réparons les lames, les coulisses et renforçons la sécurité de votre installation.", 
    urgency: "HAUTE", 
    color: "border-service-orange/30",
    image: "/images/depannage/effraction.jpg",
    data: ["Réparation : Lames/Axe", "Renfort : Anti-relevage", "Assurance : Devis agréé"]
  },
  { 
    title: "Dégâts Intempéries", 
    desc: "Grêle, tempête ou vent violent ? Si votre volet est sorti de ses rails ou si le tablier est abîmé, nous intervenons rapidement.", 
    urgency: "MOYENNE", 
    color: "border-service-blue/30",
    image: "/images/depannage/intemperies.jpg",
    data: ["Diagnostic : Structurel", "Pièces : Tablier/Lames", "Garantie : 2 ans"]
  },
];

const engagements = [
  { icon: Clock, title: "Intervention le jour même", desc: "Pour les urgences de sécurité, nous nous engageons à intervenir le jour même à Paris et en Île-de-France.", color: "bg-service-orange", border: "border-service-orange/20" },
  { icon: Shield, title: "Diagnostic offert", desc: "Pas de frais de déplacement, pas de frais de diagnostic. Transparence totale.", color: "bg-service-emerald", border: "border-service-emerald/20" },
  { icon: Wrench, title: "Pièces en stock", desc: "Nos véhicules sont équipés des pièces les plus courantes. 95% des pannes résolues au premier passage.", color: "bg-service-blue", border: "border-service-blue/20" },
  { icon: AlertTriangle, title: "Disponible 7j/7", desc: "Urgences traitées 7 jours sur 7, y compris les week-ends et jours fériés.", color: "bg-service-rose", border: "border-service-rose/20" },
];

const DepannageExpressPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Dépannage Express Volets Roulants | Urgence 7j/7 Paris & Île-de-France | Répar'Action Volets";
    const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Dépannage Express Volets Roulants", "provider": { "@type": "LocalBusiness", "name": "Répar'Action Volets", "address": { "@type": "PostalAddress", "streetAddress": "62 Rue Emile Zola", "addressLocality": "Fontenay-Trésigny", "postalCode": "77610", "addressCountry": "FR" }, "telephone": "+33603205967", "url": "https://reparaction-volets.fr" }, "areaServed": { "@type": "Country", "name": "France" }, "description": "Dépannage express de volets roulants à Paris et en Île-de-France. Intervention rapide 7j/7 pour volet bloqué, moteur en panne, vitre cassée. Diagnostic gratuit, pièces en stock.", "url": "https://reparaction-volets.fr/services/depannage-express", "hasOffer": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "80", "maxPrice": "300" }, "availability": "https://schema.org/InStock" } };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Dépannage Express", "item": "https://reparaction-volets.fr/services/depannage-express" }] };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [] };
    const scripts = [serviceSchema, breadcrumbSchema, faqSchema].map(s => { const el = document.createElement('script'); el.type = 'application/ld+json'; el.innerHTML = JSON.stringify(s); document.head.appendChild(el); return el; });
    return () => scripts.forEach(s => document.head.removeChild(s));
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgDepannage} alt="Dépannage express volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Dépannage Express</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" /> Intervention rapide
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Dépannage Express Volets Roulants — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Volet bloqué ? Moteur en panne ? Vitre cassée ? Notre service de dépannage express intervient dans les plus brefs délais pour rétablir la sécurité et le confort de votre habitat. Disponible 7j/7, diagnostic gratuit, pièces en stock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Appeler Maintenant</a>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="accent" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">Nos Engagements</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Engagements Dépannage Express</h2>
            <p className="text-muted-foreground">Un service d'urgence fiable, transparent et efficace — c'est la promesse Répar'Action Volets.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${e.border} card-shadow hover:card-shadow-hover text-center transition-all`}>
                <div className={`w-14 h-14 rounded-2xl ${e.color} flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/20`}>
                  <e.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2 text-sm">{e.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceRose" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">Urgences</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Situations que Nous Traitons en Urgence</h2>
            <p className="text-muted-foreground">Quelle que soit la panne, nous avons la solution pour la résoudre rapidement.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {situations.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${s.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-4 right-4 bg-service-rose text-white border-none font-bold">{s.urgency}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {s.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <ShieldAlert className="h-3 w-3 text-service-rose" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="destructive" size="sm" className="w-full rounded-xl gap-2" asChild>
                    <a href="tel:0603205967"><Phone className="h-4 w-4" /> Urgence 24h/7j</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <RepairShowcaseSection
        image={emergencyTechnicianImg}
        title="Réactivité & Professionnalisme en Urgence"
        description="Une panne de volet roulant ne peut pas attendre. Nos techniciens d'urgence sont formés pour intervenir rapidement, même en conditions difficiles ou la nuit. Avec une torche frontale, des outils spécialisés et des pièces de rechange, nous diagnostiquons et réparons votre problème sur place. Notre engagement : vous redonner sécurité et confort dans les plus brefs délais."
        highlights={[
          "Intervention dans l'heure pour les urgences de sécurité",
          "Disponibilité 24h/24, 7 jours sur 7, y compris jours fériés",
          "Pièces de rechange immédiatement disponibles",
          "Diagnostic gratuit et transparence totale sur les tarifs"
        ]}
      />
      <TestimonialsSection />
      <QuoteFormSection />
      <Footer />
    </main>
  );
};

export default DepannageExpressPage;
