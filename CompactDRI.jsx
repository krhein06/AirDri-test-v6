import React from 'react'
import SpecPills from '../components/SpecPills'
import ColorToggle from '../components/ColorToggle'
import SpecTable from '../components/SpecTable'
import Downloads from '../components/Downloads'

export default function CompactDRI(){
  const options = {"silver": "/assets/Airdri_CompactDRI_Front.png", "black": "/assets/Airdri_CompactDRI_Front_Black.png", "white": "/assets/Airdri_CompactDRI_Front_White.png"};
  const [src, setSrc] = React.useState(options[Object.keys(options)[0]]);
  const pills = ["ADA compliant profile", "Low noise ~70 dBA", "7\u2011year warranty"];
  const sections = [{"title": "Electrical", "rows": [["Supply Voltage", "110\u2013240 VAC (50/60 Hz)"], ["Rated Power", "1.0 kW (nominal)"], ["Standby", "< 1 W"]]}, {"title": "Performance", "rows": [["Dry Time", "~15 s"], ["Air Velocity", "~67 m/s"], ["Airflow", "~85 m\u00b3/h"]]}, {"title": "Acoustic", "rows": [["Sound Pressure", "~70 dBA @ 1 m"], ["Mode", "Single speed"]]}, {"title": "Materials & Finish", "rows": [["Housing", "ABS / Polycarbonate"], ["Finish Options", "Silver | Black | White"]]}, {"title": "Dimensions", "rows": [["W \u00d7 H \u00d7 D", "278 \u00d7 180 \u00d7 100 mm"], ["Weight", "3.2 kg"]]}, {"title": "Compliance", "rows": [["Certifications", "CE, UKCA, ETL (regions)"], ["Warranty", "7 years (registration required)"]]}];
  const downloads = [{"label": "Spec sheets & installation guides", "href": "https://www.airdri.com/resource-centre/"}, {"label": "Maintenance & service information", "href": "https://www.airdri.com/resource-centre/"}, {"label": "Resource centre downloads", "href": "https://www.airdri.com/resource-centre/"}];
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
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src={src} alt='CompactDRI' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 section'>
        <div className='container'>
          <h2 className='h2'>Technical Specifications</h2>
          <p className='text-gray-700 mt-2 text-sm'>Values shown are indicative and may vary by region. Refer to the official data sheets for installation-critical dimensions and electrical ratings.</p>
          <div className='mt-4'>
            <SpecTable sections={sections} />
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container grid md:grid-cols-3 gap-6 items-start'>
          <div className='md:col-span-2'>
            <h2 className='h2'>Technology highlights</h2>
            <ul className='mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5 text-sm text-gray-700'>
              <li>Wide‑aperture airflow for even drying</li><li>Efficient motor (~15s dry at 1.0 kW)</li><li>Sound‑damped design (~70 dBA)</li><li>Infrared no‑touch activation</li>
            </ul>
          </div>
          <Downloads items={downloads} />
        </div>
      </section>
    </div>
  )
}
