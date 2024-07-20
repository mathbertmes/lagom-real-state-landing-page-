import { ImageProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Divide } from "phosphor-react"

interface GalleryImagesProps{
  images: ImageProps[]
}


const GalleryImages: React.FC<GalleryImagesProps> = ({
  images
}) => {
  return(
    <main className="mx-auto max-w-[1960px] p-4">
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">

    {images.map(({ id, public_id, format, blurDataUrl }) => (
      <Link
        key={id}
        href={`/?photoId=${id}`}
        as={`/p/${id}`}
        shallow
        className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
      >
        <Image
          alt="Next.js Conf photo"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
          style={{ transform: "translate3d(0, 0, 0)" }}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
          width={800}
          height={480}
          sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
        />
      </Link>
    ))}
  </div>
  </main>
  )
}

export default GalleryImages;