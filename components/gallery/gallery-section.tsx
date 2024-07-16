
import imagesResult from "@/lib/image-results";
import Container from "../ui/container";
import Carousel from "./carousel";


const GallerySection = async () => {

  const image = await imagesResult()
  return(
    <Container>
      <div className="mt-10 bg-[#D9D9D9] h-[100vh] rounded-3xl  lg:py-20 lg:px-20">
        <div className="flex justify-between">
          <h1 className="text-7xl font-bold">
            Galeria
          </h1>
          <button className="bg-gray-800 py-4 px-8 text-white rounded-md lg:text-md">
            Todas as mídias
          </button>
        </div>
        <Carousel images={image}/>
      </div>

    </Container>
  )
}

export default GallerySection;