import { motion } from "framer-motion";
import { Phone, ClipboardList, Calendar, Wrench, CheckCircle2, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: Phone, title: "Prise de Contact", desc: "Contactez-nous par téléphone, email ou via notre formulaire. Un conseiller vous répond sous 2 heures pour comprendre vos besoins.", color: "bg-service-blue", shadow: "shadow-[0_4px_14px_hsl(213,72%,50%,0.35)]", borderColor: "border-service-blue/20" },
  { num: "02", icon: ClipboardList, title: "Diagnostic Gratuit", desc: "Nous analysons votre situation et réalisons un diagnostic précis. Vous recevez un devis détaillé et transparent sous 24h.", color: "bg-service-rose", shadow: "shadow-[0_4px_14px_hsl(350,80%,55%,0.35)]", borderColor: "border-service-rose/20" },
  { num: "03", icon: Calendar, title: "Planification", desc: "Une fois le devis validé, nous planifions l'intervention à votre convenance. Nous nous adaptons à vos contraintes horaires.", color: "bg-service-emerald", shadow: "shadow-[0_4px_14px_hsl(160,70%,40%,0.35)]", borderColor: "border-service-emerald/20" },
  { num: "04", icon: Wrench, title: "Intervention Experte", desc: "Nos artisans certifiés réalisent l'intervention avec soin. Travail propre, respect des lieux et finitions soignées.", color: "bg-service-orange", shadow: "shadow-[0_4px_14px_hsl(25,90%,55%,0.35)]", borderColor: "border-service-orange/20" },
  { num: "05", icon: CheckCircle2, title: "Vérification & Garantie", desc: "Nous vérifions le bon fonctionnement de l'installation. Toutes nos interventions sont garanties 3 ans pièces et main d'œuvre.", color: "bg-service-violet", shadow: "shadow-[0_4px_14px_hsl(260,65%,55%,0.35)]", borderColor: "border-service-violet/20" },
  { num: "06", icon: Headphones, title: "Suivi & SAV", desc: "Bénéficiez d'un service après-vente réactif. Nous restons disponibles pour toute question ou ajustement.", color: "bg-service-cyan", shadow: "shadow-[0_4px_14px_hsl(190,80%,45%,0.35)]", borderColor: "border-service-cyan/20" },
];

const ProcessSection = () => (
  <section className="py-12 sm:py-16 md:py-20">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Notre Méthode</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Notre Processus Complet de Réparation et Installation de Volets Roulants
        </h2>
        <p className="text-muted-foreground">De votre premier appel au suivi après-vente, découvrez notre processus professionnel pour une réparation ou installation réussie de vos volets roulants.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative bg-card rounded-xl p-8 card-shadow border ${s.borderColor} hover:card-shadow-hover transition-all duration-500 group`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-display font-extrabold text-border/50">{s.num}</span>
              <div className={`w-12 h-12 rounded-xl ${s.color} ${s.shadow} flex items-center justify-center border border-white/20`}>
                <s.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
