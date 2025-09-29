export default function Contact(){
  return (
    <section className='section bg-white'>
      <div className='container grid md:grid-cols-2 gap-6'>
        <div>
          <h1 className='h1'>Talk to Airdri</h1>
          <p className='text-gray-700 mt-2'>Share your project and we’ll follow up with sizing and documentation.</p>
          <form className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input className='rounded-xl border border-gray-300 p-3' placeholder='First name' />
            <input className='rounded-xl border border-gray-300 p-3' placeholder='Last name' />
            <input className='rounded-xl border border-gray-300 p-3 md:col-span-2' placeholder='Company' />
            <input className='rounded-xl border border-gray-300 p-3' placeholder='Email' />
            <input className='rounded-xl border border-gray-300 p-3' placeholder='Phone' />
            <textarea className='rounded-xl border border-gray-300 p-3 md:col-span-2' rows={4} placeholder='Tell us about your site, volumes, timelines…' />
            <button className='px-5 py-3 rounded-xl text-white font-semibold md:col-span-2' style={{backgroundColor:'#29265b'}} type='submit'>Submit</button>
          </form>
        </div>
        <div className='rounded-2xl border border-gray-100 p-6 bg-white'>
          <h3 className='h3'>Documentation</h3>
          <ul className='mt-3 text-sm text-gray-700 list-disc pl-5'>
            <li><a href='https://www.airdri.com/resource-centre/' target='_blank' rel='noreferrer' className='underline text-brand'>Spec sheets & installation guides ↗</a></li>
            <li><a href='https://www.airdri.com/resource-centre/' target='_blank' rel='noreferrer' className='underline text-brand'>Maintenance & service information ↗</a></li>
            <li><a href='https://www.airdri.com/resource-centre/' target='_blank' rel='noreferrer' className='underline text-brand'>Resource centre downloads ↗</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
