import GallerySection from "@/components/gallery/gallery-section";
import Navbar from "@/components/navbar";
import PlantsSection from "@/components/plants/plants-section";
import Towers from "@/components/towers";
import Video from "@/components/video";
import Image from "next/image";

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
