"use client"

import { useEffect, useState } from "react"
import ModalCarousel from "@/components/gallery/modal-carousel"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }

  return(
    <>
      <ModalCarousel />
    </>
  )
}