import React from "react";
import Link from "next/link";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";

const MobNavbar = () => {
return(
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%]">
        <div className="flex justify-between text-[28px] py-2">
            <IoMenuOutline/>
           <div className="relative">
                <HiOutlineShoppingBag/>
                <Link href={"/basket"}><div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
2

                </div>
                </Link>
            </div>
            <Link href={"/"}><AiOutlineHome/></Link>
<div className=" relative">
    <FiHeart/>
    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text=[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
    </div>
</div>

<AiOutlineAppstore/>
        </div>

    </div>
);

}
export default MobNavbar;