import Login from './Login'
import Registration from './Registration'
import { useState } from 'react'

const Form = () => {
    
    const [active , setActive] = useState(true)
    const [data, setData] = useState([])
    
  return (
    <div>
      {active ? <Login setActive={setActive} data={data} setData={setData}/> : <Registration setActive={setActive} data={data} setData={setData}/>}
    </div>
  )
}

export default Form
