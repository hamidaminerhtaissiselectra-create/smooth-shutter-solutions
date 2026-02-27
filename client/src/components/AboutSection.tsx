import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Clock, ShieldCheck, Hammer, HeartHandshake } from "lucide-react";
import { useRef } from "react";

const points = [
  { icon: Award, text: "Plus de 10 ans d'expérience en volets roulants", color: "bg-service-blue/10 text-service-blue" },
  { icon: Clock, text: "Intervention rapide sous 24-48h — Paris & grandes villes", color: "bg-service-orange/10 text-service-orange" },
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
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
    
    <div className="container mx-auto px-4 relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-emerald/10 text-service-emerald text-sm font-semibold border border-service-emerald/20 mb-4">Notre Mission</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Qui Sommes-Nous ? Votre Expert en Réparation de Volets Roulants à Paris et en France depuis 10 ans
        </h2>
        <p className="text-muted-foreground leading-relaxed">
            Depuis plus de 10 ans, Répar'Action Volets est le spécialiste incontournable de la réparation, installation et motorisation de volets roulants à Paris, en Île-de-France et partout en France. Notre mission est de rendre votre habitat plus sécurisé, confortable et énergétiquement efficace grâce à des solutions durables et performantes. Spécialistes de tous les types de volets roulants (manuels, électriques, solaires), nous intervenons en urgence 7j/7 pour vos volets bloqués, moteurs en panne, ou vitrerie cassée.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Présents à Paris (tous les arrondissements), en Île-de-France et dans toutes les grandes villes de France (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Strasbourg), notre entreprise s'appuie sur trois piliers fondamentaux : des <strong className="text-foreground">quipements de qualité</strong> issus des meilleures marques du marché (Somfy, Bubendorff, Profalux), une <strong className="text-foreground">installation professionnelle</strong> réalisée par des artisans certifiés RGE et Qualibat, et un <strong className="text-foreground">service après-vente réactif</strong> disponible 7 jours sur 7.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${p.color.split(" ")[0]} shadow-lg border border-white/10`}>
                  <p.icon className={`h-5 w-5 ${p.color.split(" ")[1]}`} />
                </div>
                <span className="text-sm text-foreground">{p.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span key={c.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${c.color}`}>
                <CheckCircle2 className="h-3 w-3" /> {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" />
            
            <h3 className="font-display text-2xl font-bold mb-6 relative">Répar'Action Volets en Chiffres : Notre Impact</h3>
            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { num: "500+", label: "Interventions / an" },
                { num: "98%", label: "Clients satisfaits" },
                { num: "24h", label: "Délai d'intervention" },
                { num: "3 ans", label: "De garantie" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-display font-extrabold">{s.num}</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Matériel certifié", desc: "Marques premium", color: "border-service-blue/20" },
              { label: "Techniciens certifiés", desc: "Formation continue", color: "border-service-emerald/20" },
              { label: "Garantie 3 ans", desc: "Pièces et main d'œuvre", color: "border-service-orange/20" },
              { label: "Support 7j/7", desc: "Assistance téléphonique", color: "border-service-violet/20" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.03 }}
                className={`bg-card rounded-lg p-4 border ${item.color} card-shadow text-center transition-all hover:card-shadow-hover`}
              >
                <div className="font-semibold text-foreground text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
