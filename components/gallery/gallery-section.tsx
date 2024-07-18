import imagesResult from "@/lib/image-results";
import Container from "../ui/container";
import Carousel from "./carousel";


const GallerySection = async () => {

  const image = await imagesResult()

  
  return(
    <Container>
      <div className="">
        <div className="w-[100vw] lg:w-[90vw] mt-10 bg-[#D9D9D9] rounded-3xl lg:py-20 lg:px-20 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">
              Galeria
            </h1>
            <button className="bg-gray-800 py-2 px-3 lg:py-4 lg:px-6 text-white rounded-md text-sm lg:text-md">
              Todas as mídias
            </button>
          </div>
          <Carousel images={image}/>
        </div>
      </div>

    </Container>
  )
}

export default GallerySection;