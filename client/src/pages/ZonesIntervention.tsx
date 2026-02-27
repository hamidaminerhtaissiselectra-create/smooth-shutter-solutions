import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight, ArrowRight, Phone, CheckCircle2, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const regions = [
  {
    name: "Île-de-France",
    slug: "ile-de-france",
    depts: ["Paris (75)", "Seine-et-Marne (77)", "Yvelines (78)", "Essonne (91)", "Hauts-de-Seine (92)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Val-d'Oise (95)"],
    desc: "Paris et l'Île-de-France sont au cœur de notre activité. Nous couvrons Paris (tous les arrondissements) et l'ensemble des 8 départements franciliens pour tous vos besoins en réparation, installation et motorisation de volets roulants.",
    highlight: true,
    temoin: { name: "Marie L.", ville: "Fontenay-Trésigny (77)", texte: "Intervention rapide et efficace pour mon volet bloqué. Réparé en moins d'une heure !", note: 5 },
    services: ["Intervention sous 24-48h", "Paris tous arrondissements", "Stock de pièces détachées", "Urgences 7j/7", "Garantie 3 ans"],
  },
  {
    name: "Hauts-de-France",
    slug: "hauts-de-france",
    depts: ["Aisne (02)", "Nord (59)", "Oise (60)", "Pas-de-Calais (62)", "Somme (80)"],
    desc: "Région frontalière avec l'Île-de-France, nous intervenons régulièrement dans les Hauts-de-France, notamment dans l'Oise (60) et l'Aisne (02). Nos techniciens qualifiés se déplacent pour des interventions de réparation, remplacement et motorisation de volets roulants.",
    temoin: { name: "Pierre D.", ville: "Compiègne (60)", texte: "Très professionnel, le technicien est venu motoriser mes 4 volets en une journée.", note: 5 },
    services: ["Intervention sous 72h", "Devis gratuit à distance", "Techniciens qualifiés", "Garantie 3 ans"],
  },
  {
    name: "Grand Est",
    slug: "grand-est",
    depts: ["Ardennes (08)", "Aube (10)", "Marne (51)", "Haute-Marne (52)", "Meurthe-et-Moselle (54)", "Meuse (55)", "Moselle (57)", "Bas-Rhin (67)", "Haut-Rhin (68)", "Vosges (88)"],
    desc: "Le Grand Est bénéficie de notre réseau de techniciens partenaires pour une couverture efficace. Des conditions climatiques parfois rigoureuses rendent l'entretien des volets roulants particulièrement important dans cette région.",
    temoin: { name: "Sophie R.", ville: "Strasbourg (67)", texte: "Remplacement de double vitrage réalisé rapidement et proprement. Très satisfaite.", note: 5 },
    services: ["Réseau de techniciens locaux", "Devis gratuit", "Pièces toutes marques", "Garantie 2 ans minimum"],
  },
  {
    name: "Normandie",
    slug: "normandie",
    depts: ["Calvados (14)", "Eure (27)", "Manche (50)", "Orne (61)", "Seine-Maritime (76)"],
    desc: "Le climat normand, soumis aux vents et à l'humidité, met les volets roulants à rude épreuve. Nos techniciens connaissent les problématiques spécifiques de la région et proposent des solutions adaptées et durables.",
    temoin: { name: "Jean-Claude M.", ville: "Rouen (76)", texte: "Installation de volets aluminium sur-mesure. Qualité top, l'isolation est nettement meilleure.", note: 5 },
    services: ["Solutions anti-corrosion", "Volets résistants aux intempéries", "Intervention planifiée", "Garantie 3 ans"],
  },
  {
    name: "Bretagne",
    slug: "bretagne",
    depts: ["Côtes-d'Armor (22)", "Finistère (29)", "Ille-et-Vilaine (35)", "Morbihan (56)"],
    desc: "La Bretagne, avec son climat maritime et ses vents forts, nécessite des volets roulants robustes et bien entretenus. Nous proposons des solutions adaptées au littoral avec des matériaux résistants à la corrosion saline.",
    services: ["Matériaux anti-corrosion", "Résistance aux vents forts", "Intervention sur rendez-vous", "Devis gratuit"],
  },
  {
    name: "Pays de la Loire",
    slug: "pays-de-la-loire",
    depts: ["Loire-Atlantique (44)", "Maine-et-Loire (49)", "Mayenne (53)", "Sarthe (72)", "Vendée (85)"],
    desc: "Des grandes villes comme Nantes aux zones côtières de Vendée, nous apportons notre expertise en volets roulants sur l'ensemble des Pays de la Loire avec des solutions adaptées à chaque environnement.",
    services: ["Couverture urbaine et littorale", "Volets sur-mesure", "Motorisation connectée", "Garantie pièces et main d'œuvre"],
  },
  {
    name: "Centre-Val de Loire",
    slug: "centre-val-de-loire",
    depts: ["Cher (18)", "Eure-et-Loir (28)", "Indre (36)", "Indre-et-Loire (37)", "Loir-et-Cher (41)", "Loiret (45)"],
    desc: "Proche de l'Île-de-France, le Centre-Val de Loire bénéficie de nos interventions régulières. Que ce soit pour du patrimoine ancien ou de la construction neuve, nous adaptons nos solutions à chaque type d'habitat.",
    temoin: { name: "Laurent B.", ville: "Orléans (45)", texte: "Motorisation Somfy installée sur 6 volets. Fonctionne parfaitement avec Google Home.", note: 5 },
    services: ["Proximité Île-de-France", "Solutions patrimoine ancien", "Motorisation domotique", "Intervention rapide"],
  },
  {
    name: "Bourgogne-Franche-Comté",
    slug: "bourgogne-franche-comte",
    depts: ["Côte-d'Or (21)", "Doubs (25)", "Jura (39)", "Nièvre (58)", "Haute-Saône (70)", "Saône-et-Loire (71)", "Yonne (89)", "Territoire de Belfort (90)"],
    desc: "De Dijon à Besançon, en passant par l'Yonne proche de l'Île-de-France, nous couvrons l'ensemble de la Bourgogne-Franche-Comté. Une région où l'isolation thermique des volets est cruciale pendant les hivers rigoureux.",
    services: ["Isolation thermique renforcée", "Volets adaptés au froid", "Techniciens régionaux", "Devis sous 48h"],
  },
  {
    name: "Nouvelle-Aquitaine",
    slug: "nouvelle-aquitaine",
    depts: ["Charente (16)", "Charente-Maritime (17)", "Corrèze (19)", "Creuse (23)", "Dordogne (24)", "Gironde (33)", "Landes (40)", "Lot-et-Garonne (47)", "Pyrénées-Atlantiques (64)", "Deux-Sèvres (79)", "Vienne (86)", "Haute-Vienne (87)"],
    desc: "La plus grande région de France métropolitaine, de Bordeaux au Pays Basque. Nous intervenons sur l'ensemble du territoire avec des techniciens qualifiés et des solutions adaptées au climat atlantique ou montagnard.",
    services: ["Plus grande région couverte", "Solutions littoral/montagne", "Partenaires locaux", "Garantie 3 ans"],
  },
  {
    name: "Occitanie",
    slug: "occitanie",
    depts: ["Ariège (09)", "Aude (11)", "Aveyron (12)", "Gard (30)", "Haute-Garonne (31)", "Gers (32)", "Hérault (34)", "Lot (46)", "Lozère (48)", "Hautes-Pyrénées (65)", "Pyrénées-Orientales (66)", "Tarn (81)", "Tarn-et-Garonne (82)"],
    desc: "De Toulouse à Montpellier, l'Occitanie est soumise à un ensoleillement important qui nécessite des volets performants pour le confort thermique estival. Nos solutions à contrôle solaire sont particulièrement adaptées.",
    temoin: { name: "Nadia A.", ville: "Toulouse (31)", texte: "Volets motorisés avec programmation solaire. Fini la chaleur l'été !", note: 5 },
    services: ["Protection solaire optimisée", "Volets à contrôle thermique", "Programmation automatique", "Solutions canicule"],
  },
  {
    name: "Auvergne-Rhône-Alpes",
    slug: "auvergne-rhone-alpes",
    depts: ["Ain (01)", "Allier (03)", "Ardèche (07)", "Cantal (15)", "Drôme (26)", "Isère (38)", "Loire (42)", "Haute-Loire (43)", "Puy-de-Dôme (63)", "Rhône (69)", "Savoie (73)", "Haute-Savoie (74)"],
    desc: "Région aux climats variés, de Lyon aux stations alpines. L'isolation thermique est cruciale en altitude, tandis que la vallée du Rhône demande une protection solaire efficace. Nos solutions s'adaptent à chaque contexte.",
    temoin: { name: "François G.", ville: "Lyon (69)", texte: "Remplacement complet de 8 volets en aluminium. Travail impeccable, isolation nettement améliorée.", note: 5 },
    services: ["Solutions altitude/vallée", "Isolation thermique premium", "Résistance neige/vent", "Techniciens montagne"],
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    slug: "provence-alpes-cote-azur",
    depts: ["Alpes-de-Haute-Provence (04)", "Hautes-Alpes (05)", "Alpes-Maritimes (06)", "Bouches-du-Rhône (13)", "Var (83)", "Vaucluse (84)"],
    desc: "Le mistral, l'ensoleillement intense et le sel marin sont les défis principaux des volets en PACA. Nous proposons des matériaux résistants et des solutions de contrôle solaire pour un confort optimal toute l'année.",
    services: ["Résistance au mistral", "Protection solaire", "Anti-corrosion maritime", "Solutions domotiques"],
  },
  {
    name: "Corse",
    slug: "corse",
    depts: ["Corse-du-Sud (2A)", "Haute-Corse (2B)"],
    desc: "L'île de Beauté bénéficie également de nos services grâce à notre réseau de partenaires locaux. Les volets roulants sont essentiels pour se protéger du soleil méditerranéen et sécuriser les résidences secondaires.",
    services: ["Partenaires insulaires", "Protection solaire", "Sécurité résidences secondaires", "Devis à distance"],
  },
];

const ZonesInterventionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  document.title = "Zones d\'Intervention | Réparation Volets Roulants par Région | Répar\'Action Volets";
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
            <span>Zones d'Intervention</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <MapPin className="h-3.5 w-3.5" /> France métropolitaine
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Nos Zones d\'Intervention : Réparation de Volets Roulants par Région en France
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
             Répar\'Action Volets intervient sur l\'ensemble du territoire français, avec une expertise reconnue à Paris et en Île-de-France. Découvrez nos zones d\'intervention détaillées par région et contactez-nous pour un devis gratuit et personnalisé.            </p>
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

      {/* Stats */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { num: "13", label: "Régions couvertes" },
              { num: "96", label: "Départements" },
              { num: "500+", label: "Interventions / an" },
              { num: "48h", label: "Délai moyen IdF" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-display font-extrabold text-accent">{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Régions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Zones d'Intervention par Région en France Métropolitaine</h2>
            <p className="text-muted-foreground">Découvrez les départements couverts, nos services et les témoignages de clients dans chaque région.</p>
          </motion.div>

          <div className="space-y-8">
            {regions.map((r, i) => (
              <motion.div
                key={r.slug}
                id={r.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`rounded-2xl border p-6 md:p-8 ${r.highlight ? "bg-accent/5 border-accent/20 card-shadow-hover" : "bg-card border-border card-shadow"}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${r.highlight ? "bg-accent/10" : "bg-muted"}`}>
                        <MapPin className={`h-5 w-5 ${r.highlight ? "text-accent" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-xl">{r.name}</h3>
                        {r.highlight && <span className="text-xs font-bold text-accent">ZONE PRIORITAIRE</span>}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.desc}</p>
                    
                    {/* Départements */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Départements couverts</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {r.depts.map((d) => (
                          <span key={d} className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground">{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Services régionaux */}
                    <div className="flex flex-wrap gap-2">
                      {r.services.map((s) => (
                        <span key={s} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                          <CheckCircle2 className="h-3 w-3" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Témoignage régional */}
                  {r.temoin && (
                    <div className="lg:w-72 shrink-0 bg-background rounded-xl p-5 border border-border">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: r.temoin.note }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground italic mb-3">"{r.temoin.texte}"</p>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">{r.temoin.name}</span> — {r.temoin.ville}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Nous Intervenons dans Votre Région</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Où que vous soyez en France, demandez votre devis gratuit. Nous vous mettrons en contact avec le technicien le plus proche de chez vous.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ZonesInterventionPage;
