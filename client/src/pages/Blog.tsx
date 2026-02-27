import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog Expert Volets - Conseils & Guides | Répar'Action Volets";
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://reparaction-volets.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://reparaction-volets.fr/blog" }
      ]
    };

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    return () => {
      document.head.removeChild(scriptBreadcrumb);
    };
  }, []);

  // Get unique categories
  const categories = [...new Set(blogArticles.map((a) => a.category))];

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Blog Expert</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Blog Expert Volets & Vitrerie
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-6 leading-relaxed">
              Conseils professionnels, guides d'entretien, comparatifs de marques et actualités du secteur. {blogArticles.length} articles pour tout savoir sur vos volets roulants et votre vitrerie.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span key={cat} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden border border-accent/10 card-shadow hover:card-shadow-hover transition-all">
            <div className="p-8 md:p-10">
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-4">
                ⭐ Article à la une — {blogArticles[0].category}
              </span>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">{blogArticles[0].title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{blogArticles[0].excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {blogArticles[0].date}</div>
                  <div className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {blogArticles[0].author}</div>
                </div>
                <Link to={`/blog/${blogArticles[0].slug}`} className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Tous nos articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogArticles.slice(1).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all"
              >
                <div className="p-6">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {article.date}</div>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-sm"
                  >
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Besoin d'une intervention ?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nos experts sont disponibles pour vous conseiller et intervenir rapidement. Contactez-nous dès maintenant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5 gap-2 rounded-full">
                <a href="tel:0603205967">06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
