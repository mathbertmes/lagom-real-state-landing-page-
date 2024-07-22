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
        <div className="w-[100vw] lg:max-w-7xl mt-10 bg-[#f3f0eb] rounded-3xl pt-4 pb-8 px-2 lg:py-20 lg:px-10 mx-auto">
          <GalleryHeader />
          <Carousel images={filtredImages}/>
          {/* <div className="mt-10">
            <video 
            className="rounded-lg"
            width="100%"
            playsInline
            loop
            muted
            controls={true}
            
            src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video>
          </div> */}
        </div>
      </div>

    </Container>
  )
}

export default GallerySection;