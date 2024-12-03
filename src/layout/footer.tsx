export default function Footer() {
  return (
    <footer className='bg-black text-[#F2F0E6] text-xl  font-bold py-6'>
      <div className='container mx-auto py-6 md:py-24 md:px-[100px]'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full'>
          {/* Logo and Email */}
          <div className='flex flex-col gap-2'>
            <div className='text-lg md:text-2xl font-bold'>RetroDevs</div>
            <a href='mailto:hello@retrodevs.com' className='text-base md:text-xl'>
              hello@retrodevs.com
            </a>
          </div>

          <div className='flex flex-col gap-2 items-end w-full'>
            <a href='/privacy-policy' className='text-base md:text-xl'>
              Our Privacy Policy
            </a>
            {/* Copyright */}
            <div className='text-base md:text-xl'>All Rights Reserved. © 2024 Retro Devs</div>

            {/* Privacy Policy */}
          </div>
        </div>
      </div>
    </footer>
  )
}
