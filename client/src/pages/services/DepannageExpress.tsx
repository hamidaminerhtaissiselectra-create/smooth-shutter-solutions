import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, CheckCircle2, ArrowRight, Phone, ChevronRight, Clock, Shield, AlertTriangle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgDepannage from "@/assets/service-depannage.jpg";

const situations = [
  { title: "Volet roulant bloqué en position ouverte", desc: "Votre volet ne descend plus et votre sécurité est compromise ? Nous intervenons en urgence pour débloquer votre volet.", urgence: true, color: "border-service-rose/30" },
  { title: "Volet roulant bloqué en position fermée", desc: "Impossible d'ouvrir votre volet ? Cela peut être lié à un problème de fin de course, un moteur grippé ou un axe d'enroulement cassé.", urgence: true, color: "border-service-orange/30" },
  { title: "Moteur de volet en panne soudaine", desc: "Le moteur de votre volet électrique ne répond plus du tout ? Condensateur défaillant, problème de câblage ou surchauffe.", urgence: false, color: "border-service-blue/30" },
  { title: "Vitre cassée (bris de glace)", desc: "Suite à un cambriolage, un accident ou des intempéries, votre vitre est brisée. Mise en sécurité immédiate puis remplacement.", urgence: true, color: "border-service-violet/30" },
  { title: "Volet qui fait un bruit anormal", desc: "Grincements, claquements ou vibrations inhabituelles ? Un diagnostic rapide permet de résoudre le problème.", urgence: false, color: "border-service-cyan/30" },
  { title: "Télécommande ou interrupteur HS", desc: "Votre volet ne répond plus à la commande ? Souvent un problème de télécommande, récepteur ou interrupteur.", urgence: false, color: "border-service-emerald/30" },
];

const engagements = [
  { icon: Clock, title: "Intervention le jour même", desc: "Pour les urgences de sécurité, nous nous engageons à intervenir le jour même à Paris et dans les grandes villes.", color: "bg-service-orange", border: "border-service-orange/20" },
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

    // Schema.org Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Dépannage Express Volets Roulants",
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
      "description": "Dépannage express de volets roulants à Paris et en Île-de-France. Intervention rapide 7j/7 pour volet bloqué, moteur en panne, vitre cassée. Diagnostic gratuit, pièces en stock. Contactez Répar'Action Volets pour une urgence !",
      "url": "https://reparaction-volets.fr/services/depannage-express",
      "hasOffer": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "80",
          "maxPrice": "300"
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
          "name": "Dépannage Express",
          "item": "https://reparaction-volets.fr/services/depannage-express"
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
          <img src={imgDepannage} alt="Dépannage express volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Dépannage Express</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-service-orange/20 text-primary-foreground text-sm font-semibold border border-service-orange/30 mb-6 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" /> Intervention rapide
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-primary-foreground">
              Dépannage Express Volets Roulants à Paris & France Entière - Intervention Jour Même
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Volet bloqué ? Moteur en panne ? Vitre cassée ? Notre service de dépannage express intervient dans les plus brefs délais pour rétablir la sécurité et le confort de votre habitat. Disponible 7j/7, diagnostic gratuit, pièces en stock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg shadow-accent/25 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Appeler Maintenant</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Nos Engagements</span>
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-rose/10 text-service-rose text-sm font-semibold border border-service-rose/20 mb-4">Urgences</span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Situations que Nous Traitons en Urgence</h2>
            <p className="text-muted-foreground">Quelle que soit la panne, nous avons la solution pour la résoudre rapidement.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {situations.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`bg-card rounded-xl p-6 border ${s.color} card-shadow hover:card-shadow-hover transition-all`}>
                <div className="flex items-center gap-2 mb-3">
                  {s.urgence && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-service-rose/10 text-service-rose border border-service-rose/20">URGENT</span>}
                  <h3 className="font-display font-bold text-foreground text-sm">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus urgence */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-blue/10 text-service-blue text-sm font-semibold border border-service-blue/20 mb-4">Processus</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Comment Fonctionne le Dépannage Express ?</h2>
            </div>
            <div className="space-y-6">
              {[
                { num: "1", title: "Appelez-nous", desc: "Contactez-nous au 06 03 20 59 67. Un technicien évalue votre situation par téléphone et vous donne une première estimation.", color: "bg-service-blue" },
                { num: "2", title: "Intervention rapide", desc: "Un technicien équipé se déplace chez vous dans les meilleurs délais. Intervention possible le jour même pour les urgences de sécurité.", color: "bg-service-orange" },
                { num: "3", title: "Diagnostic sur place", desc: "Le technicien identifie précisément la panne et vous communique un devis clair et détaillé avant toute intervention.", color: "bg-service-emerald" },
                { num: "4", title: "Réparation immédiate", desc: "Avec les pièces en stock dans notre véhicule, la réparation est effectuée immédiatement dans 95% des cas.", color: "bg-service-violet" },
              ].map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start">
                  <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center shrink-0 font-display font-extrabold text-lg shadow-lg`}>{step.num}</div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
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
            <h2 className="font-display text-3xl font-bold mb-4">Besoin d'un Dépannage Urgent ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">N'attendez plus — appelez-nous maintenant. Un technicien qualifié intervient dans les plus brefs délais.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <Link to="/#devis">Formulaire en ligne <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DepannageExpressPage;
