import imagesResult from "@/lib/image-results";
import GalleryImages from "./gallery-images";


const GalleryGrid = async () => {

  const images = await imagesResult()

  return(
   <GalleryImages images={images} />
  )
}

export default GalleryGrid;