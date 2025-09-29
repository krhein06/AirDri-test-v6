import React from 'react'
export default function ColorToggle({ options = {}, initial='silver', onChange }){
  const [c,setC] = React.useState(initial in options ? initial : Object.keys(options)[0])
  React.useEffect(()=>{ onChange && onChange(c) },[c])
  return (
    <div className='flex items-center gap-2'>
      {Object.keys(options).map((key)=> (
        <button key={key} onClick={()=>setC(key)} className={'color-btn ' + (c===key?'border-brand text-brand':'border-gray-300 text-gray-700')}>
          {key[0].toUpperCase()+key.slice(1)}
        </button>
      ))}
    </div>
  )
}
