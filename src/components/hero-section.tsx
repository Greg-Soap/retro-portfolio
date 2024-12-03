import { Button } from './ui/button'
import BorderFrame from './border-frame'
import Heading from '@/layout/heading'

export default function HeroSection() {
  return (
    <section className='bg-[#F2F0FF]  flex items-center' id='hero'>
      <div className='container mx-auto md:px-[100px]'>
        <div className='mt-10 sm:mt-20 lg:mt-40 space-y-6'>
          <Heading>
            We combine creativity, technology, and strategy to craft exceptional digital
            experiences.
          </Heading>

          <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <p className='text-xl md:text-2xl text-black max-w-[750px] font-medium'>
              Your go-to partner for innovative web design and development. Let's turn your vision
              into reality.
            </p>
            <BorderFrame>
              <a href='#contact'>
                <Button className='inline-flex px-8 py-3 bg-[#4A3880] text-white  hover:bg-[#3A2B66] transition-colors'>
                  Let's talk
                </Button>
              </a>
            </BorderFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
