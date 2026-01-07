import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Loginform = () => {

    const [FormData , setFormData] = useState({
        username : '',
        password : '',
        email : ''
    })

    const [success, setSuccess] = useState(false)

    function handleformadata(e){
        const {name , value} = e.target
        setFormData((prev)=>({...prev , [name]:value}))
    }

    async function handlesubmit(e){
        e.preventDefault()
        console.log(FormData)
        try{
            const res = await axios('http://localhost:5000/users')
            const data = res.data
            console.log(data)
            // data.find((e)=>{
                if (FormData.username == "Numan" && FormData.email == "mdnuman2611@gmail.com" && FormData.password == "N123456789"){
                    setSuccess(true)
                }
                else{
                    alert('error details')
                }
            // })
        }
        catch (err) {
            console.log(err)  
        }
    }

  return (
    <div className='flex justify-center items-center bg-[url("/images/bglogin.jpg")]  h-screen bg-cover bg-center overflow-auto'>

      <form action="" onSubmit={handlesubmit}
        className='w-150 px-20 flex flex-col backdrop-blur-lg rounded-3xl bg-#0034C1/60 mt-30 mb-30'>

        <h1 className='text-4xl  text-white font-bold rounded'>Admin Login Page</h1>

        <div className='mt-2 flex flex-col'> 
            <label className='text-xl text-white'>Username</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-5 outline-none rounded' type="text" placeholder='Enter Username' name='username'
            value={FormData.username}
            onChange={handleformadata}/>
        </div>

        <div className='mt-2 flex flex-col'>
            <label className='text-xl text-white'>Email</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-5 outline-none rounded' type="text" placeholder='Enter Email' name='email'
            value={FormData.email}
            onChange={handleformadata}/>
        </div>

        <div className='mt-2 flex flex-col'>
            <label className='text-xl text-white'>Password</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-5 outline-none rounded' type="text" placeholder='Enter Password' name='password'
            value={FormData.password}
            onChange={handleformadata}/>
        </div>

        <button className='text-white font-bold text-center px-40 py-2 bg-blue-900 rounded'>  Sign in
        </button>
        {
            success ? (
                <div className='flex flex-col items-center mb-5'>
                    <h1 className='text-white text-2xl mb-2 mt-2'>Admin login successfull</h1>
                    <h1 className='text-white text-xl'>Welcome {FormData.username}</h1>
                    <button className='bg-blue-900 px-5 rounded mt-1 py-1'><Link to='/adminpage'>click here to continue</Link></button>
                </div>
            ) : ''
        }
      </form>
    </div>
  )
}

export default Loginform
