import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ClubFinder from "@/components/ClubFinder";
import CoachingPricing from "@/components/CoachingPricing";
import Calculators from "@/components/Calculators";
import Blog from "@/components/Blog";
import AppPromo from "@/components/AppPromo";
import Community from "@/components/Community";
import FederationAuthority from "@/components/FederationAuthority";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <ClubFinder />
      <CoachingPricing />
      <Calculators />
      <Blog />
      <AppPromo />
      <Community />
      <FederationAuthority />
    </main>
  );
}