import '../index.css'
import githubwhite from '../assets/github-white.svg'
import githubdark from '../assets/github-dark.svg'
import linkedinwhite from '../assets/linkedin-white.svg'
import linkedindark from '../assets/linkedin-dark.svg'
import laios from '../assets/laios.jpeg'

function Navbar() {
  return (
    <nav className="bg-[var(--primary5)] text-[var(--primary1)] flex 
    place-content-between h-18 w-full p-9 sm:px-26 items-center fixed
    z-50">
      <div id="navbar-left" className="font-bold text-2xl">
        <h1>fjribgs</h1>
      </div>
      <div id="navbar-center" className="hidden sm:block justify-center">
        <ul className="flex gap-9">
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Home</a></li>
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Review</a></li>
          <li className='cursor-pointer duration-200 ease-in hover:font-bold'><a href="#">Contact</a></li>
        </ul>
      </div>
      <div id="navbar-right" className='flex gap-2 items-center'>
        <a href="https://github.com/fjribgs" target='_blank' className='group'>
          <img src={githubwhite} alt="" className='size-6 lg:size-8 group-hover:hidden block
          transition ease-in-out duration-150'/>
          <img src={githubdark} alt="" className='size-6 lg:size-8 hidden group-hover:block
          transition ease-in-out duration-150'/>
        </a>
        <a href="https://linkedin.com/in/fajribagas" target='_blank' className='group'>
          <img src={linkedinwhite} alt="" className='size-6 lg:size-8 group-hover:hidden block ease-in-out duration-150'/>
          <img src={linkedindark} alt="" className='size-6 lg:size-8 hidden group-hover:block
          ease-in-out duration-150'/>
        </a>
        <div id="img" className='mt-7 ml-3 hidden md:block'><img src={laios} alt="laios" className='rounded-4xl mb-7 
        hidden sm:block size-10'/></div>
      </div>
    </nav>
  )
}

export default Navbar;