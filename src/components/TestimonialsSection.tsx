import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Fontenay-Trésigny (77)",
    text: "Intervention rapide et efficace pour la réparation de mon volet roulant bloqué. Le technicien a diagnostiqué la panne en 10 minutes et tout était réglé en moins d'une heure. Travail soigné et prix raisonnable. Je recommande vivement !",
    rating: 5,
    service: "Réparation",
    badgeColor: "bg-service-blue/10 text-service-blue border-service-blue/20",
    date: "Janvier 2026",
  },
  {
    name: "Jean-Pierre D.",
    location: "Lille (59)",
    text: "Excellente prestation pour la motorisation de mes 5 volets roulants. L'équipe a travaillé proprement, installé des moteurs Somfy avec commande centralisée. Je peux tout contrôler depuis mon téléphone. Résultat impeccable, je suis ravi !",
    rating: 5,
    service: "Motorisation",
    badgeColor: "bg-service-violet/10 text-service-violet border-service-violet/20",
    date: "Décembre 2025",
  },
  {
    name: "Sophie M.",
    location: "Paris (75)",
    text: "Remplacement de double vitrage réalisé en urgence après un cambriolage. L'équipe est intervenue le jour même, très réactive et rassurante. Le nouveau vitrage anti-effraction me permet de dormir sereinement. Professionnalisme exemplaire.",
    rating: 5,
    service: "Vitrerie urgente",
    badgeColor: "bg-service-rose/10 text-service-rose border-service-rose/20",
    date: "Novembre 2025",
  },
  {
    name: "Laurent B.",
    location: "Lyon (69)",
    text: "Installation complète de volets roulants en aluminium sur toute ma maison neuve. 12 volets posés en 2 jours, finitions parfaites. L'isolement phonique et thermique a été nettement amélioré. Très satisfait du résultat final !",
    rating: 5,
    service: "Installation",
    badgeColor: "bg-service-emerald/10 text-service-emerald border-service-emerald/20",
    date: "Octobre 2025",
  },
  {
    name: "Isabelle R.",
    location: "Bordeaux (33)",
    text: "Répar'Action a remplacé 3 volets roulants vétustes par des modèles neufs motorisés. Du conseil initial à la pose, tout a été parfait. Le devis était clair et respecté. Une entreprise sérieuse que je recommande les yeux fermés.",
    rating: 5,
    service: "Remplacement",
    badgeColor: "bg-service-cyan/10 text-service-cyan border-service-cyan/20",
    date: "Septembre 2025",
  },
  {
    name: "Ahmed K.",
    location: "Marseille (13)",
    text: "Dépannage en urgence un dimanche pour un volet roulant bloqué en position ouverte. Le technicien est arrivé en moins de 2h et a résolu le problème rapidement. Très professionnel et prix correct même pour un dimanche. Merci !",
    rating: 5,
    service: "Dépannage urgent",
    badgeColor: "bg-service-orange/10 text-service-orange border-service-orange/20",
    date: "Août 2025",
  },
];

const TestimonialsSection = () => (
  <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
    
    <div className="container mx-auto px-4 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-6"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-orange/10 text-service-orange text-sm font-semibold border border-service-orange/20 mb-4">
          Plus de 500 clients nous font confiance
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Témoignages Clients - Avis et Retours d'Expérience sur la Réparation de Volets Roulants
        </h2>
        <p className="text-muted-foreground">Découvrez les témoignages de nos clients satisfaits sur la réparation, installation et motorisation de volets roulants à Paris et en France.</p>
      </motion.div>

      {/* Stats bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 mb-12"
      >
        {[
          { num: "500+", label: "Clients satisfaits", color: "text-service-blue" },
          { num: "4.9/5", label: "Note moyenne", color: "text-service-orange" },
          { num: "98%", label: "Recommandation", color: "text-service-emerald" },
          { num: "24h", label: "Délai intervention", color: "text-service-violet" },
        ].map((s) => (
          <div key={s.label} className="text-center px-6">
            <div className={`text-2xl font-display font-extrabold ${s.color}`}>{s.num}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-8 card-shadow border border-border hover:card-shadow-hover transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-6">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${t.badgeColor}`}>
                {t.service}
              </span>
              <span className="text-xs text-muted-foreground font-medium">{t.date}</span>
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-service-orange text-service-orange" />
              ))}
            </div>
            <Quote className="h-8 w-8 text-accent/10 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="border-t border-border pt-6 mt-auto">
              <div className="font-bold text-foreground text-base">{t.name}</div>
              <div className="text-xs text-muted-foreground font-medium flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-service-orange/40" />
                {t.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
