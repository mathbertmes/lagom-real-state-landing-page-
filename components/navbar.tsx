import logo from "@/public/logo.webp";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#f3f0eb]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-3">
        <img src={logo.src} alt="Logo" className="h-12 lg:h-16 w-auto" />
        <nav className="hidden lg:flex lg:gap-5" >
          <Link href="/" className="text-lg">Home</Link>
          <Link href="#gallery-section" className="text-lg">Galeria</Link>
          <Link href="#layouts-section" className="text-lg">Plantas</Link>
        </nav>
        <div>
          <button className="bg-gray-800 py-2 px-4 lg:py-4 lg:px-8 text-white rounded-md lg:text-md">
            Contacte-nos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;