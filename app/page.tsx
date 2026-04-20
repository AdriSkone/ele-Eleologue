import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkshopsSection from "@/components/WorkshopsSection";
import ExperienceSection from "@/components/ExperienceSection";
import StoriesSection from "@/components/StoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProfessionnelsSection from "@/components/ProfessionnelsSection";
import PetitDejeunerSection from "@/components/PetitDejeunerSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkshopsSection />
      <ExperienceSection />
      <StoriesSection />
      <TestimonialsSection />
      <ProfessionnelsSection />
      <PetitDejeunerSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
