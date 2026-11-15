"use client";

import WhyChoose from "@/components/WhyChoose";
import { FloorCleaningHero, FloorCleaningResults, FloorCleaningGallery } from "@/components/FloorCleaningCampaign";

export default function HomePage() {
  return (
    <div>
      <FloorCleaningHero />
      <div className="home-story">
        <FloorCleaningResults />
        <FloorCleaningGallery />
        <WhyChoose />
      </div>
    </div>
  );
}
