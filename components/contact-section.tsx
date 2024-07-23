import WhatsappIcon from "@/public/images/2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactMeSection = () => {
  return (
    <div className="max-w-7xl mx-auto pb-14">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className='border-b-2 border-black lg:border-b-0 mb-3'>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2 tracking-tight">
              Contatos
            </h1>
          </div>
          <p className="max-w-[400px] text-sm px-4 lg:px-0">
         Utilize o formulário de contato abaixo para nos enviar suas informações e entraremos em contato, ou se preferir, entre em contato diretamente pelo WhatsApp.
          </p>
        </div>
      <div className="mt-6 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center">
        <div className='w-full lg:w-auto px-4 lg:px-0'>
        <div className='flex flex-col gap-5'>
          <div className="flex flex-col lg:flex-row gap-5">
            <Input className="w-full lg:w-[300px] p-5" placeholder="Nome"/>
            <Input className="w-full lg:w-[300px] p-5" placeholder="Email"/>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <Textarea className="w-full lg:w-[300px]" placeholder="Mensagem"/>
            <div className="flex w-full lg:w-[300px] flex-col gap-5">
              <Input className="w-full p-5" placeholder="Numero"/>
              <button className="rounded-md p-2 w-full bg-[#ece5dd] font-semibold">Enviar</button>
            </div>
          </div>
        </div>
        </div>
        <div>
          <h2 className="text-lg">Ou</h2>
        </div>
        <div className="w-full lg:w-auto px-4 lg:px-0">
          <div className="w-full lg:w-[500px] bg-[#25d342] rounded-lg flex items-center relative cursor-pointer">
            <img className='w-[50px] h-[50px] lg:h-[70px] lg:w-[70px]' src={WhatsappIcon.src} alt="" />
            <div className="text-white ml-5">
              <p className="text-xl absolute inset-0 flex items-center justify-center font-semibold">Converse conosco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeSection;