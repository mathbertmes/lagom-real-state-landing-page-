

import imagesResult from "@/lib/image-results";
import Image from "next/image";
import Link from "next/link";
import GalleryImages from "./gallery-images";


const GalleryGrid = async () => {

  const images = await imagesResult()

  return(
   <GalleryImages images={images} />
  )
}

export default GalleryGrid;