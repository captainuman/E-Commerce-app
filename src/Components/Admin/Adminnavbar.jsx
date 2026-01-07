import { Link } from 'react-router-dom'

const Adminnavbar = () => {

  return (
    <div className='flex bg-gray-400 justify-between items-center h-20'>
      <div className='flex px-10 w-120 gap-2 justify-center items-center'>
          <img className='h-10 w-20 rounded-full' src="/images/mobileahop.jpeg" alt="sdf" />
          <h1 className='text-3xl font-black'>Cell Zone</h1>
      </div>
      <ul className='flex justify-around items-center text-xl font-semibold text-amber-300 bg-gray-400 h-15 w-full ml-60'>
        <li>Home</li>
        <li><Link to='/Product-creation'>Product creation</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/adminshop'>Products</Link></li>
        <li className='text-red-500'><Link to='/'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Adminnavbar
