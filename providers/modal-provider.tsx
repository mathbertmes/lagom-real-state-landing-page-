"use client"

import { useEffect, useState } from "react"
import ModalCarousel from "@/components/gallery/modal-gallery-section/modal-carousel"
import { ImageProps } from "@/types"

interface ModalProviderProps{
  images: ImageProps[]
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  images
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }

  return(
    <>
      <ModalCarousel images={images} />
    </>
  )
}