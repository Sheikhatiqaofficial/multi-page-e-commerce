import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderTop = ()=>{
  return(
    <div  className="border-b border-gray-200 hidden sm:block">
<div className="container py-4">
    <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-1">
            <div className="header_top_icon-wrapper">
              <FaFacebook/>
             </div>
             <div className="header_top_icon-wrapper">
             <FaTwitter />
             </div>
             <div className="header_top_icon-wrapper">
             <FaInstagram />
             </div>
             <div className="header_top_icon-wrapper">
             <FaLinkedin />
             </div>
             
         </div>

<div className="text-gray-500 text-[12px]">
    <b>FREE SHIPPING</b> ORDER OVER $55 THIS WEEK
</div>

<div className="flex gap-4">
    <select 
    className="text-gray-500 text-[12px] w-[70px] hover:cursor-pointer"
    name="currency"
    id="currency">
        <option value="USD $">USD $</option>
        <option value="EUR €">EUR €</option>
        <option value="Rupee ₹">Rupee ₹</option>
    </select>

<select 
className="text-gray-500 text-[12px] w-[80px] hover:cursor-pointer" 
name="language"
id="language">

<option value="English">English</option>
<option value="French">French</option>
<option value="Urdu">Urdu</option>
</select>
</div>





      </div>
   </div>
 </div>
)
}

export default HeaderTop;