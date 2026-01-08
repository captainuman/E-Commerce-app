import React, { useContext, useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminhomepage = () => {
  const [userdata , setUserdata] = useState([])
  const [product , setProduct] = useState([])
  const [orders ,setOrders] = useState([])
  const [cart , setCart] = useState([])

  const [ordercompleted] = useState([])

  async function callingapi() {
    try{
      const res = await axios("https://e-commerce-app-backend-pi.vercel.app/users")
      const product = await axios ("https://e-commerce-app-backend-pi.vercel.app/data")
      const order = await axios ("https://e-commerce-app-backend-pi.vercel.app/orders")
      const cart = await axios ("https://e-commerce-app-backend-pi.vercel.app/cart")
      const userdata = res.data
      const productdata = product.data
      const orderdata = order.data
      const cartdata = cart.data
      setProduct(productdata)
      setUserdata(userdata)
      setCart(cartdata)
      setOrders(orderdata)
    }
    catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    callingapi()
  },[])
  

  return (
    <div className='bg-blue-300' >
        <Adminnavbar/>
        <div className='flex justify-around mt-10 items-center text-white flex-wrap gap-5'>

          <div className='bg-blue-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
            <h1 className='text-3xl'>{userdata.length}</h1>
            <h1 className='font-bold text-2xl'>Registered User</h1>
            <h1></h1>
          </div>

          <div className='bg-purple-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
              <h1 className='text-3xl'>{cart.length}</h1>
              <h1 className='font-bold text-2xl'>Cart item</h1>
          </div>

           <div className='bg-orange-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
              <h1 className='text-3xl'>{product.length}</h1>
              <h1 className='font-bold text-2xl'>Products</h1>
          </div>

          <div className='bg-green-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
              <h1 className='text-3xl'>{orders.length}</h1>
              <h1 className='font-bold text-2xl'>Orders</h1>
          </div>

          <div className='bg-green-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
              <h1 className='text-3xl'>{orders.length-ordercompleted}</h1>
              <h1 className='font-bold text-2xl'>Orders Pending</h1>
          </div>

          <div className='bg-green-500 h-50 w-100 rounded flex flex-col items-center justify-center '>
              <h1 className='text-3xl'>{ordercompleted.length}</h1>
              <h1 className='font-bold text-2xl'>Orders Completed</h1>
          </div>
        </div>

           <div className='h-80 overflow-auto py-5 '>
              <h1 className='text-2xl font-bold pl-5 py-5'>Orders Pending</h1>
              <div className='flex gap-5 pl-5 h-50 rounded-2xl w-fit'>
                <div className='flex gap-5 h-50 rounded-2xl justify-center items-center'>
                  {orders.map(function(e,id){
                    return <div key={id} className='border h-50 w-45 bg-white rounded-2xl flex justify-center items-center flex-col'>
                              <img className='border h-40 w-35 rounded-2xl' src={e.images[0]} alt={e.name} />
                              <h1>{e.name}</h1>
                           </div>
                       })
                  }
                </div>
                <div className='h-50 border rounded-2xl w-100 flex flex-col justify-center items-center bg-white'>
                  <h1 className='text-2xl'>No More Orders</h1>
                </div>
              </div>
            </div>

            <div className='h-80 overflow-auto py-5 '>
              <h1 className='text-2xl font-bold pl-5 py-5'>Orders Completed</h1>
              <div className='flex gap-5 pl-5 h-50 rounded-2xl w-fit'>
                <div className='flex gap-5 h-50 rounded-2xl justify-center items-center'>
                  {ordercompleted.map(function(e,id){
                    return <div key={id} className='border h-50 w-40 bg-white rounded-2xl flex justify-center items-center flex-col'>
                              <img className='border h-40 w-35 rounded-2xl' src={e[0].images[0]} alt={e.name} />
                              <h1>{e[0].name}</h1>
                          </div>
                       })}
                </div>
                <div className='h-50 border rounded-2xl w-100 flex flex-col justify-center items-center bg-white'>
                  <h1 className='text-2xl'>No More Orders</h1>
                </div>
              </div>
            </div>

             <div className='h-80 overflow-auto py-5 '>
              <h1 className='text-2xl font-bold pl-5 py-5'>All users cart items</h1>
              <div className='flex gap-5 pl-5 h-50 rounded-2xl w-fit'>
                <div className='flex gap-5 h-50 rounded-2xl justify-center items-center'>
                  {cart.map(function(e,id){
                    return <div key={id} className='border h-50 w-40 bg-white rounded-2xl flex justify-center items-center flex-col'>
                              <img className='border h-40 w-35 rounded-2xl' src={e.images[0]} alt={e.name} />
                              <h1>{e.name}</h1>
                          </div>
                       })}
                </div>
                <div className='h-50 border rounded-2xl w-100 flex flex-col justify-center items-center bg-white'>
                  <h1 className='text-2xl'>No More Orders</h1>
                </div>
              </div>
            </div>

    </div>
  )
}

export default Adminhomepage
