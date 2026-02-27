import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

interface RepairShowcaseSectionProps {
  image: string;
  title: string;
  description: string;
  highlights: string[];
}

const RepairShowcaseSection = ({ image, title, description, highlights }: RepairShowcaseSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Contenu à droite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{highlight}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              {[
                { icon: Zap, label: "Diagnostic", value: "15 min" },
                { icon: Shield, label: "Garantie", value: "3 ans" },
                { icon: Clock, label: "Intervention", value: "48h max" },
              ].slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="font-bold text-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RepairShowcaseSection;
