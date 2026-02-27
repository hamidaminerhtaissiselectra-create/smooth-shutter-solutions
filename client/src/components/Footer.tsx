import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* CTA Banner */}
    <div className="border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold">Prêt à réparer vos volets ?</h3>
          <p className="text-primary-foreground/70 text-sm mt-1">Contactez-nous dès maintenant pour un devis gratuit et personnalisé.</p>
        </div>
        <div className="flex gap-3">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            <Link to="/#devis">Demander un devis <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 gap-2">
            <a href="tel:0603205967"><Phone className="h-4 w-4" /> Appeler</a>
          </Button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="font-display font-bold text-lg mb-4">Répar'Action <span className="text-accent">Volets</span></h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            Spécialiste de la réparation et de l'installation de volets roulants en France depuis plus de 10 ans. Qualité, rapidité et garantie décennale.
          </p>
          <div className="flex flex-wrap gap-2">
            {["RGE", "Qualibat", "Garantie 10 ans"].map((c) => (
              <span key={c} className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent/20 text-accent">{c}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services/reparation-volets-roulants" className="hover:text-primary-foreground transition-colors">Réparation de volets</Link></li>
            <li><Link to="/services/installation-remplacement-volets" className="hover:text-primary-foreground transition-colors">Remplacement de volets</Link></li>
            <li><Link to="/services/vitrerie-remplacement-vitrage" className="hover:text-primary-foreground transition-colors">Vitrerie & Vitrage</Link></li>
            <li><Link to="/services/motorisation-domotique" className="hover:text-primary-foreground transition-colors">Motorisation & Domotique</Link></li>
            <li><Link to="/services/depannage-express" className="hover:text-primary-foreground transition-colors">Dépannage express</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link></li>
            <li><Link to="/qui-sommes-nous" className="hover:text-primary-foreground transition-colors">Qui sommes-nous</Link></li>
            <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog Expert</Link></li>
            <li><Link to="/zones-intervention" className="hover:text-primary-foreground transition-colors">Zones d'intervention</Link></li>
            <li><Link to="/#devis" className="hover:text-primary-foreground transition-colors">Devis gratuit</Link></li>
            <li><Link to="/#contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> 62 Rue Emile Zola, 77610 Fontenay-Trésigny</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><a href="tel:0603205967" className="hover:text-primary-foreground transition-colors">06 03 20 59 67</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> contact@reparaction-volets.fr</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© 2026 Répar'Action Volets. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-primary-foreground transition-colors">Politique de confidentialité</Link>
          <Link to="/cgv" className="hover:text-primary-foreground transition-colors">CGV</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
