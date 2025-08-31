import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import VisionMissionSection from "@/components/VisionMissionSection";
import WhyDrChaaiSection from "@/components/WhyDrChaaiSection";
import TeaMenuSection from "@/components/TeaMenuSection";
import FoodMenuSection from "@/components/FoodMenuSection";
import BrewingModelsSection from "@/components/BrewingModelsSection";
import StoreDesignSection from "@/components/StoreDesignSection";
import MarketingStrategySection from "@/components/MarketingStrategySection";
import BrandingElementsSection from "@/components/BrandingElementsSection";
import RevenueStreamsSection from "@/components/RevenueStreamsSection";
import GrowthPlanSection from "@/components/GrowthPlanSection";
import TeamSection from "@/components/TeamSection";
import CollaborationSection from "@/components/CollaborationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StorySection />
        <VisionMissionSection />
        <WhyDrChaaiSection />
        <TeaMenuSection />
        <FoodMenuSection />
        <BrewingModelsSection />
        <StoreDesignSection />
        <MarketingStrategySection />
        <BrandingElementsSection />
        <RevenueStreamsSection />
        <GrowthPlanSection />
        <TeamSection />
        <CollaborationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
