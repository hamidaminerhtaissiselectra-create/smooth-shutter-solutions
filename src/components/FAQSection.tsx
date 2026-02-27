import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Combien coûte la réparation d'un volet roulant ?", a: "Le coût dépend du type de panne et du modèle de volet. En moyenne, une réparation standard se situe entre 80€ et 250€. Nous réalisons un diagnostic gratuit et vous fournissons un devis détaillé avant toute intervention, sans surprise." },
  { q: "Intervenez-vous en urgence le week-end ?", a: "Oui, nous proposons un service d'intervention d'urgence 7j/7 pour les cas de volets bloqués en position ouverte, bris de glace ou problèmes de sécurité. Contactez-nous au 06 03 20 59 67 pour une intervention rapide." },
  { q: "Quels types de volets roulants réparez-vous ?", a: "Nous intervenons sur tous types de volets roulants : manuels (sangle, manivelle), électriques (filaires, radio), solaires, en aluminium, PVC ou bois. Quelle que soit la marque ou l'année d'installation." },
  { q: "La motorisation de volets existants est-elle possible ?", a: "Absolument ! Nous motorisons vos volets manuels existants sans travaux importants. L'opération prend généralement 1 à 2 heures par volet. Nous proposons des moteurs filaires, radio et connectés compatibles avec la domotique." },
  { q: "Proposez-vous une garantie sur vos interventions ?", a: "Oui, toutes nos interventions sont couvertes par une garantie 3 ans pièces et main d'œuvre, que ce soit pour les réparations ou les installations neuves. Nous utilisons exclusivement des pièces de qualité." },
  { q: "Quelle est votre zone d'intervention ?", a: "Nous intervenons dans toute la France, avec une forte présence à Paris (tous les arrondissements), en Île-de-France et dans toutes les grandes villes : Lyon, Marseille, Toulouse, Bordeaux, Nantes, Strasbourg, etc. Notre réseau de techniciens qualifiés couvre l'ensemble du territoire." },
  { q: "Comment se déroule un remplacement de vitrage ?", a: "Après un diagnostic de vos besoins, nous prenons les mesures exactes et commandons le vitrage adapté (simple, double ou triple). L'installation est réalisée en 1 à 3 heures selon la complexité. Nous assurons aussi le nettoyage complet." },
  { q: "Quel est le prix moyen d'une installation de volet roulant neuf ?", a: "Le prix d'une installation neuve dépend du type de volet (manuel, électrique, solaire), des dimensions et du matériau (aluminium, PVC, bois). En moyenne, comptez entre 300€ et 800€ par volet installé. Nous fournissons un devis gratuit et détaillé après visite." },
  { q: "Combien de temps dure une réparation de volet roulant ?", a: "La plupart de nos réparations sont réalisées en 1 à 2 heures. Pour les cas plus complexes (changement de moteur, remplacement de lames), l'intervention peut prendre jusqu'à 3-4 heures. Nous vous informons toujours du délai estimé avant de commencer." },
  { q: "Quelles marques de volets roulants réparez-vous ?", a: "Nous réparons tous les types et marques de volets : Somfy, Bubendorff, Profalux, Franciaflex, Lakal, SIMU, Nice, Becker, Came, Zurflüh-Feller, et bien d'autres. Notre expertise multimarques garantit une intervention rapide et efficace." },
  { q: "Comment motoriser un volet roulant manuel ?", a: "La motorisation d'un volet manuel est simple : nous installons un moteur électrique (filaire, radio ou connecté) dans le tube d'enroulement existant. Aucune modification structurelle n'est nécessaire. L'opération prend 1 à 2 heures et votre volet devient télécommandé ou connecté à la domotique." },
  { q: "Quel est le meilleur type de volet roulant ?", a: "Le meilleur volet roulant dépend de vos besoins : les volets manuels sont économiques, les électriques offrent plus de confort, et les solaires sont écologiques. Pour l'isolation thermique et phonique, les volets en aluminium avec lames épaisses sont recommandés. Nous vous conseillons lors d'une visite gratuite." },
  { q: "Avez-vous une certification RGE ?", a: "Oui, Répar'Action Volets est certifié RGE (Reconnu Garant de l'Environnement) et Qualibat. Cette certification garantit la qualité de nos interventions et vous permet de bénéficier de certaines aides gouvernementales pour vos travaux de rénovation énergétique." },
];

const FAQSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-semibold border border-amber-500/20 mb-4">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          FAQ Complète - Questions Fréquentes sur la Réparation et Installation de Volets Roulants
        </h2>
        <p className="text-muted-foreground">Retrouvez les réponses aux questions les plus posées sur la réparation, installation et motorisation de volets roulants, ainsi que la vitrerie.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border card-shadow px-8 transition-all duration-300">
              <AccordionTrigger className="text-left font-display font-bold text-foreground text-base hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
