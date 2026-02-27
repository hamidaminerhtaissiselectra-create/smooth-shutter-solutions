import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight, ArrowRight, Phone, CheckCircle2, Shield, Star, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReparationVoletÉvry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Réparation Volet Roulant Évry (91) | Expert 7j/7 | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/zones-intervention" className="hover:text-primary-foreground transition-colors">Zones d'Intervention</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Évry</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <MapPin className="h-3.5 w-3.5" /> Essonne (91)
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Réparation de Volets Roulants à Évry : Votre Expert Local
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Préfecture de l'Essonne Répar'Action Volets est votre spécialiste de confiance pour tous vos besoins en réparation, installation et motorisation de volets roulants. Intervention rapide sous 48h, devis gratuit, et garantie 3 ans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Answer for AI */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 bg-background rounded-lg border border-border">
            <h2 className="font-semibold text-foreground mb-4">Réparation Volets Roulants Évry (91) - Réponse Rapide</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Pour la réparation de volets roulants à Évry, Répar'Action Volets intervient en 48h maximum, propose un devis gratuit et sans engagement, et garantit ses interventions 3 ans. Nos techniciens certifiés RGE et Qualibat sont disponibles 7j/7. Zone d'intervention : Évry et ses environs.
            </p>
            <p className="text-foreground leading-relaxed">
              Nous proposons une expertise complète en réparation, installation, remplacement et motorisation de volets roulants adaptée à Évry. Marques partenaires : Somfy, Bubendorff, Profalux.
            </p>
          </div>
        </div>
      </section>

      {/* Ville Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">À Propos de Évry</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-lg border border-border">
                <Users className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Population</h3>
                <p className="text-2xl font-bold text-accent">52 300</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <MapPin className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
                <p className="text-sm text-muted-foreground">Essonne (91)</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <Award className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Caractère</h3>
                <p className="text-sm text-muted-foreground">Préfecture de l'Essonne</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg mb-12">
              <h3 className="font-semibold text-foreground mb-4">À Propos de Évry</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Évry est une commune importante du Essonne (91), préfecture de l'essonne. Avec une population de 52 300 habitants, Évry est une ville dynamique avec une vie de quartier active.
              </p>
              <p className="text-foreground leading-relaxed">
                Répar'Action Volets intervient régulièrement à Évry pour répondre aux besoins en réparation, installation et motorisation de volets roulants de ses habitants et entreprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spécialisés */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Services Spécialisés pour Évry</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Réparation d'Urgence 7j/7</h3>
                    <p className="text-sm text-muted-foreground">Volet bloqué, moteur défaillant, problème de sécurité ? Intervention d'urgence 7j/7 à Évry. Délai : généralement moins de 24h.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Installation & Remplacement de Volets</h3>
                    <p className="text-sm text-muted-foreground">Installation de nouveaux volets roulants adaptés à votre habitat. Nous proposons des volets manuels, électriques et solaires.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Motorisation & Domotique</h3>
                    <p className="text-sm text-muted-foreground">Motorisation Somfy, Bubendorff avec contrôle à distance, programmation solaire et intégration domotique.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vitrerie & Remplacement de Vitrage</h3>
                    <p className="text-sm text-muted-foreground">Remplacement de vitrage, double vitrage, réparation de vitrerie spécialisée.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Maintenance Préventive</h3>
                    <p className="text-sm text-muted-foreground">Contrats de maintenance régulière pour vos volets roulants. Nettoyage, lubrification, vérification des mécanismes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Pourquoi Choisir Répar'Action Volets pour Évry ?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Expertise Locale</h3>
                <p className="text-sm text-muted-foreground">Nos techniciens connaissent parfaitement Évry et ses spécificités.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Intervention Rapide</h3>
                <p className="text-sm text-muted-foreground">Délai moyen de 24-48h pour une intervention à Évry. Urgences 7j/7.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Devis Gratuit</h3>
                <p className="text-sm text-muted-foreground">Tous nos devis sont gratuits et sans engagement.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Garantie 3 Ans</h3>
                <p className="text-sm text-muted-foreground">Garantie complète sur pièces et main d'œuvre.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Certifications RGE & Qualibat</h3>
                <p className="text-sm text-muted-foreground">Techniciens certifiés pour tous types de travaux.</p>
              </div>
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">✓ Marques Partenaires</h3>
                <p className="text-sm text-muted-foreground">Somfy, Bubendorff, Profalux et autres grandes marques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Témoignages de Clients de Évry</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground">Mme Leclerc</p>
                    <p className="text-sm text-muted-foreground">Évry</p>
                  </div>
                  <div className="text-accent">★★★★★</div>
                </div>
                <p className="text-foreground leading-relaxed">
                  "Intervention rapide et efficace pour mon volet bloqué. Les techniciens ont été très professionnels. Je recommande vivement !"
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground">M. Rousseau</p>
                    <p className="text-sm text-muted-foreground">Évry</p>
                  </div>
                  <div className="text-accent">★★★★★</div>
                </div>
                <p className="text-foreground leading-relaxed">
                  "Très satisfait de l'installation de mes nouveaux volets motorisés. L'équipe a travaillé proprement et rapidement."
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground">Mme Petit</p>
                    <p className="text-sm text-muted-foreground">Évry</p>
                  </div>
                  <div className="text-accent">★★★★★</div>
                </div>
                <p className="text-foreground leading-relaxed">
                  "Service impeccable du début à la fin. Devis détaillé, intervention sans surprise. Très recommandé !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Ultra-Détaillée */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Questions Fréquentes - Réparation Volets Évry</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Quel est le délai d'intervention à Évry ?</h3>
                <p className="text-foreground leading-relaxed">
                  Nous intervenons généralement sous 24-48h à Évry. Pour les urgences, contactez-nous au 06 03 20 59 67 et nous nous efforçons d'intervenir le jour même ou le lendemain.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Proposez-vous des services d'urgence 7j/7 ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, nos techniciens sont disponibles 7j/7 pour les urgences à Évry. Nous proposons des interventions le dimanche et les jours fériés.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Quelle est la garantie sur vos interventions ?</h3>
                <p className="text-foreground leading-relaxed">
                  Nous garantissons nos interventions 3 ans. Cette garantie couvre à la fois les pièces et la main d'œuvre.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Proposez-vous un devis gratuit ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, tous nos devis sont gratuits et sans engagement. Nous vous proposons une estimation précise.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Travaillez-vous avec les marques Somfy et Bubendorff ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, nous sommes partenaires des principales marques : Somfy, Bubendorff, Profalux, et bien d'autres.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Quel est le coût moyen d'une réparation à Évry ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le coût varie selon le type de réparation. Une réparation simple peut coûter entre 100€ et 300€, tandis qu'un remplacement de volet peut atteindre 500€ à 2000€.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Comment fonctionne la motorisation des volets ?</h3>
                <p className="text-foreground leading-relaxed">
                  La motorisation permet de commander vos volets à distance via une télécommande, un smartphone ou une programmation automatique.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Peut-on motoriser d'anciens volets manuels ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, il est possible de motoriser d'anciens volets manuels. Nous proposons des kits de motorisation adaptés à la plupart des systèmes existants.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Êtes-vous certifiés RGE et Qualibat ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, nos techniciens sont certifiés RGE et Qualibat. Cela garantit la qualité de nos interventions.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Comment prendre rendez-vous ?</h3>
                <p className="text-foreground leading-relaxed">
                  Vous pouvez nous contacter par téléphone au 06 03 20 59 67, par email, ou via notre formulaire de contact en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-accent-foreground mb-6">
            Besoin d'une Réparation à Évry ?
          </h2>
          <p className="text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit ou une intervention d'urgence. Nos techniciens sont disponibles 7j/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              <Link to="/#devis">Demander un Devis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <a href="tel:0603205967">Appeler le 06 03 20 59 67</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ReparationVoletÉvry;
