import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductTile({ title, to, colors }){
  const keys = Object.keys(colors||{})
  const [k,setK] = React.useState(keys[0]||null)
  return (
    <Link to={to} className='bg-white rounded-2xl shadow hover:shadow-md transition block border border-gray-100 overflow-hidden text-center p-6'>
      {k && <img src={colors[k]} alt={title} className='h-40 mx-auto object-contain' />}
      <div className='h3 mt-3'>{title}</div>
      {keys.length>1 && (
        <div className='mt-3 flex items-center justify-center gap-2'>
          {keys.map(key => (
            <button key={key} onClick={(e)=>{e.preventDefault(); setK(key)}} className={'px-2.5 py-1.5 rounded-lg border text-xs font-semibold ' + (k===key?'border-brand text-brand':'border-gray-300 text-gray-700')}>
              {key[0].toUpperCase()+key.slice(1)}
            </button>
          ))}
        </div>
      )}
      <div className='text-sm text-brand mt-3'>Explore →</div>
    </Link>
  )
}
