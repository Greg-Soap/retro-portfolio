import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import BorderFrame from './border-frame'
import Heading from '@/layout/heading'

export default function HeroSection() {
  return (
    <section className='bg-[#F2F0FF]  flex items-center' id='hero'>
      <div className='container mx-auto '>
        <div className='mt-10 sm:mt-20 lg:mt-40 space-y-6'>
          <Heading>
            We combine creativity, technology, and strategy to craft exceptional digital
            experiences.
          </Heading>

          <div className='flex flex-row items-center justify-between gap-2'>
            <p className='text-xl md:text-2xl text-black max-w-[750px] font-medium'>
              Your go-to partner for innovative web design and development. Let's turn your vision
              into reality.
            </p>
            <BorderFrame>
              <Link to='/#'>
                <Button className='inline-flex px-8 py-3 bg-[#4A3880] text-white  hover:bg-[#3A2B66] transition-colors'>
                  Let's talk
                </Button>
              </Link>
            </BorderFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
