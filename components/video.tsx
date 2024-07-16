"use client"

const Video = () => {

  return(
    <div>
      <video 
          width="100%"
          playsInline
          loop
          muted
          controls={false}
          autoPlay
          src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video>
    </div>
  )
}

export default Video;