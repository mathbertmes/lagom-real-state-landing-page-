import imagesResult from "@/lib/image-results";
import Container from "../ui/container";
import Carousel from "./carousel";
import { useRouter } from "next/navigation";
import GalleryHeader from "./gallery-header";


const GallerySection = async () => {

  const image = await imagesResult()
  const filtredImages = image.filter(image => parseInt(image.height)  < 2000)

  
  return(
    <Container>
      <div className="">
        <div className="w-[100vw] lg:w-[90vw] mt-10 bg-[#D9D9D9] rounded-3xl py-4 px-2 lg:py-20 lg:px-20 mx-auto">
          <GalleryHeader />
          <Carousel images={filtredImages}/>
          <div className="mt-10">
            <video 
            className="rounded-lg"
            width="100%"
            playsInline
            loop
            muted
            controls={true}
            
            src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default GallerySection;