import React from 'react'
import SpecPills from '../components/SpecPills'
import ColorToggle from '../components/ColorToggle'

export default function ComfortDRI(){
  const options = {"silver": "/assets/Airdri_ComfortDRI_Front.png", "black": "/assets/Airdri_ComfortDRI_Front_Black.png", "white": "/assets/Airdri_ComfortDRI_Front_White.png"};
  const [src, setSrc] = React.useState(options[Object.keys(options)[0]]);
  const pills = ["Warm, quiet drying", "Low noise ~67 dBA", "7\u2011year warranty"];
  return (
    <div className='bg-white'>
      <section className='section'>
        <div className='container grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='badge mb-3'>Product</div>
            <h1 className='h1'>ComfortDRI</h1>
            <SpecPills items={pills} />
            <div className='mt-4'>
              <div className='text-sm font-semibold text-brand mb-2'>Colour options</div>
              <ColorToggle options={options} onChange={(c)=>setSrc(options[c])} />
            </div>
            <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
              <div><span className='font-semibold'>Dimensions:</span> 285 × 195 × 110 mm</div><div><span className='font-semibold'>Weight:</span> 3.4 kg</div><div><span className='font-semibold'>Voltage:</span> 110–240 VAC (50/60 Hz)</div><div><span className='font-semibold'>Current:</span> &lt;9A @115V / &lt;4.5A @230V</div><div><span className='font-semibold'>Air velocity:</span> ~60 m/s</div><div><span className='font-semibold'>Outlet temp:</span> ~38 °C</div>
            </div>
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src={src} alt='ComfortDRI' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 section'>
        <div className='container'>
          <h2 className='h2'>Technology highlights</h2>
          <ul className='mt-4 grid md:grid-cols-3 gap-4 list-disc pl-5 text-sm text-gray-700'><li>Heated motor for warm outlet temperature</li><li>Wide aperture for even airflow</li><li>Quiet operation engineered ~67 dBA @ 1 m</li></ul>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2 className='h2'>Gallery</h2>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-3'><img src='https://www.airdri.com/wp-content/uploads/2024/07/Airdri_ComfortDRI-grey-washroom-350x350.png' alt='ComfortDRI gallery' className='w-full h-40 object-cover rounded-xl border'/><img src='https://www.airdri.com/wp-content/uploads/2024/07/Airdri_ComfortDRI-brown-washroom-350x350.png' alt='ComfortDRI gallery' className='w-full h-40 object-cover rounded-xl border'/></div>
        </div>
      </section>
    </div>
  )
}
