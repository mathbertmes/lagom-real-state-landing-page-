"use client";

import { useRouter } from "next/navigation";

const GalleryHeader = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center'>
      <div className='border-b-2 border-black lg:border-b-0 mb-3  '>
        <h1 className='text-4xl lg:text-7xl font-bold tracking-tight mb-2 lg:mb-0'>
          Galeria
        </h1>
      </div>
      <button
        onClick={() => router.push("/galeria")}
        className='bg-gray-800 py-2 px-3 lg:py-4 lg:px-6 text-white rounded-md text-xs lg:text-md'
      >
        Todas as mídias
      </button>
    </div>
  );
};

export default GalleryHeader;
