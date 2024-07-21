import Image from "next/image";
import TowersImg from "@/public/images/lagom-condominios.jpg"

const Towers = () => {
  return(
      <div className="mt-14 mb-14 w-full">

      <img 
      src={TowersImg.src}
      alt="Lagom Image" 
      className="lg:h-[90vh] object-cover"
      width="100%"
     
      />
    </div>  

  )
}

export default Towers;