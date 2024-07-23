import WhatsappIcon from "@/public/images/2062095_application_chat_communication_logo_whatsapp_icon.svg.png"

const ContactMeSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='border-b-2 border-black lg:border-b-0 mb-3  '>
          <h1 className='text-5xl lg:text-7xl font-bold tracking-tight mb-2 lg:mb-0'>
            Contatos
          </h1>
        </div>
      </div>
      <div>
        <img src={WhatsappIcon.src} alt="" />
      </div>
    </div>
  )
}

export default ContactMeSection;