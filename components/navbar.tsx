import logo from "@/public/logo.webp";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] bg-[#D9D9D9]">
      <div className="flex justify-between items-center py-5 px-3">
        <img src={logo.src} alt="Logo" className="h-12 w-auto" />
        <nav className="hidden lg:flex lg:gap-5" >
          <a className="text-lg" href="/">Home</a>
          <a className="text-lg" href="/">Galeria</a>
          <a className="text-lg" href="/">Plantas</a>
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