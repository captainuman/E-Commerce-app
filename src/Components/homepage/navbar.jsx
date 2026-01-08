import { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Itemsdata } from '../data/api'

const Navbar = () => {

    const [profile, setProfile]= useState(false)
    const {users , setUsers} = useContext(Itemsdata)

    useEffect(()=>{
        let usersactive = localStorage.getItem("user");
        setUsers(JSON.parse(usersactive))
    },[])

    function check(){
        localStorage.setItem('user' , JSON.stringify(true))
    }   

    function Profiledata(){
        return(
            <div className='fixed left-250 top-0 w-70 h-screen z-10 bg-gray-100'
            onClick={()=>setProfile(false)}>
                <div className='flex gap-2 items-center h-15 w-fit px-10'>
                    <img className='w-20 h-10 rounded-2xl' src="/images/mobileahop.jpeg" alt="Captain"/>
                    <h1 className='text-2xl font-bold'>Cell Zone</h1>
                </div>
                <ul className="flex flex-col gap-5 px-2 py-5">
                    <li className="pl-2">{users ? <Link to="/login">Log In</Link> : <Link to="/profile">Account</Link>}</li>
                    <li className="pl-2"><Link to='/'> Home </Link></li>
                    <li className="pl-2"><Link to='/shop'> Products</Link></li>
                    <li className="pl-2"> <Link to='/profile'>Orders</Link> </li>
                    <li className="pl-2"><Link to='/categary'>catrgories</Link></li>
                    <li className="pl-2">Contact us</li>
                    <button
                         onClick={check} className='bg-red-500 self-center w-fit px-10  py-2 rounded-3xl'> <Link to='/'>log out</Link>
                    </button>
                </ul>
                
            </div>
        )
    }

  return (
    <div>
        <div className='fixed top-0 h-15 w-screen flex justify-between bg-gray-100/50 z-10'>
            <div className='flex gap-2 items-center h-15 w-fit px-10'>
                <img className='w-20 h-10 rounded-full' src="/images/mobileahop.jpeg" alt="Captain"/>
                <h1 className='text-2xl font-bold'>Cell Zone</h1>
            </div>
            <div>
                <ul className='flex gap-5 h-15 items-center'>
                    <li className='p-2 text-sm rounded-2xl font-semibold hover:scale-110'>
                       <Link to='/'> Home </Link>
                    </li>

                    <li className='p-2 text-sm rounded-2xl font-semibold hover:scale-110'> 
                        <Link to='/shop'>Products</Link>
                    </li>

                    <li className='p-2 text-sm rounded-2xl font-semibold hover:scale-110'>
                        <Link to='/categary'>Categary</Link></li>


                    <li className='p-2 text-sm rounded-2xl font-semibold hover:scale-110'>
                        {users ? <Link to="/login" className='bg-yellow-400 px-2 rounded-2xl py-2'>Get started</Link> : <Link to="/profile">Account</Link>}
                    </li>

                </ul>
            </div>
            <div>
                <ul className='flex gap-3 h-15 items-center mr-10'>

                    <li className='p-2 text-sm rounded-xl px-5 font-semibold hover:scale-110 bg-gray-300'>
                        <input className='outline-none font-bold' type="search" 
                        placeholder ='Search-item' />
                    </li>

                    <li className='p-2 text-sm rounded-2xl font-semibold hover:scale-110'
                    onClick={()=>setProfile(prev=>(!prev))}>
                        Menu
                    </li>

                </ul>
            </div>
        </div>
        <div>
            {profile ? Profiledata() : ''}
        </div>
    </div>
  )
}

export default Navbar
