import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Productcreation = () => {

    const [itemdata , setItemdata] = useState({
        name : '',
        price : '',
        quantity : '',
        id : '',
        companyname : '',
        description : '',
        brand : '',
        color : '',
        material : '',
        about : [],
        images : [],
        discount : '',
        size : {},
        categary : []
    })

    const handledata = (e)=>{
        const {name , value} = e.target
        setItemdata((prev)=>({...prev , [name] : value})
    )}


    const handlesubmit =async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("https://e-commerce-app-backend-pi.vercel.app/data" , itemdata ,
                {
                    headers : {"Content-Type" : "application/json"}
                }
            )
            console.log(res.data)
        }
        catch (err){
            console.log(err)
        }
        
    }

  return (
    <div className='overflow-auto h-screen bg-gray-200'>
        <button className='font-bold border px-5 py-1 rounded-3xl mt-5 ml-5 bg-emerald-900 text-amber-200'><Link to='/adminpage'>Homepage</Link></button>
        <div className='flex justify-center items-center bg-gray-200 py-20'>

            <form onSubmit={handlesubmit} 
            className='border px-20 py-5 rounded-2xl bg-purple-900'>

                <h1 className='text-amber-300 font-bold text-3xl text-center mb-10 mt-10'><u>Product creation </u></h1>


                <div className='flex gap-10'>
                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Item-Name</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item name here' name='name'
                        value={itemdata.name}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label htmlFor="" className='text-yellow-300 text-center font-semibold'>Item-price</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item name here' name='price'
                        value={itemdata.price}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label htmlFor="" className='text-yellow-300 text-center font-semibold'>Item-quantity</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item name here' name='quantity'
                        value={itemdata.quantity}
                        onChange={handledata}/>
                    </div>
                </div >

                <div className='flex gap-10'>
                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Item-ID</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="numberz" placeholder='Enter item Id' name='id'
                        value={itemdata.id}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Company-Name</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter company name here' name='companyname'
                        value={itemdata.companyname}
                        onChange={handledata}/>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Material</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter material type' name='material'
                        value={itemdata.material}
                        onChange={handledata}/>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <div className='flex flex-col mt-5'>
                        <label htmlFor="" className='text-yellow-300 text-center font-semibold'>Item-size</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item name here' name='size'
                        value={itemdata.size}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label htmlFor="" className='text-yellow-300 text-center font-semibold'>Categary</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item name here' name='categary'
                        value={itemdata.categary}
                        onChange={handledata}/>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Brand</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter Brand name' name='brand'
                        value={itemdata.brand}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Color</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item color' name='color'
                        value={itemdata.color}
                        onChange={handledata}/>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Discount</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded'
                        type="text" placeholder='Enter item color' name='discount'
                        value={itemdata.discount}
                        onChange={handledata}/>
                    </div>

                </div>

                 <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Images</label>
                        <input className='text-yellow-300 border border-red-500 outline-none text-center rounded' type="file" multiple name ='image'
                        value = {itemdata.images}
                        onChange={handledata}/>

                    </div>  

                 <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold'>Description</label>
                        <textarea name="description"  className='text-yellow-300 border border-red-500 outline-none text-center rounded' placeholder='Enter description'
                        value={itemdata.description}
                        onChange={handledata}></textarea>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <label className='text-yellow-300 text-center font-semibold outline-none'>About</label>
                        <textarea name="about"  className='text-yellow-300 border border-red-500 outline-none text-center rounded' placeholder='Enter description'
                        value={itemdata.about}
                        onChange={handledata}></textarea>
                    </div>

                <button className='bg-red-500 px-10 py-2 font-semibold rounded mt-10 ml-60 self-center'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Productcreation
