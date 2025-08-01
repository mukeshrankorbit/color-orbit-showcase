import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
