import { ImageProps } from '@/types'
import Image from "next/image";
import React from 'react'

type PropType = {
  selected: boolean
  index: number
  image: ImageProps
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide_modal'.concat(
        selected ? ' embla-thumbs__slide_modal--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number_modal"
      >
        <Image
                  src={`https://res.cloudinary.com/${
                    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                  }/image/upload/c_scale,w_180/${
                    props.image.public_id
                  }.${props.image.format}`}
                  width={180}
                  height={120}
                  priority
                  alt="Next.js Conf image"
                 
                />
      </button>
    </div>
  )
}
