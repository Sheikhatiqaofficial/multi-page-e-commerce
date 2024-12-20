import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

const HeaderMain = () =>{
return( 
<div className="border-b border-gray-200 py-6">
    <div className="container sm:flex justify-between items-center">
       <Link href={"/"}> <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish hover:cursor-pointer">Logo</div></Link>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
            <input 
            className ="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text" 
            placeholder="What are you looking for?" 
            />

<BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 hover:cursor-pointer" size={20}/>
        </div>
 <div className="hidden lg:flex gap-4 text-gray-500 text=[30px] hover:cursor-pointer">
 <Link href={"/user"}><BiUser size={30}/>
</Link>
<div className="relative">
    <FiHeart size={30}/>
    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1" >
        1
    </div>
</div>

<div className="relative">
<Link href={"/basket"} >    <HiOutlineShoppingBag size={30}/>
    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
        2
           </div>
           </Link>
        </div>
      </div>
    </div>
</div>
);

};
export default HeaderMain;