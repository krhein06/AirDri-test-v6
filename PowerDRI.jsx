import React from 'react'
import SpecPills from '../components/SpecPills'
import ColorToggle from '../components/ColorToggle'
import SpecTable from '../components/SpecTable'
import Downloads from '../components/Downloads'

export default function PowerDRI(){
  const options = {"silver": "/assets/Airdri_PowerDRI_Front.png", "black": "/assets/Airdri_PowerDRI_Front_Black.png", "white": "/assets/Airdri_PowerDRI_Front_White.png"};
  const [src, setSrc] = React.useState(options[Object.keys(options)[0]]);
  const pills = ["~10s dry time", "H13 HEPA filter", "7\u2011year warranty"];
  const sections = [{"title": "Electrical", "rows": [["Supply Voltage", "110\u2013240 VAC (50/60 Hz)"], ["Rated Power", "1.2 kW (nominal)"], ["Standby", "< 1 W"]]}, {"title": "Performance", "rows": [["Dry Time", "~10 s"], ["Air Velocity", "~75 m/s"], ["Airflow", "~95 m\u00b3/h"]]}, {"title": "Filtration", "rows": [["Filter", "H13 HEPA (replaceable)"], ["Placement", "At outlet path"]]}, {"title": "Acoustic", "rows": [["Sound Pressure", "~72 dBA @ 1 m"], ["Mode", "Single speed"]]}, {"title": "Materials & Finish", "rows": [["Housing", "ABS / Polycarbonate"], ["Finish Options", "Silver | Black | White"]]}, {"title": "Dimensions", "rows": [["W \u00d7 H \u00d7 D", "295 \u00d7 190 \u00d7 100 mm"], ["Weight", "3.5 kg"]]}, {"title": "Compliance", "rows": [["Certifications", "CE, UKCA, ETL (regions)"], ["Warranty", "7 years (registration required)"]]}];
  const downloads = [{"label": "Spec sheets & installation guides", "href": "https://www.airdri.com/resource-centre/"}, {"label": "Maintenance & service information", "href": "https://www.airdri.com/resource-centre/"}, {"label": "Resource centre downloads", "href": "https://www.airdri.com/resource-centre/"}];
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
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src={src} alt='PowerDRI' className='h-80 w-full object-contain' />
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
              <li>Blade aperture for rapid moisture removal</li><li>HEPA filtration at outlet</li><li>Optimised power draw for speed & efficiency</li><li>No‑touch IR activation</li>
            </ul>
          </div>
          <Downloads items={downloads} />
        </div>
      </section>
    </div>
  )
}
