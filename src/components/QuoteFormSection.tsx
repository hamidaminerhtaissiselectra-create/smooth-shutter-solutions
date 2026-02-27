import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wrench, RefreshCcw, GlassWater, Cpu, LayoutGrid, AlertTriangle, ArrowRight, ArrowLeft, CheckCircle2, HelpCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormMode = "devis" | "intervention";

const servicesByMode: Record<FormMode, { id: string; icon: React.ElementType; label: string; iconBg: string; borderColor: string }[]> = {
  devis: [
    { id: "reparation", icon: Wrench, label: "Réparation de volets", iconBg: "bg-service-blue", borderColor: "border-service-blue/40" },
    { id: "remplacement", icon: RefreshCcw, label: "Remplacement de volets", iconBg: "bg-service-rose", borderColor: "border-service-rose/40" },
    { id: "vitrerie", icon: GlassWater, label: "Vitrerie & Vitrage", iconBg: "bg-service-emerald", borderColor: "border-service-emerald/40" },
    { id: "motorisation", icon: Cpu, label: "Motorisation & Domotique", iconBg: "bg-service-violet", borderColor: "border-service-violet/40" },
    { id: "installation", icon: LayoutGrid, label: "Installation complète", iconBg: "bg-service-cyan", borderColor: "border-service-cyan/40" },
    { id: "autre", icon: HelpCircle, label: "Autre demande", iconBg: "bg-muted-foreground/60", borderColor: "border-muted-foreground/30" },
  ],
  intervention: [
    { id: "panne-volet", icon: Wrench, label: "Volet bloqué / en panne", iconBg: "bg-service-blue", borderColor: "border-service-blue/40" },
    { id: "vitre-cassee", icon: GlassWater, label: "Vitre cassée", iconBg: "bg-service-rose", borderColor: "border-service-rose/40" },
    { id: "urgence", icon: AlertTriangle, label: "Dépannage urgent", iconBg: "bg-service-orange", borderColor: "border-service-orange/40" },
    { id: "motorisation-hs", icon: Cpu, label: "Motorisation HS", iconBg: "bg-service-violet", borderColor: "border-service-violet/40" },
    { id: "maintenance", icon: Settings, label: "Maintenance / Entretien", iconBg: "bg-service-emerald", borderColor: "border-service-emerald/40" },
    { id: "autre-intervention", icon: HelpCircle, label: "Autre intervention", iconBg: "bg-muted-foreground/60", borderColor: "border-muted-foreground/30" },
  ],
};

const urgencyOptions = [
  { id: "normal", label: "Sous 1 semaine", desc: "Planification classique", borderColor: "border-service-emerald", textColor: "text-service-emerald" },
  { id: "rapide", label: "Sous 48h", desc: "Intervention rapide", borderColor: "border-service-orange", textColor: "text-service-orange" },
  { id: "urgent", label: "Aujourd'hui / Demain", desc: "Urgence immédiate", borderColor: "border-service-rose", textColor: "text-service-rose" },
];

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [mode, setMode] = useState<FormMode>("devis");
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => { setStep(1); setSelectedService(""); setUrgency(""); setDetails(""); setName(""); setPhone(""); setEmail(""); setCity(""); };
  const switchMode = (m: FormMode) => { setMode(m); resetForm(); };
  const canNext = () => {
    if (step === 1) return selectedService !== "";
    if (step === 2) return urgency !== "";
    if (step === 3) return name && phone && email;
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpvjjpz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: mode,
          service: selectedService,
          urgence: urgency,
          details: details,
          nom: name,
          telephone: phone,
          email: email,
          ville: city
        }),
      });

      if (response.ok) {
        toast({
          title: "✅ Demande envoyée !",
          description: mode === "devis"
            ? "Nous vous recontactons sous 24h avec votre devis personnalisé."
            : "Un technicien vous contactera très rapidement pour planifier l'intervention.",
        });
        resetForm();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "❌ Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const currentServices = servicesByMode[mode];

  return (
    <section id="devis" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            ⚡ Réponse en moins de 24h
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comment pouvons-nous vous aider ?
          </h2>
          <p className="text-muted-foreground text-lg">Choisissez votre type de demande et répondez à quelques questions.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          {/* Top accent bar */}
          <div className="h-1.5 rounded-t-2xl" style={{ background: "linear-gradient(to right, hsl(var(--service-blue)), hsl(var(--accent)), hsl(var(--service-orange)))" }} />

          <div className="bg-card rounded-b-2xl shadow-2xl border border-border/50 overflow-hidden">
            {/* Mode tabs */}
            <div className="flex justify-center gap-3 pt-8 pb-4 px-6">
              <button
                onClick={() => switchMode("devis")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  mode === "devis"
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                📋 Demande de Devis
              </button>
              <button
                onClick={() => switchMode("intervention")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  mode === "intervention"
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                🔧 Demande d'Intervention
              </button>
            </div>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-0 pb-6">
              {[1, 2, 3].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s ? "bg-accent text-white shadow-md shadow-accent/30" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {i < 2 && <div className={`w-16 h-0.5 mx-1 transition-all ${step > s ? "bg-accent" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            {/* Form content */}
            <div className="px-6 md:px-10 pb-8 min-h-[340px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key={`step1-${mode}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {mode === "devis" ? "Quel service souhaitez-vous ?" : "Quel problème rencontrez-vous ?"}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">Sélectionnez le service qui correspond à votre besoin.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {currentServices.map((s) => {
                        const selected = selectedService === s.id;
                        return (
                          <button
                            key={s.id}
                            onClick={() => setSelectedService(s.id)}
                            className={`group flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                              selected
                                ? `${s.borderColor} bg-card shadow-md scale-[1.02]`
                                : "border-border/60 bg-background hover:border-muted-foreground/30"
                            }`}
                          >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all shadow-lg border border-white/20 ${s.iconBg} ${
                              !selected ? "opacity-40 group-hover:opacity-100" : ""
                            }`}>
                              <s.icon className="h-6 w-6" />
                            </div>
                            <span className={`text-sm font-medium text-center leading-tight ${selected ? "text-foreground" : "text-muted-foreground"}`}>
                              {s.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Précisez votre demande</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {mode === "devis" ? "Quand souhaitez-vous réaliser ce projet ?" : "Quelle est l'urgence de l'intervention ?"}
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {urgencyOptions.map((o) => {
                        const selected = urgency === o.id;
                        return (
                          <button
                            key={o.id}
                            onClick={() => setUrgency(o.id)}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${
                              selected ? `${o.borderColor} ${o.textColor} bg-card shadow-md` : "border-border hover:border-muted-foreground/30"
                            }`}
                          >
                            <div className={`text-sm font-bold ${selected ? "" : "text-foreground"}`}>{o.label}</div>
                            <div className="text-xs text-muted-foreground mt-1">{o.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Description (optionnel)</label>
                      <Textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Décrivez votre situation : type de volet, panne constatée, dimensions..." rows={3} className="bg-background border-border" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Vos coordonnées</h3>
                    <p className="text-sm text-muted-foreground mb-6">Pour vous recontacter avec votre {mode === "devis" ? "devis" : "proposition d'intervention"}.</p>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                          <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jean Dupont" className="bg-background" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone *</label>
                          <Input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" placeholder="06 XX XX XX XX" className="bg-background" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                          <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="votre@email.com" className="bg-background" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Ville / Code postal</label>
                          <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Fontenay-Trésigny (77)" className="bg-background" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-service-emerald" /> Sans engagement</span>
                      <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-service-emerald" /> Réponse sous 24h</span>
                      <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-service-emerald" /> Données sécurisées</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                {step > 1 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)} className="gap-2 text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" /> Retour
                  </Button>
                ) : <div />}
                {step < 3 ? (
                  <Button onClick={() => setStep(step + 1)} disabled={!canNext()} className="bg-accent text-white hover:bg-accent/90 gap-2 px-8 rounded-full shadow-lg shadow-accent/20">
                    Continuer <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canNext() || loading} className="bg-hero-gradient text-white gap-2 font-semibold px-8 rounded-full shadow-lg">
                    {loading ? "Envoi en cours..." : mode === "devis" ? "Recevoir mon devis gratuit" : "Demander l'intervention"} {!loading && <ArrowRight className="h-4 w-4" />}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
