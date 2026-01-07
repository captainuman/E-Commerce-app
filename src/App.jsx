import { Route, Routes } from 'react-router-dom'
import Home from './Components/home'
import Form from './Components/forms/form'
import Profile from './Components/profile/profile'
import Itemsdisplay from './Components/shop/itemsdisplay'
import Categary from './Components/categary/Categary'
import ProductDisplay from './Components/shop/Item'
import Adminhomepage from './Components/Admin/Adminhomepage'
import Items from './Components/Admin/Items'
import Productcreation from './Components/Admin/Productcreation'
import Users from './Components/Admin/Users'
import Loginform from './Components/Admin/loginform'
const App = () => {

  return (
     <div className='overflow-hidden'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Form/>}/> 
        <Route path='/profile' element={<Profile/>} />
        <Route path='/shop' element={<Itemsdisplay/>} />
        <Route path='/categary' element={<Categary/>} />
        <Route path="/product/:id" element={<ProductDisplay/>} />
        <Route path='/adminpage' element={<Adminhomepage/>}/>
        <Route path='/adminshop' element={<Items/>} />
        <Route path='/Product-creation' element={<Productcreation/>} />
        <Route path='/users' element={<Users/>} />
        <Route path = '/adminloginpage' element={<Loginform/>} />
      </Routes>
    </div>
  )
}

export default App
