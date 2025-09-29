import ProductTile from '../components/ProductTile'
import { Link } from 'react-router-dom'
export default function HomePage(){
  return (
    <section className='section bg-white'>
      <div className='container'>
        <h1 className='h1'>Performance, hygiene & design — for every washroom.</h1>
        <div className='mt-3 flex flex-wrap gap-2'>
          {['ADA compliant','H13 HEPA (PowerDRI)','~10s dry (PowerDRI)','7‑year warranty'].map((t,i)=>(<span key={i} className='pill'>{t}</span>))}
        </div>
        <p className='mt-4 text-gray-700 text-lg'>Toggle colours on the cards below, then click through for full specs and galleries.</p>
        <div className='mt-8 grid md:grid-cols-4 gap-4'>
          <ProductTile title='CompactDRI' to='/compactdri' colors={{silver:'/assets/Airdri_CompactDRI_Front.png', black:'/assets/Airdri_CompactDRI_Front_Black.png', white:'/assets/Airdri_CompactDRI_Front_White.png'}} />
          <ProductTile title='PowerDRI' to='/powerdri' colors={{silver:'/assets/Airdri_PowerDRI_Front.png', black:'/assets/Airdri_PowerDRI_Front_Black.png', white:'/assets/Airdri_PowerDRI_Front_White.png'}} />
          <ProductTile title='ComfortDRI' to='/comfortdri' colors={{silver:'/assets/Airdri_ComfortDRI_Front.png', black:'/assets/Airdri_ComfortDRI_Front_Black.png', white:'/assets/Airdri_ComfortDRI_Front_White.png'}} />
          <Link to='/steraspace' className='bg-white rounded-2xl shadow hover:shadow-md transition block border border-gray-100 overflow-hidden text-center p-6'>
            <img src='https://www.airdri.com/wp-content/uploads/2023/06/Steraspace-350x350.jpg' alt='SteraSpace' className='h-40 mx-auto object-contain' />
            <div className='h3 mt-3'>SteraSpace</div>
            <div className='text-sm text-brand mt-3'>Explore →</div>
          </Link>
        </div>
      </div>
    </section>
  )
}
