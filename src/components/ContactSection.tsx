import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState<"devis" | "info" | "urgence">("devis");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const typeOptions = [
    { id: "devis" as const, label: "📋 Devis", color: "border-accent bg-accent/5 text-accent" },
    { id: "info" as const, label: "ℹ️ Info", color: "border-primary bg-primary/5 text-primary" },
    { id: "urgence" as const, label: "🚨 Urgence", color: "border-destructive bg-destructive/5 text-destructive" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">Contact Direct</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Contactez-Nous pour un Devis Gratuit - Réparation de Volets Roulants à Paris et en France
          </h2>
          <p className="text-muted-foreground">Notre équipe est à votre écoute pour répondre à vos questions et vous conseiller sur la meilleure solution.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 card-shadow border border-border">
            <h3 className="font-display font-bold text-lg text-foreground mb-6">Formulaire de Contact Rapide</h3>
            <p className="text-sm text-muted-foreground mb-6">Remplissez ce formulaire et nous vous recontacterons rapidement</p>

            {/* Request type selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Type de demande</label>
              <div className="flex gap-2">
                {typeOptions.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setRequestType(t.id)}
                    className={`flex-1 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${requestType === t.id ? t.color + " border-current" : "border-border bg-background text-muted-foreground"}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet</label>
                <Input required placeholder="Votre nom" className="bg-background" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input required type="email" placeholder="votre@email.com" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                  <Input required type="tel" placeholder="06 XX XX XX XX" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea required placeholder="Décrivez votre besoin..." rows={4} className="bg-background" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                {loading ? "Envoi en cours..." : "✉️ Envoyer la demande"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">✓ Sans engagement • ✓ Réponse sous 24h • ✓ Données sécurisées</p>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            {[
              { icon: Phone, title: "Téléphone", text: "06 03 20 59 67", sub: "Lun - Ven : 8h - 18h" },
              { icon: Mail, title: "Email", text: "contact@reparaction-volets.fr", sub: "Réponse sous 24h" },
              { icon: MapPin, title: "Adresse", text: "62 Rue Emile Zola, 77610 Fontenay-Trésigny", sub: "Siège social" },
              { icon: Clock, title: "Horaires", text: "Lun - Ven : 8h00 - 18h00 | Sam : 9h00 - 13h00", sub: "Urgences 7j/7" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card rounded-xl p-5 card-shadow border border-border hover:border-accent/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-lg border border-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.title}</div>
                  <div className="text-muted-foreground text-sm mt-0.5">{item.text}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                title="Localisation Répar'Action Volets"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.5!2d2.8755!3d48.7053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQyJzE5LjEiTiAywrA1MiczMy4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
