import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = ({setActive}) => {

    const [error , setError] = useState(false)

    const [love , setLove] = useState(true)

    const [formData , setFormData] = useState({
        username : '',
        email : '',
        password : ''
    })

    async function handlesubmit(e){
        try{
            e.preventDefault()
            const res = await axios("https://e-commerce-app-backend-pi.vercel.app/users")
            const data = res.data
            data.find(function(e){
                localStorage.setItem('formdata' , JSON.stringify(e))
                if(formData.email == e.email && formData.password == e.password){
                    setLove(false)
                    localStorage.setItem('user' , JSON.stringify(false))
                }
                else {
                    setError(true)
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }


    function handleformdata(e){
        const {name , value} = e.target
        setFormData({...formData , [name]:value})
    }

    function Notreg(){
        return(
            <div className='flex justify-center items-center w-150'>
                <h1 className='mt-4 text-white'>don't have an Account ?</h1>
                <h1 onClick={()=>setActive(false)} className='text-white bg-blue-900 px-4 py-1 rounded mt-4 ml-1'>Register here</h1>
            </div>
        )   
    }

    function Continues(){
        return(
            <div className='flex justify-center items-center w-150'>
                <h1 className='mt-4 text-white'>Login successfull</h1>
                <button className='text-white bg-blue-900 px-4 py-1 rounded mt-4 ml-1'>
                    <Link to='/'>Continue</Link>
                </button>
            </div>
        )
    }

  return (
    <div className='flex justify-center items-center bg-[url("/images/bglogin.jpg")]  h-screen bg-cover bg-center overflow-auto'>

        <div className='w-150 h-screen px-20 flex flex-col items-center justify-center'>
            <h1 className='text-white text-2xl'>Nice to see you again</h1>
            <h1 className='text-white text-6xl '>WELCOME BACK</h1>
            <p className='text-white px-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam aliquam ipsa odit facilis tempora voluptatibus! Perspiciatis asperiores quae alias ratione. Saepe sit suscipit adipisci maiores possimus ad sint similique.
            </p>
        </div>
      <div>
        <form action="" onSubmit={handlesubmit}
        className='w-150 px-20 flex flex-col backdrop-blur-lg rounded-3xl bg-#0034C1/60 mt-30 mb-30'>

       <div className='flex justify-between'>
         <h1 className='text-4xl  text-white font-bold rounded'>Login</h1>
         <h1 className='text-xl bg-red-900 py-2 px-5 rounded-2xl text-white font-bold'><Link to='/adminloginpage'>Admin login</Link></h1>

       </div>
        <div className='text-center bg-green-500'>
            {error ? 'incorrect details? plz enter correct email and password' : ''}
        </div>

        <div className='mt-2 flex flex-col'>
            <label className='text-xl text-white' htmlFor="">Username</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-5 outline-none rounded' type="text" placeholder='Enter Username' name='username'
            value={formData.username}
            onChange={handleformdata}/>
        </div>

        <div className='flex flex-col'>
            <label className='text-xl text-white' htmlFor="">Email</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-5 outline-none rounded' type="email" placeholder='Enter E-Mail here' name='email'
            value={formData.email}
            onChange={handleformdata}/>
        </div>

        <div className='flex flex-col'>
            <label className='text-xl text-white' htmlFor="">Password</label>
            <input className='border-2 text-gray-300 px-5 py-1 mb-1 outline-none rounded' type="password" placeholder='Enter password' name='password'
            value={formData.password}
            onChange={handleformdata}/>
            <h1 className='text-sm text-white mb-5'>Forgot Password?</h1>
        </div>

        <button className='text-white font-bold text-center px-40 py-2 bg-blue-900 rounded'>  Sign in
        </button>

        <h1 className='text-sm text-white my-3 text-center'>or continue with</h1>

        <div className='flex justify-between'>
            <button className='bg-white px-10 rounded py-1'>insta</button>
            <button className='bg-white px-10 rounded py-1'>face</button>
            <button className='bg-white px-10 rounded py-1'>github</button>
        </div>
    
      
      <div className='flex justify-between'>
        {love ? <Notreg/> : <Continues/> }
      </div>

      </form>
      </div>
    </div>
  )
}

export default Login
