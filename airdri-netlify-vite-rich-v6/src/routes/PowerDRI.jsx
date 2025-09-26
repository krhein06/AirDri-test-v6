import React from 'react'
import SpecPills from '../components/SpecPills'
import ColorToggle from '../components/ColorToggle'

export default function PowerDRI(){
  const options = {"silver": "/assets/Airdri_PowerDRI_Front.png", "black": "/assets/Airdri_PowerDRI_Front_Black.png", "white": "/assets/Airdri_PowerDRI_Front_White.png"};
  const [src, setSrc] = React.useState(options[Object.keys(options)[0]]);
  const pills = ["~10s dry time", "H13 HEPA filter", "7\u2011year warranty"];
  return (
    <div className='bg-white'>
      <section className='section'>
        <div className='container grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='badge mb-3'>Product</div>
            <h1 className='h1'>PowerDRI</h1>
            <SpecPills items={pills} />
            <div className='mt-4'>
              <div className='text-sm font-semibold text-brand mb-2'>Colour options</div>
              <ColorToggle options={options} onChange={(c)=>setSrc(options[c])} />
            </div>
            <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
              <div><span className='font-semibold'>Dimensions:</span> 295 × 190 × 100 mm</div><div><span className='font-semibold'>Weight:</span> 3.5 kg</div><div><span className='font-semibold'>Voltage:</span> 110–240 VAC (50/60 Hz)</div><div><span className='font-semibold'>Current:</span> &lt;8A @115V / &lt;4A @230V</div><div><span className='font-semibold'>Air velocity:</span> ~75 m/s</div><div><span className='font-semibold'>Filter:</span> H13 HEPA (replaceable)</div>
            </div>
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src={src} alt='PowerDRI' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 section'>
        <div className='container'>
          <h2 className='h2'>Technology highlights</h2>
          <ul className='mt-4 grid md:grid-cols-3 gap-4 list-disc pl-5 text-sm text-gray-700'><li>Blade aperture accelerates airflow for rapid moisture removal</li><li>H13 HEPA filtration at the outlet</li><li>Optimised power draw for speed & efficiency</li></ul>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2 className='h2'>Gallery</h2>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-3'><img src='https://www.airdri.com/wp-content/uploads/2024/07/powerdri3-2000x500.jpg' alt='PowerDRI gallery' className='w-full h-40 object-cover rounded-xl border'/><img src='https://www.airdri.com/wp-content/uploads/2024/07/powerdri2-350x350.jpg' alt='PowerDRI gallery' className='w-full h-40 object-cover rounded-xl border'/></div>
        </div>
      </section>
    </div>
  )
}
