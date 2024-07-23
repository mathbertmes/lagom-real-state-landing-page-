"use client"

import { useEffect, useState } from "react"
import ModalMenu from "@/components/menu-modal"



export const MenuModalProvider= () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }

  return(
    <>
      <ModalMenu  />
    </>
  )
}