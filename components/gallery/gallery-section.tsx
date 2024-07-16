
import imagesResult from "@/lib/image-results";
import Container from "../ui/container";
import Carousel from "./carousel";


const GallerySection = async () => {

  const image = await imagesResult()
  return(
    <Container>
      <div className="mt-10 bg-[#D9D9D9] h-[100vh] rounded-3xl  py-20 px-20">
        <div>
          <h1 className="text-7xl font-bold">
            Galeria
          </h1>
        </div>
        <Carousel images={image}/>
      </div>

    </Container>
  )
}

export default GallerySection;