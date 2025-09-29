import React from 'react'
import SpecPills from '../components/SpecPills'
import SpecTable from '../components/SpecTable'
import Downloads from '../components/Downloads'

export default function SteraSpace(){
  const pills = ['Continuous sanitisation','CARB compliant','Multi‑lab tested']
  const sections = [
    { title:'Operation', rows:[['Mode','Continuous (occupied spaces)'],['Coverage','Varies by unit / room size']]},
    { title:'Compliance', rows:[['Regulatory','CARB compliant'],['Testing','Multi‑lab validation']]},
    { title:'Maintenance', rows:[['Service','Periodic component replacement'],['Indicators','Visual status indicator']]},
  ]
  const downloads = [
    { label:'Spec sheets & product docs', href:'https://www.airdri.com/resource-centre/' },
    { label:'Maintenance & service info', href:'https://www.airdri.com/resource-centre/' },
  ]
  return (
    <div className='bg-white'>
      <section className='section'>
        <div className='container grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='badge mb-3'>Product</div>
            <h1 className='h1'>SteraSpace</h1>
            <SpecPills items={pills} />
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src='https://www.airdri.com/wp-content/uploads/2023/06/Steraspace-350x350.jpg' alt='SteraSpace' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gray-50 section'>
        <div className='container'>
          <h2 className='h2'>Technical Specifications</h2>
          <SpecTable sections={sections} />
        </div>
      </section>

      <section className='section'>
        <div className='container grid md:grid-cols-3 gap-6 items-start'>
          <div className='md:col-span-2'>
            <h2 className='h2'>How it helps</h2>
            <ul className='mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5 text-sm text-gray-700'>
              <li>Reduces airborne and surface-borne contaminants</li>
              <li>Ideal for continuous use in occupied spaces</li>
              <li>Low-maintenance operation</li>
              <li>Complements hand hygiene measures</li>
            </ul>
          </div>
          <Downloads items={downloads} />
        </div>
      </section>
    </div>
  )
}
