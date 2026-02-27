import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const regions = [
  { 
    name: "Île-de-France", 
    depts: "75, 77, 78, 91, 92, 93, 94, 95", 
    highlight: true, 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/ile-de-france.jpg"
  },
  { 
    name: "Hauts-de-France", 
    depts: "02, 59, 60, 62, 80", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/hauts-de-france.jpg"
  },
  { 
    name: "Grand Est", 
    depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/grand-est.jpg"
  },
  { 
    name: "Normandie", 
    depts: "14, 27, 50, 61, 76", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/normandie.jpg"
  },
  { 
    name: "Bretagne", 
    depts: "22, 29, 35, 56", 
    color: "bg-service-cyan/5 border-service-cyan/20",
    image: "/images/zones/bretagne.jpg"
  },
  { 
    name: "Pays de la Loire", 
    depts: "44, 49, 53, 72, 85", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/pays-de-la-loire.jpg"
  },
  { 
    name: "Centre-Val de Loire", 
    depts: "18, 28, 36, 37, 41, 45", 
    color: "bg-service-blue/5 border-service-blue/20",
    image: "/images/zones/centre-val-de-loire.jpg"
  },
  { 
    name: "Bourgogne-Franche-Comté", 
    depts: "21, 25, 39, 58, 70, 71, 89, 90", 
    color: "bg-service-rose/5 border-service-rose/20",
    image: "/images/zones/bourgogne-franche-comte.jpg"
  },
  { 
    name: "Nouvelle-Aquitaine", 
    depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87", 
    color: "bg-service-emerald/5 border-service-emerald/20",
    image: "/images/zones/nouvelle-aquitaine.jpg"
  },
  { 
    name: "Occitanie", 
    depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82", 
    color: "bg-service-violet/5 border-service-violet/20",
    image: "/images/zones/occitanie.jpg"
  },
  { 
    name: "Auvergne-Rhône-Alpes", 
    depts: "01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74", 
    color: "bg-service-cyan/5 border-service-cyan/20",
    image: "/images/zones/auvergne-rhone-alpes.jpg"
  },
  { 
    name: "Provence-Alpes-Côte d'Azur", 
    depts: "04, 05, 06, 13, 83, 84", 
    color: "bg-service-orange/5 border-service-orange/20",
    image: "/images/zones/paca.jpg"
  },
];

const RegionsSection = () => (
  <section id="regions" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <Badge variant="serviceBlue" className="gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
        </Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Nos Zones d'Intervention : Réparation de Volets Roulants à Paris, Île-de-France et Partout en France - Intervention Rapide 48h
        </h2>
        <p className="text-muted-foreground">
          Répar'Action Volets couvre l'ensemble du territoire français, avec une présence renforcée à Paris et en Île-de-France. Nos techniciens certifiés RGE et Qualibat interviennent rapidement dans toutes les régions pour la réparation, l'installation et la motorisation de vos volets roulants.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            className="group flex flex-col"
          >
            {/* Image au-dessus du bloc */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl shadow-md">
              <img 
                src={r.image} 
                alt={r.name} 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5" />
              {r.highlight && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="serviceBlue" className="text-[10px] font-bold text-white shadow-lg">
                    PRIORITAIRE
                  </Badge>
                </div>
              )}
            </div>

            {/* Bloc de contenu en dessous */}
            <div className={`flex-1 p-6 rounded-b-2xl border border-t-0 transition-all duration-500 card-shadow group-hover:card-shadow-hover ${r.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-white/20 ${r.highlight ? "bg-service-blue text-white" : "bg-white/80 text-muted-foreground"}`}>
                   <MapPin className="h-5 w-5" />
                </div>
                <h3 className={`text-lg font-bold ${r.highlight ? "text-service-blue" : "text-foreground"}`}>
                  {r.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-6">
                <span className="px-2 py-1 rounded-md bg-black/5">Départements : {r.depts}</span>
              </div>
              
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                Voir les détails <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <Link to="/zones-intervention" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl">
          Découvrir toutes nos zones d'intervention <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default RegionsSection;
