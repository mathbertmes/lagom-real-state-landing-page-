import Link from "next/link";
import WhatsappIcon from "@/public/images/2062095_application_chat_communication_logo_whatsapp_icon.svg.png"


const ContactMeSection = () => {
  return(
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
      <div className='border-b-2 border-black lg:border-b-0 mb-3  '>
            <h1 className="text-4xl lg:text-7xl font-bold mb-2 tracking-tight">
              Plantas
            </h1>
          </div>
          </div>
      <Link href="https://wa.me/+55988494549">
        <div>
          <img src={WhatsappIcon.src} alt="" />
        </div>
      </Link>
      </div>
  )
}

export default ContactMeSection;