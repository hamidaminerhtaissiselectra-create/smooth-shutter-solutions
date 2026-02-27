import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReparationVolets from "./pages/services/ReparationVolets";
import InstallationRemplacement from "./pages/services/InstallationRemplacement";
import Vitrerie from "./pages/services/Vitrerie";
import MotorisationDomotique from "./pages/services/MotorisationDomotique";
import DepannageExpress from "./pages/services/DepannageExpress";
import ZonesIntervention from "./pages/ZonesIntervention";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import AboutUs from "./pages/AboutUs";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import FloatingCallButton from "./components/FloatingCallButton";
import CookieConsent from "./components/CookieConsent";

// Imports des pages localisées
import ReparationVoletAubervilliers from "./pages/zones/ReparationVoletAubervilliers";
import ReparationVoletBagnolet from "./pages/zones/ReparationVoletBagnolet";
import ReparationVoletBobigny from "./pages/zones/ReparationVoletBobigny";
import ReparationVoletBoulogneBillancourt from "./pages/zones/ReparationVoletBoulogneBillancourt";
import ReparationVoletCergy from "./pages/zones/ReparationVoletCergy";
import ReparationVoletCorbeilEssonnes from "./pages/zones/ReparationVoletCorbeilEssonnes";
import ReparationVoletCourbevoie from "./pages/zones/ReparationVoletCourbevoie";
import ReparationVoletCréteil from "./pages/zones/ReparationVoletCréteil";
import ReparationVoletFontenaysousBois from "./pages/zones/ReparationVoletFontenaysousBois";
import ReparationVoletIvrysurSeine from "./pages/zones/ReparationVoletIvrysurSeine";
import ReparationVoletLaDéfense from "./pages/zones/ReparationVoletLaDéfense";
import ReparationVoletLevalloisPerret from "./pages/zones/ReparationVoletLevalloisPerret";
import ReparationVoletManteslaJolie from "./pages/zones/ReparationVoletManteslaJolie";
import ReparationVoletMelun from "./pages/zones/ReparationVoletMelun";
import ReparationVoletMontreuil from "./pages/zones/ReparationVoletMontreuil";
import ReparationVoletNeuillysurSeine from "./pages/zones/ReparationVoletNeuillysurSeine";
import ReparationVoletNoisyleSec from "./pages/zones/ReparationVoletNoisyleSec";
import ReparationVoletPantin from "./pages/zones/ReparationVoletPantin";
import ReparationVoletParis1 from "./pages/zones/ReparationVoletParis1";
import ReparationVoletParis10 from "./pages/zones/ReparationVoletParis10";
import ReparationVoletParis11 from "./pages/zones/ReparationVoletParis11";
import ReparationVoletParis12 from "./pages/zones/ReparationVoletParis12";
import ReparationVoletParis13 from "./pages/zones/ReparationVoletParis13";
import ReparationVoletParis14 from "./pages/zones/ReparationVoletParis14";
import ReparationVoletParis15 from "./pages/zones/ReparationVoletParis15";
import ReparationVoletParis16 from "./pages/zones/ReparationVoletParis16";
import ReparationVoletParis17 from "./pages/zones/ReparationVoletParis17";
import ReparationVoletParis18 from "./pages/zones/ReparationVoletParis18";
import ReparationVoletParis19 from "./pages/zones/ReparationVoletParis19";
import ReparationVoletParis2 from "./pages/zones/ReparationVoletParis2";
import ReparationVoletParis20 from "./pages/zones/ReparationVoletParis20";
import ReparationVoletParis3 from "./pages/zones/ReparationVoletParis3";
import ReparationVoletParis4 from "./pages/zones/ReparationVoletParis4";
import ReparationVoletParis5 from "./pages/zones/ReparationVoletParis5";
import ReparationVoletParis6 from "./pages/zones/ReparationVoletParis6";
import ReparationVoletParis7 from "./pages/zones/ReparationVoletParis7";
import ReparationVoletParis8 from "./pages/zones/ReparationVoletParis8";
import ReparationVoletParis9 from "./pages/zones/ReparationVoletParis9";
import ReparationVoletPontoise from "./pages/zones/ReparationVoletPontoise";
import ReparationVoletPuteaux from "./pages/zones/ReparationVoletPuteaux";
import ReparationVoletRambouillet from "./pages/zones/ReparationVoletRambouillet";
import ReparationVoletRueilMalmaison from "./pages/zones/ReparationVoletRueilMalmaison";
import ReparationVoletSaintCloud from "./pages/zones/ReparationVoletSaintCloud";
import ReparationVoletSaintDenis from "./pages/zones/ReparationVoletSaintDenis";
import ReparationVoletSaintGermainenLaye from "./pages/zones/ReparationVoletSaintGermainenLaye";
import ReparationVoletSaintMandé from "./pages/zones/ReparationVoletSaintMandé";
import ReparationVoletSaintOuen from "./pages/zones/ReparationVoletSaintOuen";
import ReparationVoletSèvres from "./pages/zones/ReparationVoletSèvres";
import ReparationVoletVersailles from "./pages/zones/ReparationVoletVersailles";
import ReparationVoletVillejuif from "./pages/zones/ReparationVoletVillejuif";
import ReparationVoletVincennes from "./pages/zones/ReparationVoletVincennes";
import ReparationVoletVitrysurSeine from "./pages/zones/ReparationVoletVitrysurSeine";
import ReparationVoletÉvry from "./pages/zones/ReparationVoletÉvry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/reparation-volets-roulants" element={<ReparationVolets />} />
          <Route path="/services/installation-remplacement-volets" element={<InstallationRemplacement />} />
          <Route path="/services/vitrerie-remplacement-vitrage" element={<Vitrerie />} />
          <Route path="/services/motorisation-domotique" element={<MotorisationDomotique />} />
          <Route path="/services/depannage-express" element={<DepannageExpress />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/qui-sommes-nous" element={<AboutUs />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          
          {/* Routes des pages localisées */}
          <Route path="/zones-intervention/reparation-volet-aubervilliers" element={<ReparationVoletAubervilliers />} />
          <Route path="/zones-intervention/reparation-volet-bagnolet" element={<ReparationVoletBagnolet />} />
          <Route path="/zones-intervention/reparation-volet-bobigny" element={<ReparationVoletBobigny />} />
          <Route path="/zones-intervention/reparation-volet-boulogne-billancourt" element={<ReparationVoletBoulogneBillancourt />} />
          <Route path="/zones-intervention/reparation-volet-cergy" element={<ReparationVoletCergy />} />
          <Route path="/zones-intervention/reparation-volet-corbeil-essonnes" element={<ReparationVoletCorbeilEssonnes />} />
          <Route path="/zones-intervention/reparation-volet-courbevoie" element={<ReparationVoletCourbevoie />} />
          <Route path="/zones-intervention/reparation-volet-créteil" element={<ReparationVoletCréteil />} />
          <Route path="/zones-intervention/reparation-volet-fontenaysous-bois" element={<ReparationVoletFontenaysousBois />} />
          <Route path="/zones-intervention/reparation-volet-ivrysur-seine" element={<ReparationVoletIvrysurSeine />} />
          <Route path="/zones-intervention/reparation-volet-la-défense" element={<ReparationVoletLaDéfense />} />
          <Route path="/zones-intervention/reparation-volet-levallois-perret" element={<ReparationVoletLevalloisPerret />} />
          <Route path="/zones-intervention/reparation-volet-mantesla-jolie" element={<ReparationVoletManteslaJolie />} />
          <Route path="/zones-intervention/reparation-volet-melun" element={<ReparationVoletMelun />} />
          <Route path="/zones-intervention/reparation-volet-montreuil" element={<ReparationVoletMontreuil />} />
          <Route path="/zones-intervention/reparation-volet-neuillysur-seine" element={<ReparationVoletNeuillysurSeine />} />
          <Route path="/zones-intervention/reparation-volet-noisyle-sec" element={<ReparationVoletNoisyleSec />} />
          <Route path="/zones-intervention/reparation-volet-pantin" element={<ReparationVoletPantin />} />
          <Route path="/zones-intervention/reparation-volet-paris-1" element={<ReparationVoletParis1 />} />
          <Route path="/zones-intervention/reparation-volet-paris-10" element={<ReparationVoletParis10 />} />
          <Route path="/zones-intervention/reparation-volet-paris-11" element={<ReparationVoletParis11 />} />
          <Route path="/zones-intervention/reparation-volet-paris-12" element={<ReparationVoletParis12 />} />
          <Route path="/zones-intervention/reparation-volet-paris-13" element={<ReparationVoletParis13 />} />
          <Route path="/zones-intervention/reparation-volet-paris-14" element={<ReparationVoletParis14 />} />
          <Route path="/zones-intervention/reparation-volet-paris-15" element={<ReparationVoletParis15 />} />
          <Route path="/zones-intervention/reparation-volet-paris-16" element={<ReparationVoletParis16 />} />
          <Route path="/zones-intervention/reparation-volet-paris-17" element={<ReparationVoletParis17 />} />
          <Route path="/zones-intervention/reparation-volet-paris-18" element={<ReparationVoletParis18 />} />
          <Route path="/zones-intervention/reparation-volet-paris-19" element={<ReparationVoletParis19 />} />
          <Route path="/zones-intervention/reparation-volet-paris-2" element={<ReparationVoletParis2 />} />
          <Route path="/zones-intervention/reparation-volet-paris-20" element={<ReparationVoletParis20 />} />
          <Route path="/zones-intervention/reparation-volet-paris-3" element={<ReparationVoletParis3 />} />
          <Route path="/zones-intervention/reparation-volet-paris-4" element={<ReparationVoletParis4 />} />
          <Route path="/zones-intervention/reparation-volet-paris-5" element={<ReparationVoletParis5 />} />
          <Route path="/zones-intervention/reparation-volet-paris-6" element={<ReparationVoletParis6 />} />
          <Route path="/zones-intervention/reparation-volet-paris-7" element={<ReparationVoletParis7 />} />
          <Route path="/zones-intervention/reparation-volet-paris-8" element={<ReparationVoletParis8 />} />
          <Route path="/zones-intervention/reparation-volet-paris-9" element={<ReparationVoletParis9 />} />
          <Route path="/zones-intervention/reparation-volet-pontoise" element={<ReparationVoletPontoise />} />
          <Route path="/zones-intervention/reparation-volet-puteaux" element={<ReparationVoletPuteaux />} />
          <Route path="/zones-intervention/reparation-volet-rambouillet" element={<ReparationVoletRambouillet />} />
          <Route path="/zones-intervention/reparation-volet-rueil-malmaison" element={<ReparationVoletRueilMalmaison />} />
          <Route path="/zones-intervention/reparation-volet-saint-cloud" element={<ReparationVoletSaintCloud />} />
          <Route path="/zones-intervention/reparation-volet-saint-denis" element={<ReparationVoletSaintDenis />} />
          <Route path="/zones-intervention/reparation-volet-saint-germainen-laye" element={<ReparationVoletSaintGermainenLaye />} />
          <Route path="/zones-intervention/reparation-volet-saint-mandé" element={<ReparationVoletSaintMandé />} />
          <Route path="/zones-intervention/reparation-volet-saint-ouen" element={<ReparationVoletSaintOuen />} />
          <Route path="/zones-intervention/reparation-volet-sèvres" element={<ReparationVoletSèvres />} />
          <Route path="/zones-intervention/reparation-volet-versailles" element={<ReparationVoletVersailles />} />
          <Route path="/zones-intervention/reparation-volet-villejuif" element={<ReparationVoletVillejuif />} />
          <Route path="/zones-intervention/reparation-volet-vincennes" element={<ReparationVoletVincennes />} />
          <Route path="/zones-intervention/reparation-volet-vitrysur-seine" element={<ReparationVoletVitrysurSeine />} />
          <Route path="/zones-intervention/reparation-volet-évry" element={<ReparationVoletÉvry />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCallButton />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
