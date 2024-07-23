import Modal from "@/components/ui/modal"
import { useGalleryModal } from "@/hooks/use-modal-gallery"
import Image from "next/image";
import { ImageProps } from "@/types"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { Thumb } from "./thumb";
import "./gallery.css"
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ModalCarouselProps{
  images: ImageProps[]
}


const CarouselWithThumb:React.FC<ModalCarouselProps> = ({
  images
}) => {
  const galleryModal = useGalleryModal()

  const [selectedIndex, setSelectedIndex] = useState(galleryModal.index)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({loop: true})
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    loop: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  const handleNextImage = () => {
    if (!emblaMainApi || !emblaThumbsApi) return
    if(selectedIndex === images.length -1){
      emblaMainApi.scrollTo(0)
      setSelectedIndex(0)    
    }else{
      emblaMainApi.scrollTo(selectedIndex + 1)
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handlePreviewImage = () => {
    if (!emblaMainApi || !emblaThumbsApi) return
    if(selectedIndex === 0){
      emblaMainApi.scrollTo(images.length -1)
      setSelectedIndex(images.length -1)    
    }else{
      emblaMainApi.scrollTo(selectedIndex - 1)
      setSelectedIndex(selectedIndex - 1)
    }
  }
    

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    emblaMainApi.scrollTo(galleryModal.index)
  }, [emblaMainApi, onSelect])

  return(
      <div className="embla_modal">
      <div className="embla__viewport_modal" ref={emblaMainRef}>
        <div className="embla__container_modal">
          {images.map((image, index) => (
            <div className="embla__slide_modal" key={index}>
              <Image
              className="transform brightness-110 transition"
              style={{ transform: "translate3d(0, 0, 0)" }}
                  src={`https://res.cloudinary.com/${
                    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                  }/image/upload/c_scale,w_${parseInt(image.height) < 2000 ? 1920 : 500}/${
                    image.public_id
                  }.${image.format}`}
                  width={parseInt(image.height) < 2000 ? 1920 : 500}
                  height={420}
                  priority
                  alt="Next.js Conf image"
                />
            </div>
          ))}
        </div>
          <div onClick={handlePreviewImage} className="bg-black h-[35px] w-[35px] lg:h-[50px] lg:w-[50px] absolute top-[50%] rounded-full flex items-center justify-center opacity-60 cursor-pointer">
            <ChevronLeft color="white"/>
          </div>
          <div onClick={handleNextImage} className="bg-black h-[35px] w-[35px] lg:h-[50px] lg:w-[50px]  absolute top-[50%] right-0 rounded-full flex items-center justify-center opacity-60 cursor-pointer">
            <ChevronRight color="white" />
          </div>
      </div>
      <div className="embla-thumbs_modal">
        <div className="embla-thumbs__viewport_modal" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container_modal">
            {images.map((image, index) => (
              <Thumb
                image={image}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselWithThumb;