import Modal from "@/components/ui/modal"
import { useMenuModal } from "@/hooks/use-modal-menu";
import Link from "next/link";
import IconButton from "./ui/icon-button";
import { X } from "lucide-react";




const ModalMenu = () => {
  const menuModal = useMenuModal()



  return(
    <Modal
      open={menuModal.isOpen}
      onClose={menuModal.onClose}
    >
      <div className="absolute left-4 top-4">
                    <IconButton onClick={() => menuModal.onClose()} icon={<X size={15}/>}/>
                  </div>
      <div className="h-[100vh] w-[70vw] bg-[#f3f0eb] flex flex-col justify-center items-center gap-8">   
        <div className="flex flex-col gap-8">
        <Link onClick={() => menuModal.onClose()} href="/" className="text-5xl">Home</Link>
          <Link onClick={() => menuModal.onClose()} href="/#gallery-section" className="text-5xl">Galeria</Link>
          <Link onClick={() => menuModal.onClose()} href="/#layouts-section" className="text-5xl">Plantas</Link>
          <Link onClick={() => menuModal.onClose()} href="#contact-section" className="text-5xl">Contatos</Link>
        </div>
        </div>    
    
    </Modal>
  )
}

export default ModalMenu;