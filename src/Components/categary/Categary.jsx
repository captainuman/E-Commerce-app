import Navbar from '../homepage/navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categary = () => {

  const [mobile , setMobile] = useState([])
  const [Accessories , setAccessories] = useState([])
  const [smart , setSmart] = useState([])
  const [service , setService] = useState([])


  async function Categaries() {
    try {
      const res = await axios ('http://localhost:5000/data')
      const itemdata = res.data
      console.log(itemdata)
      itemdata.find((e)=>{
        if(e.categories[0]=='Mobile Phones' || e.brand == 'Apple'){
         setMobile(prev=>[...prev,e])
         } 
        if(e.categories[0]=='Mobile Accessories'){
         setAccessories(prev=>[...prev,e])
         }
        if(e.categories[0]=='Smart Devices'){
         setSmart(prev=>[...prev,e])
         }
        if(e.categories[0]=='Service'){
         setService(prev=>[...prev,e])
         console.log(service)
         }
         else{
          console.log("not founf")
         }
      })
      }
    catch (err){
    }
  }

  useEffect(()=>{
    Categaries()
  },[])



  return (
    <div>
    <Navbar/>
      <div className='mt-20'>
        <div className='bg-gray-600'>
        <h1 className='text-3xl font-bold pl-10 pt-5 '>Mobile Phones</h1>
          <div className="pt-5 w-screen h-fit flex overflow-auto px-7 bg-gray-600 rounded">
                  {mobile.map((e) => (
                  <Link key={e.id} to={`/product/${e.id}`}>
                    <div className="w-50 rounded h-90 m-5 bg-white px-4">
                      <img className='w-100 h-50 rounded-2xl py-4' src={e.images[0]} alt="sdf" />
                      <h1 className="text-center mb-2 font-black mt-2">{e.name}</h1>
                      <h1 className="px-2 mb-2 font-semibold">Price : {e.price}</h1>
                      <button className="mb-4 font-semibold bg-amber-300 px-10 py-2 rounded">Add to cart</button>
                    </div>
                  </Link>
                ))}
          </div>
        <hr/>

        <div className=' bg-gray-600'>
          <h1 className='text-3xl font-bold pl-10 bg-gray-600'>Mobile Accessories</h1>
           <div className="pt-5 w-screen h-fit flex overflow-auto px-7 bg-gray-600 rounded">
                    {Accessories.map((e) => (
                    <Link key={e.id} to={`/product/${e.id}`}>
                      <div className="w-50 rounded h-90 m-5 bg-white px-4">
                        <img className='w-100 h-50 rounded-2xl py-4' src={e.images[0]} alt="sdf" />
                        <h1 className="text-center mb-2 font-black mt-2">{e.name}</h1>
                        <h1 className="px-2 mb-2 font-semibold">Price : {e.price}</h1>
                        <button className="mb-4 font-semibold bg-amber-300 px-10 py-2 rounded">Add to cart</button>
                      </div>
                    </Link>
                  ))}
            </div>
        </div>
        <hr />
                  
        <div className=' bg-gray-600'>
          <h1 className='text-3xl font-bold pl-10 pt-5 mb-2'>Smart Devices</h1>
          <div className="pt-5 w-screen h-fit flex overflow-auto px-7 bg-gray-600 rounded">
                   {smart.map((e) => (
                   <Link key={e.id} to={`/product/${e.id}`}>
                     <div className="w-50 rounded h-90 m-5 bg-white px-4">
                       <img className='w-100 h-50 rounded-2xl py-4' src={e.images[0]} alt="sdf" />
                       <h1 className="text-center mb-2 font-black mt-2">{e.name}</h1>
                       <h1 className="px-2 mb-2 font-semibold">Price : {e.price}</h1>
                       <button className="mb-4 font-semibold bg-amber-300 px-10 py-2 rounded">Add to cart</button>
                     </div>
                   </Link>
                 ))}
               </div>
        </div>
        <hr />
        <div className=' bg-gray-600'>
        <h1 className='text-3xl font-bold pl-10 pt-5 '>Services</h1>
         <div className="pt-5 w-screen h-fit flex overflow-auto px-7 rounded">
                  {service.map((e) => (
                  <Link key={e.id} to={`/product/${e.id}`}>
                    <div className="w-50 rounded h-90 m-5 bg-white px-4">
                      <img className='w-100 h-50 rounded-2xl py-4' src={e.images[0]} alt="sdf" />
                      <h1 className="text-center mb-2 font-black mt-2">{e.name}</h1>
                      <h1 className="px-2 mb-2 font-semibold">Price : {e.price}</h1>
                      <button className="font-semibold bg-amber-300 px-10 py-2 rounded">Add to cart</button>
                    </div>
                  </Link>
                ))}
              </div>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Categary
