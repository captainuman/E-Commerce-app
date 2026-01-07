import { Link } from 'react-router-dom'

const Adminnavbar = () => {

  return (
    <div className='flex bg-gray-400 justify-between items-center'>
      <div className='flex pl-5 w-100 gap-5'>
          <img className='h-10 ' src="src/Components/data/home.png" alt="sdf" />
          <h1 className='text-4xl font-black'>Cell Zone</h1>
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
