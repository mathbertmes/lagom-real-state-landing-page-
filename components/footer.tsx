import Link from "next/link";
import Container from "./ui/container";
import logo from "@/public/logo.webp";


const Footer = () => {
  return (
    <Container>
      <div className="w-full bg-[#ece5dd] ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center gap-6 lg:justify-between h-[30vh] items-center">
          <div>
          <Link href="/">
            <img src={logo.src} alt="Logo" className="h-12 lg:h-16 w-auto cursor-pointer" />
          </Link>
          </div>
          <div>
            <p>Numero: +55 4798849-4549</p>
            <p>Email: mathbertemes@gmail.com</p>
          </div>
          <div>
            <p className="cursor-pointer">Instagram</p>
            <p className="cursor-pointer">Facebook</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer;