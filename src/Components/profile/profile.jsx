import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../homepage/navbar'
import axios from 'axios'

const Profile = () => {

  const [orderdata , setOrderdata] = useState([])
  const [cdata , setCdata] = useState([])

  const profiledata2 = localStorage.getItem('formdata')
  const profiledata = JSON.parse(profiledata2)

  async function orderscalling() {
    try{
      const res = await axios ('http://localhost:5000/orders')
      const orderdata = res.data
      const res2 = await axios ('http://localhost:5000/cart')
      const cartdata = res2.data
      setOrderdata(orderdata)
      setCdata(cartdata)
    }
    catch (err){
      alert(err)
    }
  }

  useEffect(()=>{
    orderscalling()
  },[])

  return (
    <div className='overflow-hidden flex border bg-gray-300 h-screen w-screen'>
      <Navbar/>
      <div className='overflow-y-auto mt-15 p-10'>
          <div className='h-50 overflow-hidden bg-white/50 flex gap-20 px-10 rounded-2xl'> 
            <img className='w-40 self-center rounded-full bg-blue-400' src="images/home.png" alt="profile pic"/>
            <div className='flex gap-5 items-center'>
                <div className='flex flex-col'>
                  <h1 className='text-3xl font-semibold'>{profiledata.username}</h1>
                  <h1 className='text-xl'>{profiledata.adress}</h1>
                  <div className='flex gap-5 w-110 mt-5'>
                    <h1 className='text-xl border px-2 rounded'>Current orders : {orderdata.length}</h1>
                    <h1 className='text-xl border px-2 rounded'>Cart Items : {cdata.length}</h1>
                  </div>
                  <h1></h1>
                </div>


                <div>
                  <h1 className='text-xl'><span className='font-semibold mr-20'>Gmail: </span>{profiledata.email}</h1>
                  <h1 className='text-xl'><span className='font-semibold mr-17'>Mobile: </span>{profiledata.mobile}</h1>
                  <h1 className='text-xl'><span className='font-semibold mr-3'>Data-of-birth: </span>{profiledata.dob}</h1>
                  <h1 className='text-xl'><span className='font-semibold mr-17'>Gender: </span>{profiledata.gender}</h1>
                  
                </div>
            </div>
          </div>

          <div>
            <div className='overflow-y-auto h-80 py-5 '>
              <h1 className='text-2xl font-bold pl-5 py-5'>Cart-Items</h1>
              <div className='flex gap-5 pl-5 rounded-2xl w-fit'>
                <div className='flex gap-5 h-50 rounded-2xl justify-center items-center'>
                  {cdata.map(function(e,id){
                    return <div key={id} className='border h-50 w-45 bg-white/50 rounded-2xl flex justify-center items-center flex-col'>
                            <img className='border h-40 rounded-2xl' src={e[0].images[0]} alt={e[0].name} />
                            <h1>{e[0].name}</h1>
                          </div>
                       })}
                </div>
                <div className='h-50 border rounded-2xl w-100 flex flex-col justify-center items-center bg-white/50'>
                  <h1 className='text-2xl'>Can't find orders</h1>
                  <input className='border rounded outline-none text-center' type="search" placeholder='serach orders' />
                </div>
              </div>
            </div>
          </div>

            <div className='h-80 overflow-auto py-5 '>
              <h1 className='text-2xl font-bold pl-5 py-5'>Your Orders</h1>
              <div className='flex gap-5 pl-5 h-50 rounded-2xl w-fit'>
                <div className='flex gap-5 h-50 rounded-2xl justify-center items-center'>
                  {orderdata.map(function(e,id){
                    return <div key={id} className='border h-50 w-45 bg-white/50 rounded-2xl flex justify-center items-center flex-col'>
                              <img className='border h-40 w-35 rounded-2xl' src={e[0].images[0]} alt={e.name} />
                              <h1>{e[0].name}</h1>
                          </div>
                       })}
                </div>
                <div className='h-50 border rounded-2xl w-100 flex flex-col justify-center items-center bg-white/50'>
                  <h1 className='text-2xl'>Can't find orders</h1>
                  <input className='border rounded outline-none text-center' type="search" placeholder='serach orders' />
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
