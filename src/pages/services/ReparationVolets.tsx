
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, ArrowRight, Phone, Shield, Clock, ChevronRight, Star, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgReparation from "@/assets/service-reparation.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import repairTechnicianImg from "@/assets/repair-technician-section.jpg";

const pannesCourantes = [
  { 
    title: "Volet roulant bloqué", 
    desc: "Votre volet ne monte plus ou ne descend plus ? Le problème peut venir d'une lame cassée, d'un axe d'enroulement tordu ou d'un verrou bloqué.", 
    urgence: true, 
    color: "border-service-rose/20",
    image: "/images/pannes/volet-bloque.jpg",
    data: ["Diagnostic en 15 min", "Pièces d'origine", "Réparation immédiate"]
  },
  { 
    title: "Sangle ou manivelle cassée", 
    desc: "La sangle est effilochée ou la manivelle ne tourne plus ? Remplacement rapide par un mécanisme neuf, identique ou amélioré.", 
    urgence: false, 
    color: "border-service-blue/20",
    image: "/images/pannes/sangle-cassee.jpg",
    data: ["Sangles haute résistance", "Manivelles renforcées", "Pose incluse"]
  },
  { 
    title: "Moteur électrique HS", 
    desc: "Le moteur ne répond plus, fait un bruit anormal ou surchauffe ? Diagnostic du condensateur, du câblage et du moteur.", 
    urgence: false, 
    color: "border-service-orange/20",
    image: "/images/pannes/moteur-hs.jpg",
    data: ["Moteurs Somfy/Bubendorff", "Garantie 5 ans moteur", "Réglage fins de course"]
  },
  { 
    title: "Lames abîmées ou tordues", 
    desc: "Lames fissurées, déformées ou arrachées par le vent ? Remplacement à l'identique sans démonter tout le volet.", 
    urgence: false, 
    color: "border-service-emerald/20",
    image: "/images/pannes/lames-abimees.jpg",
    data: ["Lames PVC ou Alu", "Coloris sur mesure", "Isolation renforcée"]
  },
  { 
    title: "Tablier sorti des rails", 
    desc: "Le tablier s'est décalé et ne glisse plus correctement dans les coulisses ? Remise en place et ajustement.", 
    urgence: true, 
    color: "border-service-violet/20",
    image: "/images/pannes/tablier-sorti.jpg",
    data: ["Remise en axe", "Nettoyage coulisses", "Graissage silicone"]
  },
  { 
    title: "Télécommande ou récepteur HS", 
    desc: "Votre volet électrique ne répond plus à la télécommande ? Reprogrammation, changement de pile ou remplacement du récepteur.", 
    urgence: false, 
    color: "border-service-cyan/20",
    image: "/images/pannes/telecommande-hs.jpg",
    data: ["Centralisation possible", "Émetteurs radio", "Domotique compatible"]
  },
];

const faqsReparation = [
  { q: "Combien coûte la réparation d'un volet roulant bloqué ?", a: "Le coût dépend du type de panne : remplacement de sangle (60-90€), changement de moteur (180-350€), remplacement de lames (15-30€/lame). Le diagnostic est gratuit et le devis est communiqué avant toute intervention." },
  { q: "Réparez-vous les volets roulants de toutes les marques ?", a: "Oui, nous intervenons sur toutes les marques : Somfy, Bubendorff, Profalux, Franciaflex, Lakal, SIMU, Nice, Becker, Came, Zurflüh-Feller et bien d'autres. Notre stock couvre les pièces les plus courantes." },
  { q: "Combien de temps dure une réparation de volet roulant ?", a: "La plupart des réparations sont réalisées en 1 à 2 heures. Les cas complexes (changement de moteur, axe d'enroulement) peuvent prendre 2 à 3 heures. 95% des pannes sont résolues au premier passage." },
  { q: "Mon volet roulant fait du bruit, est-ce grave ?", a: "Un bruit anormal peut indiquer un problème de lames abîmées, de coulisses encrassées ou de moteur en fin de vie. Il est conseillé de faire intervenir un technicien rapidement pour éviter une panne totale." },
  { q: "Peut-on réparer un volet roulant partiellement, sans tout remplacer ?", a: "Absolument ! Nous privilégions toujours la réparation ciblée : remplacement d'une lame, d'un axe, d'une sangle ou d'un condensateur, sans toucher au reste du volet. C'est plus économique et plus rapide." },
  { q: "Quelle garantie sur la réparation de volet roulant ?", a: "Toutes nos réparations sont couvertes par une garantie 3 ans pièces et main d'œuvre. Si le même problème réapparaît dans ce délai, nous revenons gratuitement." },
];

const ReparationVoletsPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Réparation de Volets Roulants | Dépannage Express Paris & Île-de-France | Répar'Action Volets";
    const serviceSchema = {
      "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Réparation de Volets Roulants",
      "provider": { "@type": "LocalBusiness", "name": "Répar'Action Volets", "address": { "@type": "PostalAddress", "streetAddress": "62 Rue Emile Zola", "addressLocality": "Fontenay-Trésigny", "postalCode": "77610", "addressCountry": "FR" }, "telephone": "+33603205967", "url": "https://reparaction-volets.fr" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Expert en réparation de volets roulants à Paris et en Île-de-France. Intervention rapide sous 48h pour volets bloqués, moteurs HS, sangles cassées. Diagnostic gratuit, devis transparent, garantie 3 ans pièces et main d'œuvre.",
      "url": "https://reparaction-volets.fr/services/reparation-volets-roulants",
      "hasOffer": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "80", "maxPrice": "250" }, "availability": "https://schema.org/InStock" }
    };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Réparation de Volets Roulants", "item": "https://reparaction-volets.fr/services/reparation-volets-roulants" }] };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsReparation.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

    const scripts = [serviceSchema, breadcrumbSchema, faqSchema].map(s => { const el = document.createElement('script'); el.type = 'application/ld+json'; el.innerHTML = JSON.stringify(s); document.head.appendChild(el); return el; });
    return () => scripts.forEach(s => document.head.removeChild(s));
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgReparation} alt="Réparation de volets roulants" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Réparation de Volets Roulants</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <Wrench className="h-3.5 w-3.5" /> Service le + demandé
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Réparation de Volets Roulants à Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Votre volet roulant est bloqué, fait du bruit ou ne répond plus ? Nos techniciens certifiés interviennent rapidement sur tous types de volets roulants — manuels, électriques et solaires — pour un dépannage efficace et garanti. Diagnostic gratuit, devis transparent, intervention sous 48h.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, text: "Garantie 3 ans", color: "bg-service-emerald/20 border-service-emerald/30 text-primary-foreground" },
                { icon: Clock, text: "Intervention sous 48h", color: "bg-service-orange/20 border-service-orange/30 text-primary-foreground" },
                { icon: Star, text: "95% résolus au 1er passage", color: "bg-service-blue/20 border-service-blue/30 text-primary-foreground" },
              ].map((b) => (
                <Badge key={b.text} variant="default" className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium backdrop-blur-sm ${b.color}`}>
                  <b.icon className="h-4 w-4" />
                  <span>{b.text}</span>
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi faire réparer son volet roulant rapidement ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un volet roulant en panne n'est pas qu'un simple désagrément. Il compromet directement la <strong className="text-foreground">sécurité de votre domicile</strong>, votre <strong className="text-foreground">isolation thermique</strong> et <strong className="text-foreground">phonique</strong>, ainsi que votre confort quotidien. En hiver, un volet bloqué en position ouverte peut entraîner une perte de chaleur significative et une augmentation de votre facture énergétique.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chez <strong className="text-foreground">Répar'Action Volets</strong>, nous proposons un service de réparation rapide avec intervention sous 48 heures à Paris et en Île-de-France. Nos techniciens sont équipés pour traiter la majorité des pannes en une seule visite, avec les pièces de rechange nécessaires directement dans leur véhicule.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Que votre volet soit en <strong className="text-foreground">aluminium ou PVC</strong>, qu'il soit <strong className="text-foreground">manuel (sangle ou manivelle), électrique (filaire ou radio) ou solaire</strong>, nous avons l'expertise et les pièces pour le remettre en état de marche.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Garantie 3 ans", desc: "Pièces et main d'œuvre", color: "bg-service-emerald/10 text-service-emerald", border: "border-service-emerald/20" },
                { icon: Clock, label: "Intervention sous 48h", desc: "Paris & Île-de-France", color: "bg-service-orange/10 text-service-orange", border: "border-service-orange/20" },
                { icon: Star, label: "95% résolus au 1er passage", desc: "Pièces en stock", color: "bg-service-blue/10 text-service-blue", border: "border-service-blue/20" },
              ].map((item) => (
                <motion.div key={item.label} whileHover={{ y: -4 }} className={`bg-card rounded-xl p-4 border ${item.border} card-shadow text-center transition-all`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${item.color} shadow-lg border border-white/10`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display font-bold text-foreground text-sm mb-1">{item.label}</div>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pannes courantes */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="serviceRose" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">Diagnostics</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Pannes les Plus Courantes</h2>
            <p className="text-muted-foreground">Voici les problèmes que nous traitons le plus fréquemment. Nos techniciens arrivent équipés pour les résoudre en une seule visite.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pannesCourantes.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${p.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {p.urgence && (
                    <Badge className="absolute top-4 right-4 bg-service-rose text-white border-none gap-1 animate-pulse">
                      <AlertTriangle className="h-3 w-3" /> Urgence
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <div className="space-y-2 mb-6">
                    {p.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-service-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Réparer mon volet</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <RepairShowcaseSection
        image={repairTechnicianImg}
        title="Expertise Technique & Savoir-Faire"
        description="Nos techniciens certifiés disposent de plus de 10 ans d'expérience dans la réparation de volets roulants. Ils interviennent avec professionnalisme et efficacité, diagnostiquant rapidement le problème et le résolvant en une seule visite dans 95% des cas. Chaque intervention est réalisée avec des pièces de qualité et un respect des normes de sécurité."
        highlights={[
          "Diagnostic gratuit et sans engagement",
          "Pièces de rechange en stock dans le véhicule",
          "Intervention rapide : sous 48 heures",
          "Garantie 3 ans pièces et main d'œuvre"
        ]}
      />
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Questions Fréquentes — Réparation de Volets</h2>
          <div className="space-y-4">
            {faqsReparation.map((faq, i) => (
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

export default ReparationVoletsPage;
