export default function Downloads({ items=[] }){
  if(!items.length) return null
  return (
    <div className='rounded-2xl border border-gray-100 p-6 bg-white'>
      <h3 className='h3'>Downloads</h3>
      <ul className='mt-3 text-sm list-disc pl-5'>
        {items.map((it,i)=> (
          <li key={i}><a className='link' href={it.href} target='_blank' rel='noreferrer'>{it.label} ↗</a></li>
        ))}
      </ul>
    </div>
  )
}
