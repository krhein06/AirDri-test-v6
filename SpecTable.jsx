export default function SpecTable({ sections=[] }){
  return (
    <div className='overflow-x-auto rounded-xl border border-gray-200'>
      <table className='w-full text-sm'>
        <thead className='bg-gray-100 text-left'>
          <tr><th className='p-3'>Category</th><th className='p-3'>Parameter</th><th className='p-3'>Value</th></tr>
        </thead>
        <tbody>
          {sections.flatMap((sec, si) => (
            sec.rows.map((r, ri) => (
              <tr key={si+'-'+ri} className='border-t'>
                <td className='p-3 align-top'>{ri === 0 ? <span className='font-semibold text-brand'>{sec.title}</span> : ''}</td>
                <td className='p-3 align-top text-gray-700'>{r[0]}</td>
                <td className='p-3 align-top'>{r[1]}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  )
}
