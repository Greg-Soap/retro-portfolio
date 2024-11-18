export default function Footer() {
  return (
    <footer className='bg-black text-[#F2F0E6] text-xl  font-bold py-6'>
      <div className='container mx-auto py-12 md:py-24'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          {/* Logo and Email */}
          <div className='flex flex-col gap-2'>
            <div className='text-2xl font-bold'>RetroDevs</div>
            <a href='mailto:hello@retrodevs.com'>hello@retrodevs.com</a>
          </div>

          <div className='flex flex-col gap-2 items-end'>
            <a href='/privacy-policy'>Our Privacy Policy</a>
            {/* Copyright */}
            <div className='text-xl'>All Rights Reserved. © 2024 Retro Devs</div>

            {/* Privacy Policy */}
          </div>
        </div>
      </div>
    </footer>
  )
}
