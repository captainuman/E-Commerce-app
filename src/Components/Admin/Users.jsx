import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [userdata , setUserdata] = useState([])

    async function userdatas() {
        try{
            const res = await axios ('http://localhost:5000/users')
            const data = res.data
            setUserdata(data)
        }
        catch(err){
            alert("data not found")
        }
    }
    userdatas()
  return (
    <div className='bg-gray-200 h-screen overflow-auto'>
        <button className='font-bold border px-5 py-1 rounded-3xl mt-5 ml-5 bg-emerald-900 text-amber-200 mb-10'><Link to='/adminpage'>Homepage</Link></button>
    <div className='flex flex-wrap gap-5'>
        
      {userdata.map((e)=>{
        return <div className='bg-yellow-500 border w-80 h-50 rounded-xl'>
            <h1 className='text-center font-bold text-2xl my-5'>{e.username}</h1>
            <h1 className='pl-10 text-xl'>{e.email}</h1>
            <h1 className='pl-10 '>Mobile: {e.mobile}</h1>
            <div className='flex pl-10 gap-4'>
                <h1 className=''>DOB : {e.dob} </h1>
                <h1 className=''>Gender : {e.gender}</h1>
            </div>
            <h1 className='pl-10 text-xl'>{e.adress}</h1>

        </div>
      })}
    </div>
    </div>
  )
}

export default Users
