"use client"
import Container from "../ui/container";
import MirraTipo1 from "@/public/images/condominio-mirra/mirra_tipo_01.jpg"
import MirraTipo2e7 from "@/public/images/condominio-mirra/mirra_tipo_02-07.jpg"
import MirraTipo3e6 from "@/public/images/condominio-mirra/mirra_tipo_03-06.jpg"
import MirraTipo4e5 from "@/public/images/condominio-mirra/mirra_tipo_04-05.jpg"
import MirraDuplex1Piso1 from "@/public/images/condominio-mirra/mirra_tipo_dulex-1-piso-1.jpg"
import MirraDuplex1Piso2 from "@/public/images/condominio-mirra/mirra_tipo_dulex-1-piso-2.jpg"
import MirraDuplex2Piso1 from "@/public/images/condominio-mirra/mirra_tipo_dulex-2-piso-1.jpg"
import MirraDuplex2Piso2 from "@/public/images/condominio-mirra/mirra_tipo_dulex-2-piso-2.jpg"
import MassalaTipo1 from "@/public/images/condominio-massala/tipo_01.jpg"
import MassalaTipo2 from "@/public/images/condominio-massala/tipo_02.jpg"
import MassalaTipo3 from "@/public/images/condominio-massala/tipo_03.jpg"
import AreaImg from "@/public/images/area.png"
import BedImg from "@/public/images/bed.png"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Label } from "../ui/label";





const PlantsSection = () => {
  const [condominio, setCondominio] = useState(0)
  const [layout, setLayout] = useState(0)
  const [selectedValueMassala, setSelectedValueMassala] = useState('0');
  const [selectedValueMirra, setSelectedValueMirra] = useState("0");

  const condominioMirra = [
    { 
      tipo: "Tipo 01",
      piso1Img: MirraTipo1,
      piso2Img: undefined,
      meters: 114,
      suits: 3
    },
    { 
      tipo: "Tipo 02/07",
      piso1Img: MirraTipo2e7,
      piso2Img: undefined,
      meters: 80,
      suits: 2
    },
    { 
      tipo: "Tipo 03/06",
      piso1Img: MirraTipo3e6,
      piso2Img: undefined,
      meters: 75,
      suits: 2
    },
    { 
      tipo: "Tipo 04/05",
      piso1Img: MirraTipo4e5,
      piso2Img: undefined,
      meters: 40,
      suits: 1
    },
    { 
      tipo: "Duplex 1",
      piso1Img: MirraDuplex1Piso1,
      piso2Img: MirraDuplex1Piso2,
      meters: 144,
      suits: 3
    },
    { 
      tipo: "Duplex 2",
      piso1Img: MirraDuplex2Piso1,
      piso2Img: MirraDuplex2Piso2,
      meters: 135,
      suits: 3
    },
  ]

  const condominioMassala = [
    { 
      tipo: "Tipo 01",
      image: MassalaTipo1,
      meters: 199,
      suits: 4
    },
    { 
      tipo: "Tipo 02",
      image: MassalaTipo2,
      meters: 170,
      suits: 3
    },
    { 
      tipo: "Tipo 03",
      image: MassalaTipo3,
      meters: 199,
      suits: 4
    },
  ]

  const handleSelectMirra = () => {
    if(condominio === 1) return
    setCondominio(1)
    setLayout(0)
    setSelectedValueMirra("0")
  }
  const handleSelectMassala = () => {
    if(condominio === 0) return
    setCondominio(0)
    setLayout(0)
    setSelectedValueMassala("0")
  }

  const handleChangeMassala = (value : string) => {
    setLayout(parseInt(value))
    setSelectedValueMassala(value)
  }
  const handleChangeMirra = (value : string) => {
    setLayout(parseInt(value))
    setSelectedValueMirra(value)
  }


  return(
    <Container>
      <div className="max-w-7xl mx-auto h-[100vh]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className='border-b-2 border-black lg:border-b-0 mb-3  '>
            <h1 className="text-4xl lg:text-7xl font-bold mb-2 tracking-tight">
              Plantas
            </h1>
          </div>
          <p className="max-w-[400px] text-sm">Navegue pelas plantas e imagine-se vivendo em um ambiente que combina sofisticação, inovação e conforto. Descubra o seu novo lar e transforme seus sonhos em realidade.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center w-full lg:justify-between">

        
        <div id="cond_options" className="flex lg:flex-col gap-14 justify-center mt-4 font-semibold text-[26px]">
          <div onClick={handleSelectMassala} 
          className={cn(
            "flex flex-col pb-5 lg:pr-5 items-center border-b-2 lg:border-b-0 lg:border-r-2 cursor-pointer",
            condominio === 0 ? "border-black" : ""
          )}
          >
            <p>Condomínio</p>
            <p>Massala</p>
          </div>
          <div onClick={handleSelectMirra} 
          className={cn(
            "flex flex-col pb-5 lg:pr-5 items-center border-b-2 lg:border-b-0 lg:border-r-2 cursor-pointer",
            condominio === 1 ? "border-black" : ""
          )}>
            <p>Condomínio</p>
            <p>Mirra</p>
          </div>
        </div>
        <div>
        <div id="options" className="flex justify-center mt-10 mb-10">
          <div>
          <Label className="font-semibold">Selecione o tipo de panta:</Label>
          {condominio === 0 ? (
            <Select value={selectedValueMassala} onValueChange={(value) => {
              handleChangeMassala(value)
            }}>
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="w-[250px]">
                <SelectGroup >
                  
                  {condominioMassala.map((planta, index) => (
                    <SelectItem key={planta.tipo} value={`${index}`}>{planta.tipo} - {planta.meters}M²</SelectItem>
                  ))}
                    
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Select value={selectedValueMirra} onValueChange={(value) => {
              handleChangeMirra(value)

            }}>
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="w-[250px]">
                <SelectGroup>
                  
                  {condominioMirra.map((planta, index) => (
                    <SelectItem key={planta.tipo} value={`${index}`}>{planta.tipo} - {planta.meters}M²</SelectItem>
                  ))}
                    
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          {/* <Select onValueChange={(value) => {
            handleChange(value)
          }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {condominio === 1 ? 
                  condominioMirra.map((planta, index) => (
                    <SelectItem key={planta.tipo} value={`${index}`}>{planta.tipo}</SelectItem>
                  )) 
                : 
                condominioMassala.map((planta, index) => (
                  <SelectItem key={planta.tipo} value={`${index}`}>{planta.tipo}</SelectItem>
                ))
                  }
              </SelectGroup>
            </SelectContent>
          </Select> */}
          </div>
        </div>
        <div id="images" className="flex justify-center mt-5">
          <div >
          {condominio === 1 ? (
              condominioMirra.map((planta, index) => {
                if(index === layout){
                  return (
                    <div key={index} className="flex flex-col lg:flex-row">
                      <div className="text-center text-lg">
                      {planta.piso2Img && (
                        <h2>Piso 1</h2>
                      )}
                      <Image 
                        src={planta.piso1Img}
                        width={800}
                        height={420}
                        alt="layout img 1"
                      />
                      </div>
                      {planta.piso2Img && (
                        <div className="text-center text-lg">
                        <h2>Piso 2</h2>
                        <Image 
                          src={planta.piso2Img}
                          width={800}
                          height={420}
                          alt="layout img 2"
                        />
                        </div>
                      )}
                    </div>
                  );
                }              
              })
          ) : (
            condominioMassala.map((planta, index) => (
              index == layout && 
              <Image 
                src={planta.image}
                width={800}
                height={420}
                alt="layout img"
              />       
            ))
          )}
          </div>
        </div>
        </div>
        <div id="features">
          {condominio === 0 ? (
            <div className="flex items-end justify-center gap-10 lg:flex-col">
              <div className="flex flex-col text-center">
                <img src={AreaImg.src} alt="" />
                <p>{condominioMassala[parseInt(selectedValueMassala)].meters}M²</p>
              </div>
              <div className="text-center">
                <img src={BedImg.src} alt="" />
                <p>{condominioMassala[parseInt(selectedValueMassala)].suits} Suites</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-end justify-center gap-10 lg:flex-col">
              <div className="flex flex-col text-center">
                <img src={AreaImg.src} alt="" />
                <p>{condominioMirra[parseInt(selectedValueMirra)].meters}M²</p>
              </div>
              <div className="text-center">
                <img src={BedImg.src} alt="" />
                <p>{condominioMirra[parseInt(selectedValueMirra)].suits} Suites</p>
              </div>
            </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </Container>
  )
}

export default PlantsSection;