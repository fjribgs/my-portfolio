import Navbar from './components/Navbar'
import { Hero, AboutMe } from './components/Home'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth:true })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
