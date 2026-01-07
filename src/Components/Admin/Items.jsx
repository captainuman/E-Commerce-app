import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Items = () => {

 
  const [product , setProduct] = useState([])

  useEffect(()=>{
    fetch('https://e-commerce-app-backend-pi.vercel.app/data')
    .then(res=>res.json())
    .then(data=>setProduct(data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='bg-gray-600'>

      <button className='font-bold border px-5 py-1 rounded-3xl mt-5 ml-5 bg-emerald-900 text-amber-200'><Link to='/adminpage'>Homepage</Link></button>

        <div className="pt-15 w-screen h-screen flex flex-wrap overflow-auto px-7 bg-gray-600 rounded">
          {product.map((e) => (
          <Link key={e.id} to={`/product/${e.id}`}>
            <div className="w-50 rounded h-90 m-5 bg-white px-4">
              <img className='w-100 h-50 rounded-full py-4' src={e.images[0]} alt="sdf" />
              <h1 className="text-center mb-2 font-black mt-2">{e.name}</h1>
              <h1 className="px-2 mb-2 font-semibold">Price : {e.price}</h1>
              <button className="mb-4 font-semibold bg-amber-300 px-10 py-2 rounded">Add to cart</button>
            </div>
          </Link>
        ))}
      </div>

    </div>
    
  )
}

export default Items
