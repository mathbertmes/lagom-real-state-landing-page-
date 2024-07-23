
import ContactMeSection from "@/components/contact-section";
import GallerySection from "@/components/gallery/gallery-section";
import LocationSection from "@/components/location-section";
import PlantsSection from "@/components/plants/plants-section";
import Towers from "@/components/towers";
import Video from "@/components/video";


export default function Home() {
  return (
    <div>
      <Video />
      <GallerySection />
      <PlantsSection />
      <ContactMeSection />
      <LocationSection apiKey={process.env.GOOGLE_MAPS_API_KEY} mapId={process.env.GOOGLE_MAP_ID}/>
    </div>
  );
}
