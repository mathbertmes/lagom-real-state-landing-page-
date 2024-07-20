import logo from "@/public/images/lagom-logo-branca.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#D9D9D9]">
      <div className="flex justify-between items-center py-5 px-3">
        <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        <nav className="hidden lg:flex lg:gap-5" >
          <Link href="/" className="text-lg">Home</Link>
          <Link href="/galeria" className="text-lg">Galeria</Link>
          <Link href="/plantas" className="text-lg">Plantas</Link>
        </nav>
        <div>
          <button className="bg-gray-800 py-4 px-8 text-white rounded-md lg:text-md">
            Contacte-nos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;