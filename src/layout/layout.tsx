import Footer from './footer'
import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow  relative'>{children}</main>
      <Footer />
    </div>
  )
}
