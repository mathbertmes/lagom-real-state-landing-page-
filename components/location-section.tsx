"use client"
import React, { useEffect } from 'react';
import {AdvancedMarker, APIProvider, Map, Marker, Pin} from '@vis.gl/react-google-maps';
import LagomLogo from "@/public/logo.webp"


const containerStyle = {
  width: '100%',
  height: '400px', // Ajuste a altura conforme necessário
};

const center = {
  lat: -27.14961814880371, // Latitude do seu empreendimento
  lng: -48.581722259521484, // Longitude do seu empreendimento
};
interface LocationProps{
  apiKey: string;
  mapId: string;
}

const LocationSection: React.FC<LocationProps> = ({
  apiKey,
  mapId
}) => {

  return(
    <div className="max-w-7xl mt-5 lg:mt-20 mx-auto pb-14">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className='border-b-2 border-black lg:border-b-0 mb-3'>
            <h1 className="text-5xl lg:text-7xl font-bold mb-2 tracking-tight">
              Localização
            </h1>
          </div>
          <p className="max-w-[400px] text-sm px-4 lg:px-0">
          O Lagom está localizado nos arredores da Lagoa do Perequê, no coração de Porto Belo. Cercado por uma extensa e exuberante paisagem, oferece um verdadeiro convite à contemplação da natureza e ao bem-estar.
          </p>
        </div>
        <div className='w-full px-4 mt-8'>
      <APIProvider apiKey={apiKey} libraries={['marker']}>
    <Map
      mapId={mapId}
      style={{width: '100%', height: '50vh'}}
      defaultCenter={{lat: -27.14961814880371, lng: -48.581722259521484}}
      defaultZoom={16}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >

      <AdvancedMarker position={{lat: -27.14961814880371, lng: -48.581722259521484}}>
      <Pin background={'#ece5dd'} borderColor={'#ece5dd'} scale={3.8} >
            {/* children are rendered as 'glyph' of pin */}
            <img src={LagomLogo.src} width="100px" height="100px"  alt="" />
          </Pin>
      </AdvancedMarker>
    

    </Map>
  </APIProvider>
  </div>
    </div>
  )
}

export default LocationSection;