"use client"

import { ImageProps } from '@/types';
import { EmblaCarouselType } from 'embla-carousel'
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react';
import ClassNames from 'embla-carousel-class-names'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { useGalleryModal } from '@/hooks/use-modal-gallery';
import "@/styles/main-carousel.css"
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps{
  images: ImageProps[]
}

const Carousel: React.FC<CarouselProps> = ({
  images
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000}), ClassNames()])
  const useGallery = useGalleryModal()


  const onPreview = (index: number) => {
    useGallery.onOpen(index)
  }
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return(
    <div className="embla" >
      <div className="embla__viewport mt-10 lg:mt-28" ref={emblaRef}>
      <div className="embla__container">
      {images.map(({ id, public_id, format, height}, index) => (
        <div key={id} className="embla__slide embla__class-names cursor-pointer">
        <Image
                key={id}
                onClick={() => onPreview(index)}
                alt="Next.js Conf photo"
                className="transform brightness-90 transition will-change-auto group-hover:brightness-110 mx-auto"
               
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1020/${public_id}.${format}`}
                width={1020}
                height={600}
              />
      </div>
      ))}
      </div>
      </div>
      <div onClick={onPrevButtonClick} className="bg-black h-[35px] w-[35px] lg:h-[50px] lg:w-[50px] absolute top-[50%] lg:bottom-0 rounded-full flex items-center justify-center opacity-60 cursor-pointer">
            <ChevronLeft color="white"/>
          </div>
          <div onClick={onNextButtonClick} className=" bg-black h-[35px] w-[35px] lg:h-[50px] lg:w-[50px]  absolute top-[50%] lg:bottom-0 right-0 rounded-full flex items-center justify-center opacity-60 cursor-pointer">
            <ChevronRight color="white" />
          </div>
    </div>
  )
}

export default Carousel;