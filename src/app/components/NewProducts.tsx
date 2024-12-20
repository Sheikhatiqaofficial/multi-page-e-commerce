import React from "react";
import ProductCard from "./ProductCard";


const productsData = [
{
    img:"/jacket-1.webp",
    title:"Jacket",
    desc:"MEN YARN FLEECE FULL-ZIP JACKET",
    rating:4,
    price:45.00,
},
{
    img:"/skirt-1.webp",
    title:"Skirt",
    desc:"Black Floral Wrap Midi Skirt",
    rating:5,
    price:55.00,
},
{
    img:"/party-wear-1.webp",
    title:"Party Wear",
    desc:"Women Party Wear Shoes",
    rating:3,
    price:25.00,
},
{
    img:"/shirt-1.webp",
    title:"Shirt",
    desc:"Pure Garment Dyed Cotton Shirt",
    rating:4,
    price:45.00,
},
{
    img:"/sports-1.webp",
    title:"Sports",
    desc:"Tracking & Running Shoes - Black",
    rating:3,
    price:58.00,
},
{
    img:"/watch-1.webp",
    title:"Watches",
    desc:"Smart Watches Vital Plus",
    rating:4,
    price:100.00,
},
{
    img:"/watch-2.webp",
    title:"watches",
    desc:"Pocket Watch Leater Pouch ",
    rating:4,
    price:120.00,
},
];


const NewProducts = () => {

    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>


<div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

{productsData.map((item, index) => (
<ProductCard 
key={index}
img={item.img}
title={item.title}
desc={item.desc}
rating={item.rating}
price={item.price}
/>
))}
</div>
            </div>
        </div>
    );
};
export default NewProducts;