"use client"

import { ImageProps } from '@/types';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MouseEventHandler, useCallback } from 'react';
import ClassNames from 'embla-carousel-class-names'
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
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


  const imagesFiltered = [
    "https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559631/lagom-gallery/LGA_16_Visual_Pedestre_EF_v2.jpg-name-059e211c136d582b10eebd221fcd03f59478eb42d360fcaf637e0b32602f7f4e_sepqgy.webp",
    "https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559640/lagom-gallery/LGA_39_Festas_Condominio_B_EF.jpg-name-2202bd6d3a7835cdbb347ef2378bf4402923c903f41cef17858b28e9eca76206_y25v6s.webp",
    "https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559642/lagom-gallery/LGA_44_Fitness_Condominio_B_EF.jpg-name-bc2d0ccb3242c7e6f702934c438fca3ffd04f27dababa4684369a953ef1ad78d_iuuanf.webp",
    "https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559629/lagom-gallery/LGA_02_Aerea_02_EF_v2.jpg-name-cbed7af4f011d8a84f6e305ccbffd6531ef7b95a103bb8ce2dec74e30b9e39ed_je05am.webp",
    "https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559645/lagom-gallery/LGA_51_Piscina_coberta_condominio_B_EF.jpg-name-73ed8f6aee3f804e2bed9201ded397184c6c6bc542c9fb07c1acdb21aa3257bc_eqpdvh.webp",
    ""
  ]


  const onPreview = (index: number) => {
    useGallery.onOpen(index)
    console.log(`atual index: ${useGallery.index}`)
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
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