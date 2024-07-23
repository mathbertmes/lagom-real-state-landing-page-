import imagesResult, { imagesMainResult } from "@/lib/image-results";
import Container from "../ui/container";
import Carousel from "./carousel";
import GalleryHeader from "./gallery-header";


const GallerySection = async () => {

  // const image = await imagesResult()
  const image = await imagesMainResult()
  const filtredImages = image.filter(image => parseInt(image.height)  < 2000)

  
  return(
    <Container>
      <div className="mb-14">
        <div id="gallery-section" className="w-[100vw] lg:max-w-7xl mt-10 bg-[#f3f0eb] rounded-3xl pt-4 pb-8 px-2 lg:py-20 lg:px-10 mx-auto ">
          <GalleryHeader />
          <Carousel images={filtredImages}/>
          <div className="flex justify-center mt-14">
      <video 
          width="100%"
         
          controls={true}
          className="max-w-7xl rounded-md lg:rounded-[22px]"
          src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video> 
          </div>
    
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