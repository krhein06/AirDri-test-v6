import React from 'react'
import SpecPills from '../components/SpecPills'
import ColorToggle from '../components/ColorToggle'

export default function CompactDRI(){
  const options = {"silver": "/assets/Airdri_CompactDRI_Front.png", "black": "/assets/Airdri_CompactDRI_Front_Black.png", "white": "/assets/Airdri_CompactDRI_Front_White.png"};
  const [src, setSrc] = React.useState(options[Object.keys(options)[0]]);
  const pills = ["ADA compliant profile", "Low noise ~70 dBA", "7\u2011year warranty"];
  return (
    <div className='bg-white'>
      <section className='section'>
        <div className='container grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='badge mb-3'>Product</div>
            <h1 className='h1'>CompactDRI</h1>
            <SpecPills items={pills} />
            <div className='mt-4'>
              <div className='text-sm font-semibold text-brand mb-2'>Colour options</div>
              <ColorToggle options={options} onChange={(c)=>setSrc(options[c])} />
            </div>
            <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
              <div><span className='font-semibold'>Dimensions:</span> 278 × 180 × 100 mm</div><div><span className='font-semibold'>Weight:</span> 3.2 kg</div><div><span className='font-semibold'>Voltage:</span> 110–240 VAC (50/60 Hz)</div><div><span className='font-semibold'>Current:</span> &lt;7A @115V / &lt;3.5A @230V</div><div><span className='font-semibold'>Air velocity:</span> ~67 m/s</div><div><span className='font-semibold'>Outlet temp:</span> ~36 °C</div>
            </div>
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src={src} alt='CompactDRI' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 section'>
        <div className='container'>
          <h2 className='h2'>Technology highlights</h2>
          <ul className='mt-4 grid md:grid-cols-3 gap-4 list-disc pl-5 text-sm text-gray-700'><li>Wide‑aperture airflow for even drying</li><li>High‑efficiency motor (~15s dry at 1.0 kW)</li><li>Sound‑damped design (~70 dBA)</li></ul>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2 className='h2'>Gallery</h2>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-3'><img src='https://www.airdri.com/wp-content/uploads/2024/07/Airdri_CompactDRI-dark-washroom-350x350.png' alt='CompactDRI gallery' className='w-full h-40 object-cover rounded-xl border'/><img src='https://www.airdri.com/wp-content/uploads/2024/06/Airdri_CompactDRI-grey-washroom-scaled-350x350.jpg' alt='CompactDRI gallery' className='w-full h-40 object-cover rounded-xl border'/></div>
        </div>
      </section>
    </div>
  )
}
