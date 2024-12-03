import BorderFrame from '@/components/border-frame'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Our Work', href: '#our-work' },
]

export default function Header() {
  return (
    <header className='bg-[#F2F0FF] border-b border-purple-100'>
      <div className='container mx-auto px-4 py-4'>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='flex items-center space-x-2'>
            <div className='text-[#4A3880]'>
              {/* <img src='/images/logo.png' alt='RetroDevs' width={32} height={32} /> */}
              <h3 className='text-xl font-bold text-black'>RetroDevs</h3>
            </div>
          </a>

          {/* Navigation */}
          <div className='flex items-center space-x-8'>
            <ul className='hidden md:flex items-center space-x-8'>
              {navigationItems.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={index} className='flex items-center'>
                  <a
                    href={item.href}
                    className='text-black font-sans hover:text-[#4A3880] transition-colors'>
                    {item.label}
                  </a>
                  {index < navigationItems.length - 1 && <div className='w-2 h-2 bg-black ml-8' />}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Button */}
          <BorderFrame color='black' className='w-fit'>
            <a href='#contact'>
              <Button className='font-heading h-[35px] font-bold bg-[#4A3880] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors'>
                Let's talk
              </Button>
            </a>
          </BorderFrame>
        </nav>
      </div>
    </header>
  )
}
