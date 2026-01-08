import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Navbar from "../homepage/navbar";
import { Itemsdata } from "../data/api";
import axios from "axios";

const ProductDisplay = () => {

  const {order , setOrder , cartdata , setCartdata} = useContext(Itemsdata)
  const [errorlogin , setErrorlogin] = useState(false)

   const [product , setProduct] = useState([])
   
    useEffect(()=>{
      fetch('https://e-commerce-app-backend-pi.vercel.app/data')
      .then(res=>res.json())
      .then(data=>setProduct(data))
      .catch(err=>console.log(err))
    },[])


  const formatted = new Date(
  new Date().setDate(new Date().getDate() + 7)
  ).toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  });

  const { id } = useParams();
  const product2 = product.find(
    (item) => item.id === id
  );
  if (!product2) {
    return <h1>Item not found</h1>;
  }

  let discount = ((parseInt(product2.Discount)) / 100) * parseInt(product2.price)
  let tverify = localStorage.getItem('user')
  let verify = JSON.parse(tverify)
  console.log(verify)

  async function addtocart() {
  try {
    if (!verify) {
      const updatedOrder = [...cartdata, product2];
      setCartdata(updatedOrder);
      await axios.post(
        "https://e-commerce-app-backend-pi.vercel.app/cart",
        product2,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Added to Cart successfully");
    } 
    else {
      setErrorlogin(true);
    }
  } 
  catch (err) {
    console.error("Failed to add order:", err);
  }
}

async function addtoorder() {
  try {
    if (!verify) {
      const updatedOrder = [...order, product2];
      setOrder(updatedOrder);
      await axios.post(
        "https://e-commerce-app-backend-pi.vercel.app/orders",
        product2,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Order placed successfully");
    } 
    else {
      setErrorlogin(true);
    }
  } 
  catch (err) {
    console.error("Failed to add order:", err);
  }
}


    function Loginalert(){
      return (
        <div className="fixed left-100 top-30 bg-red-500 h-70 rounded-3xl w-fit px-10 flex flex-col items-center justify-center gap-20">
          <h1 className="text-3xl text-amber-200">Please login first to continue</h1>
          <button className="text-3xl bg-blue-200 w-fit px-10 py-2 rounded-4xl">click here to Login</button>
        </div>
      )
    }

  function remover(){
    setErrorlogin(false)
  }

  let quantity = parseInt(product2.quantity)
   return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex">
        <div className="h-screen mt-15 w-100">
          {product2.images.map(function(e){
            return <div>
              <img className="w-80 h-50 ml-10 mt-5 rounded-2xl" src={e} alt="Error Loading " />
            </div>
          })}
        </div>

        <div onClick={remover} className="mt-15 w-150">
          <div>
            <p className="text-2xl p-10 font-semibold">{product2.name} {product2.description} <br />
            <span className="text-sm text-blue-800">Brand : {product2.brand}</span></p>
          </div>
          <hr  className="text-gray-300"/>

          <div className="py-5">
            <p className="text-3xl px-10"><span className="text-red-500 mr-2">-{product2.discount}%</span> ${product2.quantity * (product2.price-discount)}</p>
            <p className="px-10 pt-2 text-sm font-bold text-gray-500">M.R.P. : <span className="line-through decoration-2">${product2.price}</span></p>
            <div className="flex">
              <p className="text-xl px-10 font-bold">Quantity : {quantity}</p>
              
            </div>
          </div>
          <hr className="text-gray-300"/>

          <div className="py-5 px-10">
            <h1 className="font-bold">Color <span className="ml-20 font-semibold">{product2.color}</span> </h1>
            <h1 className="font-bold">Size <span className="ml-22 font-semibold">{product2.size?.height} {product2.size?.weight}</span></h1>
            <h1 className="font-bold">Brand <span className="ml-18 font-semibold">{product2.brand}</span></h1>
            <h1 className="font-bold">Material <span className="ml-14 font-semibold">{product2.material}</span></h1>
          </div>
          <hr className="text-gray-300" />

          <div className="py-5">
            <h1 className="text-3xl font-semibold px-10">About this item</h1>
            <p className="px-10 text-xl pt-5">{product2.about}</p>
          </div>
      </div>


      <div className="border  rounded-3xl px-5 py-5 w-50 mt-30 ml-5 h-80 bg-gray-300">
        <h1 className="font-bold">{product2.name}</h1>
        <h1 className="text-3xl">Rs  {product2.price}</h1>
        <h1 className="text-sm font-semibold rounded w-fit">Quantity : {quantity}</h1>
        <p className="text-sm mt-2 mb-10">Free delivery <span className="text-sm font-bold mt-2">{formatted}</span></p>
        <button className="bg-yellow-400 py-2 rounded-2xl w-full"
        onClick={addtocart}>Add to cart</button> <br />
        <button onClick={addtoorder}
        className="bg-orange-400 py-2 rounded-2xl mt-4 w-full">Shop</button>
        {errorlogin ?  <Loginalert/> : ""}
      </div>
    </div>
  </div>
  );

};

export default ProductDisplay;

