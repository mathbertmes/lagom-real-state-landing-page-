
import GallerySection from "@/components/gallery/gallery-section";
import PlantsSection from "@/components/plants/plants-section";
import Towers from "@/components/towers";
import Video from "@/components/video";


export default function Home() {
  return (
    <div>
      <Video />
      <GallerySection />
      <Towers />
      <PlantsSection />
    </div>
  );
}
