import { createContext } from 'react'
import { useState } from 'react'

export const Itemsdata = createContext()

const Api = (props) => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("user")))
  const [login , setLogin] = useState(true)
  const [cartdata , setCartdata] = useState([])
  const [order , setOrder] = useState([])
  return (
    <div>
      <Itemsdata.Provider value={{users, setUsers , login, setLogin , cartdata , setCartdata , order , setOrder}}>
        {props.children}
      </Itemsdata.Provider>
    </div>
  )
}

export default Api
