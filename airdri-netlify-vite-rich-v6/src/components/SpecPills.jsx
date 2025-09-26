export default function SpecPills({ items=[] }){
  return (
    <div className='flex flex-wrap gap-2 mt-3'>
      {items.map((t,i)=>(
        <span key={i} className='pill'>
          <svg width='14' height='14' viewBox='0 0 20 20' fill='none'><path d='M7.5 13.5L3.5 9.5L2 11L7.5 16.5L18 6L16.5 4.5L7.5 13.5Z' fill='#fff'/></svg>
          {t}
        </span>
      ))}
    </div>
  )
}
