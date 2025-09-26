import React from 'react'
import SpecPills from '../components/SpecPills'
export default function SteraSpace(){
  const pills = ['Continuous sanitisation','CARB compliant','Multi‑lab tested']
  return (
    <div className='bg-white'>
      <section className='section'>
        <div className='container grid md:grid-cols-2 gap-8 items-start'>
          <div>
            <div className='badge mb-3'>Product</div>
            <h1 className='h1'>SteraSpace</h1>
            <SpecPills items={pills} />
            <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
              <div><span className='font-semibold'>Coverage:</span> Varies by unit / room size</div>
              <div><span className='font-semibold'>Operation:</span> Continuous (occupied spaces)</div>
              <div><span className='font-semibold'>Maintenance:</span> Periodic component replacement</div>
              <div><span className='font-semibold'>Compliance:</span> CARB</div>
            </div>
          </div>
          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <img src='https://www.airdri.com/wp-content/uploads/2023/06/Steraspace-350x350.jpg' alt='SteraSpace' className='h-80 w-full object-contain' />
          </div>
        </div>
      </section>
    </div>
  )
}
