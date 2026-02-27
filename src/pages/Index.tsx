import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import RegionsSection from "@/components/RegionsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="relative">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProcessSection />
    <TestimonialsSection />
    <QuoteFormSection />
    <RegionsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
