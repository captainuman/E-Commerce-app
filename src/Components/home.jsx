import { Link } from 'react-router-dom'
import Navbar from './homepage/navbar'

const Home = () => {

  return (
   <div className='overflow-hidden bg-[url("/images/bglogin.jpg")] bg-cover '>
    <Navbar/>
      <div className='h-screen pt-15 flex overflow-hidden justify-center items-center'>
        <div className=''>
          <img className='w-600 h-150 rounded-full' src="/images/mobileahop.jpeg" alt="fff" />
        </div>

        <div className='text-white flex flex-col justify-center items-center px-20'>
          <h1 className='text-6xl text-amber-300'>Shop Online</h1>
          <h1 className='text-3xl mt-3'><i>Made easy!</i></h1>
          <p className='text-sm mt-1 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestiae porro dolores iste labore fugiat aspernatur in. Labore aut mollitia magnam! Enim quo quaerat voluptas voluptatem nemo, vero dolore officia?z </p>
          <button className='text-xl bg-amber-300 border px-5 py-1 rounded-3xl mt-4 font-semibold text-blue-950'><Link to='/shop'>shop now</Link></button>
        </div>
      </div>
   </div>
  )
}

export default Home
