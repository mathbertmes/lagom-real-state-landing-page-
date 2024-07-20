import Image from "next/image";
import TowersImg from "@/public/images/lagom-condominios.jpg"

const Towers = () => {
  return(
    <div className="my-10">
      <div className="mb-5 lg:mb-10 w-ful flex justify-center lg:justify-normal">
        <h1 className="text-4xl lg:text-7xl font-bold tracking-tight">
          Condomínios
        </h1>
      </div>
      <Image 
        src={TowersImg}
        alt="towers image"
        className="rounded-lg"
        width={1920}
      />
    </div>
  )
}

export default Towers;