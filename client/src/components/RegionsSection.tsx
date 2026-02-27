import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const regions = [
  { name: "Île-de-France", depts: "75, 77, 78, 91, 92, 93, 94, 95", highlight: true, color: "bg-service-blue/5 border-service-blue/20" },
  { name: "Hauts-de-France", depts: "02, 59, 60, 62, 80", color: "bg-service-rose/5 border-service-rose/20" },
  { name: "Grand Est", depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88", color: "bg-service-emerald/5 border-service-emerald/20" },
  { name: "Normandie", depts: "14, 27, 50, 61, 76", color: "bg-service-violet/5 border-service-violet/20" },
  { name: "Bretagne", depts: "22, 29, 35, 56", color: "bg-service-cyan/5 border-service-cyan/20" },
  { name: "Pays de la Loire", depts: "44, 49, 53, 72, 85", color: "bg-service-orange/5 border-service-orange/20" },
  { name: "Centre-Val de Loire", depts: "18, 28, 36, 37, 41, 45", color: "bg-service-blue/5 border-service-blue/20" },
  { name: "Bourgogne-Franche-Comté", depts: "21, 25, 39, 58, 70, 71, 89, 90", color: "bg-service-rose/5 border-service-rose/20" },
  { name: "Nouvelle-Aquitaine", depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87", color: "bg-service-emerald/5 border-service-emerald/20" },
  { name: "Occitanie", depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82", color: "bg-service-violet/5 border-service-violet/20" },
  { name: "Auvergne-Rhône-Alpes", depts: "01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74", color: "bg-service-cyan/5 border-service-cyan/20" },
  { name: "Provence-Alpes-Côte d'Azur", depts: "04, 05, 06, 13, 83, 84", color: "bg-service-orange/5 border-service-orange/20" },
];

const RegionsSection = () => (
  <section id="regions" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-service-blue/10 text-service-blue text-sm font-semibold border border-service-blue/20 mb-4">
          <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Nos Zones d'Intervention : Réparation de Volets Roulants à Paris, Île-de-France et Partout en France - Intervention Rapide 48h
        </h2>
        <p className="text-muted-foreground">
          Répar'Action Volets couvre l'ensemble du territoire français, avec une présence renforcée à Paris et en Île-de-France. Nos techniciens certifiés RGE et Qualibat interviennent rapidement dans toutes les régions pour la réparation, l'installation et la motorisation de vos volets roulants.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ scale: 1.02 }}
            className={`flex items-start gap-3 rounded-xl p-4 border transition-all card-shadow hover:card-shadow-hover ${r.color}`}
          >
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-md border border-white/10 ${r.highlight ? "bg-service-blue/10" : "bg-muted"}`}>
               <MapPin className={`h-4 w-4 ${r.highlight ? "text-service-blue" : "text-muted-foreground"}`} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${r.highlight ? "text-service-blue" : "text-foreground"}`}>{r.name}</span>
                {r.highlight && <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-service-blue text-white">PRIORITAIRE</span>}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{r.depts}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 text-center">
        <Link to="/zones-intervention" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
          Voir toutes nos zones d'intervention <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default RegionsSection;
