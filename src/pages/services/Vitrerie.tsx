
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassWater, CheckCircle2, ArrowRight, Phone, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgVitrerie from "@/assets/service-vitrerie.jpg";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RepairShowcaseSection from "@/components/RepairShowcaseSection";
import glazierTechnicianImg from "@/assets/glazier-technician-section.jpg";

const typesVitrage = [
  { 
    title: "Double vitrage thermique", 
    desc: "La solution standard pour une isolation thermique et phonique efficace. Réduit les pertes de chaleur de 40% par rapport au simple vitrage.", 
    features: ["Isolation thermique 40%+", "Isolation phonique", "Standard construction neuve"], 
    color: "border-service-emerald/20", 
    badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20",
    image: "/images/vitrage/double-vitrage.webp",
    data: ["U-Value : 1.1 W/m²K", "Épaisseur : 4/16/4", "Gaz Argon inclus"]
  },
  { 
    title: "Vitrage anti-effraction", 
    desc: "Vitrage feuilleté de sécurité avec film PVB. Résiste aux tentatives d'intrusion et protège contre les blessures en cas de bris.", 
    features: ["Retarde les intrusions", "Sécurité anti-blessure", "Norme EN 356"], 
    color: "border-service-rose/20", 
    badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20",
    image: "/images/vitrage/feuillete.jpg",
    data: ["Classe : P2A à P5A", "Film PVB renforcé", "Anti-éclats"]
  },
  { 
    title: "Vitrage dépoli & Intimité", 
    desc: "Vitrage traité à l'acide pour un aspect translucide. Laisse passer la lumière tout en préservant totalement votre intimité.", 
    features: ["Intimité totale", "Lumière naturelle", "Design moderne"], 
    color: "border-service-violet/20", 
    badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20",
    image: "/images/vitrage/depoli.jpg",
    data: ["Finition : Dépoli acide", "Usage : SDB / Bureau", "Facile d'entretien"]
  },
  { 
    title: "Vitrage acoustique", 
    desc: "Composition asymétrique spécifique pour réduire drastiquement les nuisances sonores. Idéal pour les zones urbaines bruyantes.", 
    features: ["Réduction -35 dB", "Zones urbaines", "Composition asymétrique"], 
    color: "border-service-cyan/20", 
    badgeColor: "bg-service-cyan/10 text-service-cyan border-service-cyan/20",
    image: "/images/vitrage/phonique.jpg",
    data: ["Atténuation : 35-40 dB", "Verre asymétrique", "Confort phonique"]
  },
];

const urgences = [
  "Bris de glace suite à un cambriolage",
  "Vitre cassée par intempéries (grêle, tempête)",
  "Vitrage fissuré posant un risque de sécurité",
  "Porte vitrée brisée",
  "Baie vitrée endommagée",
  "Vitrine de commerce cassée",
];

const faqsVitrerie = [
  { q: "Combien coûte le remplacement d'un double vitrage ?", a: "Le prix dépend des dimensions et du type de vitrage. Pour un double vitrage standard (4/16/4), comptez entre 80€ et 200€/m². Le devis est gratuit et détaillé, sans surprise. Nous nous déplaçons pour prendre les mesures exactes." },
  { q: "Intervenez-vous en urgence pour un bris de glace ?", a: "Oui, nous proposons un service d'urgence vitrerie 7j/7. Nous réalisons d'abord une mise en sécurité (panneau provisoire) puis procédons au remplacement définitif dans les meilleurs délais." },
  { q: "Prenez-vous en charge les démarches d'assurance ?", a: "Oui, nous vous accompagnons dans vos démarches. Nous fournissons un devis détaillé conforme aux exigences des assurances et pouvons communiquer directement avec votre assureur pour faciliter la prise en charge." },
  { q: "Quelle est la différence entre double et triple vitrage ?", a: "Le double vitrage (2 vitres + lame d'air) offre une bonne isolation. Le triple vitrage (3 vitres + 2 lames) offre une isolation maximale mais est plus lourd et plus cher. Le triple vitrage est recommandé pour les façades Nord ou les zones très froides." },
  { q: "Peut-on remplacer un simple vitrage par du double vitrage ?", a: "Oui, c'est possible dans la plupart des cas. Cela nécessite parfois d'adapter la menuiserie (épaisseur du dormant). Nous vérifions la faisabilité lors de la visite technique gratuite." },
  { q: "Combien de temps prend un remplacement de vitrage ?", a: "Pour un vitrage standard, l'intervention prend 1 à 2 heures. Pour les grandes surfaces (baies vitrées) ou les vitrages sur-mesure, comptez 2 à 4 heures. Nous incluons le nettoyage complet après pose." },
];

const VitreriePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
   document.title = "Vitrerie & Remplacement de Vitrage | Urgence 7j/7 Paris & Île-de-France | Répar'Action Volets";
    const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Vitrerie et Remplacement de Vitrage", "provider": { "@type": "LocalBusiness", "name": "Répar'Action Volets", "address": { "@type": "PostalAddress", "streetAddress": "62 Rue Emile Zola", "addressLocality": "Fontenay-Trésigny", "postalCode": "77610", "addressCountry": "FR" }, "telephone": "+33603205967", "url": "https://reparaction-volets.fr" }, "areaServed": { "@type": "Country", "name": "France" }, "description": "Vitrier d'urgence à Paris et en Île-de-France. Remplacement de vitrage cassé, simple, double ou triple vitrage. Intervention rapide 7j/7.", "url": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage", "hasOffer": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "100", "maxPrice": "1000" }, "availability": "https://schema.org/InStock" } };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" }, { "@type": "ListItem", "position": 2, "name": "Vitrerie & Vitrage", "item": "https://reparaction-volets.fr/services/vitrerie-remplacement-vitrage" }] };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsVitrerie.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };
    const scripts = [serviceSchema, breadcrumbSchema, faqSchema].map(s => { const el = document.createElement('script'); el.type = 'application/ld+json'; el.innerHTML = JSON.stringify(s); document.head.appendChild(el); return el; });
    return () => scripts.forEach(s => document.head.removeChild(s));
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <section ref={heroRef} className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={imgVitrerie} alt="Vitrerie et remplacement de vitrage" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vitrerie & Remplacement de Vitrage</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-sm">
              <GlassWater className="h-3.5 w-3.5" /> Urgence 7j/7
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
              Vitrerie & Remplacement de Vitrage — Paris & Île-de-France
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Bris de glace, vitrage cassé ou remplacement programmé ? Nos vitriers professionnels interviennent en urgence 7 jours sur 7 pour sécuriser votre habitation. Simple, double ou triple vitrage — nous traitons toutes les situations avec réactivité et expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" asChild className="gap-2 shadow-lg shadow-accent/25 rounded-full">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="accent-outline" asChild className="gap-2 rounded-full">
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
              Un vitrage cassé constitue une <strong className="text-foreground">urgence de sécurité</strong>. Que ce soit suite à un cambriolage, un accident domestique ou des intempéries, chaque minute compte pour sécuriser votre habitation. Notre service d'urgence vitrerie est disponible <strong className="text-foreground">7 jours sur 7</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos vitriers arrivent équipés pour réaliser une <strong className="text-foreground">mise en sécurité immédiate</strong> (pose de panneau provisoire) puis procèdent au remplacement définitif du vitrage dans les plus brefs délais.
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
            <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-service-blue/20 mb-4">Catalogue</Badge>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tous les Types de Vitrage Disponibles</h2>
            <p className="text-muted-foreground">Nous posons et remplaçons tous types de vitrage, du simple au triple, en passant par les vitrages spéciaux.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {typesVitrage.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-card rounded-2xl border ${v.color} overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className={`absolute top-4 right-4 ${v.badgeColor} border-none`}>{v.title.split(" ").pop()}</Badge>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-1">{v.desc}</p>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {v.data.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-foreground/90 bg-muted/50 p-2 rounded-lg">
                        <ShieldCheck className="h-3 w-3 text-service-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-accent shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-xl" asChild>
                    <Link to="/#devis">Choisir ce vitrage</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <RepairShowcaseSection
        image={glazierTechnicianImg}
        title="Expertise en Vitrerie & Sécurité"
        description="Le remplacement d'un vitrage demande une précision millimétrée et une connaissance approfondie des matériaux. Nos vitriers experts maîtrisent la pose de tous types de verres : du double vitrage thermique haute performance au verre feuilleté de sécurité. Nous intervenons avec un équipement professionnel pour garantir une installation sûre, étanche et durable, tout en optimisant l'isolation de votre habitat."
        highlights={[
          "Remplacement de tous types de vitrages (simple, double, triple)",
          "Mise en sécurité immédiate après bris de glace",
          "Vitrages certifiés conformes aux normes d'isolation et de sécurité",
          "Accompagnement pour la prise en charge par votre assurance"
        ]}
      />
      <TestimonialsSection />

      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Questions Fréquentes — Vitrerie</h2>
          <div className="space-y-4">
            {faqsVitrerie.map((faq, i) => (
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

export default VitreriePage;
