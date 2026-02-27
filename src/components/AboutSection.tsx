import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Clock, ShieldCheck, Hammer, HeartHandshake } from "lucide-react";
import CounterAnimation from "./CounterAnimation";

const points = [
  { icon: Award, text: "Plus de 10 ans d'expérience en volets roulants", color: "bg-service-blue/10 text-service-blue" },
  { icon: Clock, text: "Intervention rapide sous 24-48h — Paris & France", color: "bg-service-orange/10 text-service-orange" },
  { icon: ShieldCheck, text: "Artisan certifié RGE et Qualibat", color: "bg-service-emerald/10 text-service-emerald" },
  { icon: Hammer, text: "Garantie 3 ans pièces et main d'œuvre", color: "bg-service-violet/10 text-service-violet" },
  { icon: HeartHandshake, text: "Devis gratuit et transparent, sans engagement", color: "bg-service-cyan/10 text-service-cyan" },
  { icon: Users, text: "Service après-vente réactif et disponible 7j/7", color: "bg-service-rose/10 text-service-rose" },
];

const certifications = [
  { label: "Certification RGE", color: "bg-service-emerald/10 text-service-emerald border-service-emerald/20" },
  { label: "Qualibat", color: "bg-service-blue/10 text-service-blue border-service-blue/20" },
  { label: "Garantie 3 ans", color: "bg-service-orange/10 text-service-orange border-service-orange/20" },
  { label: "Assurance professionnelle", color: "bg-service-violet/10 text-service-violet border-service-violet/20" },
];

const AboutSection = () => (
  <section id="apropos" className="py-20 relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-emerald/10 text-service-emerald text-sm font-semibold border border-service-emerald/20 mb-4">Notre Mission</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
          Qui Sommes-Nous ? Votre Expert en Réparation de Volets Roulants à Paris et en France depuis 10 ans
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
            Depuis plus de 10 ans, Répar'Action Volets est le spécialiste incontournable de la réparation, installation et motorisation de volets roulants à Paris, en Île-de-France et partout en France. Notre mission est de rendre votre habitat plus sécurisé, confortable et énergétiquement efficace.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Présents à Paris, en Île-de-France et dans toutes les grandes villes de France, notre entreprise s'appuie sur trois piliers fondamentaux : des équipements de qualité issus des meilleures marques (Somfy, Bubendorff), une installation professionnelle réalisée par des artisans certifiés, et un service après-vente réactif disponible 7 jours sur 7.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${p.color.split(" ")[0]} shadow-sm border border-white/10`}>
                  <p.icon className={`h-5 w-5 ${p.color.split(" ")[1]}`} />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{p.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c.label} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border ${c.color}`}>
                <CheckCircle2 className="h-3.5 w-3.5" /> {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="bg-accent rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            
            <h3 className="font-display text-2xl font-bold mb-8 relative">Répar'Action Volets en Chiffres</h3>
            <div className="grid grid-cols-2 gap-10 relative">
              {[
                { num: 500, suffix: "+", label: "Interventions / an" },
                { num: 98, suffix: "%", label: "Clients satisfaits" },
                { num: 24, suffix: "h", label: "Délai d'intervention" },
                { num: 3, suffix: " ans", label: "De garantie" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <CounterAnimation end={s.num} suffix={s.suffix} />
                  <div className="text-sm text-white/80 font-medium mt-2 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Matériel certifié", desc: "Marques premium", color: "border-service-blue/20" },
              { label: "Techniciens certifiés", desc: "Formation continue", color: "border-service-emerald/20" },
              { label: "Garantie 3 ans", desc: "Pièces et main d'œuvre", color: "border-service-orange/20" },
              { label: "Support 7j/7", desc: "Assistance téléphonique", color: "border-service-violet/20" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5 }}
                className={`bg-card rounded-2xl p-6 border ${item.color} card-shadow text-center transition-all duration-300 hover:card-shadow-hover`}
              >
                <div className="font-bold text-foreground text-sm mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground font-medium">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
