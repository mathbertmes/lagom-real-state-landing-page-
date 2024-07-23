import Image from "next/image";
import TowersImg from "@/public/images/lagom-condominios.jpg"

const Towers = () => {
  return(
      <div className="mt-14 mb-14 w-full">
        {/* <div className="max-w-7xl mx-auto flex justify-center lg:justify-normal">
        <div className='border-b-2 border-black lg:border-b-0 mb-3'>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2 tracking-tight">
              Condomínios
            </h1>
          </div>
          </div> */}
      {/* <img 
      src={TowersImg.src}
      alt="Lagom Image" 
      className="lg:h-[90vh] object-cover"
      width="100%"
     
      /> */}
      <div className="flex justify-center">
      <video 
          width="100%"
          
          controls={true}
          className="max-w-7xl lg:rounded-[50px]"
          src="https://res.cloudinary.com/dzk9pjhvo/video/upload/v1720551413/IMG_5541_1_ovnxj3.mov" ></video> 
          </div>
    </div>  

  )
}

export default Towers;