import React from 'react'
import th from './Images/th.jpg.jpg'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    
   <div className="p-16 bg-black">
    <div className=" text-white text-center text-5xl font-serif hover:text-orange-400">Contact Us</div>
   </div>
   <div  >
    <ul className="flex mx-36 -mt-5">
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-orange-200 text-center text-2xl  hover:bg-slate-600">
       <img className=" rounded-full p-10 "src={th} alt="person" /> 
       <p className=" font-serif text-xl">J.Venkatesh</p>
      <p className=" font-serif text-lg text-slate-400">2100032371</p>
      <Link className="text-red-200 hover:text-white mt-4" to="https://t.me/veerreddy1">contact</Link>
      </li>
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-orange-200 text-center text-2xl  hover:bg-slate-600">
      <img className=" rounded-full p-10 "src={th} alt="person" />
      <p className=" font-serif text-xl">P.Manoj</p>
      <p className=" font-serif text-lg text-slate-400">2100032430</p>
      <Link className="text-red-200 hover:text-white mt-4" to="https://t.me/veerreddy1">contact</Link>
      </li>
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-orange-200 text-center text-2xl hover:bg-slate-600">
      <img className=" rounded-full p-10 "src={th} alt="person" />
      <p className=" font-serif text-xl">T.Veer Reddy</p>
      <p className=" font-serif text-lg text-slate-400">2100032453</p>
      <Link className="text-red-200 hover:text-white  mt-4" to="https://t.me/veerreddy1">contact</Link>
      
      </li>
    </ul>
   </div>
   </>
  )
}