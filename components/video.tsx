"use client"

const Video = () => {

  return(
    <div className="relative">
      <img 
      src="https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559630/lagom-gallery/lga_04_Aerea_04_EF2_v2.jpg-name-4e355e1c4ba1112ccf24a837e7d74719f7b05bf4cc23a931c929aded7a2a1956_voh6yw.webp" 
      alt="Lagom Image" 
      className="hidden lg:block h-[90vh] object-cover"
      width="100%"
      />
      <img 
      src="https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559628/lagom-gallery/11da9d445c6c0eedbfed57fa0d7f355fea3dff696a607ef64137793ff52def4b.jpg-name-e1287181980ea8789cc089fae76e371a645bd93ede41420fc635f52e9a6d8c0e_m8reuz.webp" 
      alt="Lagom Image" 
      className="block lg:hidden h-[90vh] object-cover"
      width="100%"
      />

{/* <img 
      src="https://res.cloudinary.com/dzk9pjhvo/image/upload/v1720559631/lagom-gallery/LGA_06_Voo_Fachada_Condominio_A_EF.jpg-name-bac12c14245be96ed2130ffa9c7fc3a6426802d3b23e387907ca7b76d8afc4e7_baamrv.webp" 
      alt="Lagom Image" 
      className="object-cover sm:hidden md:block"
      width="100%"
      /> */}

      
      {/* <video 
          width="100%"
          playsInline
          loop
          muted
          controls={false}
          autoPlay
          src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video> */}
    </div>
  )
}

export default Video;