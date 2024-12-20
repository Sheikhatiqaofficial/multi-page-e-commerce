"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
const Hero = () => {

    const settings = {
dots:true,
infinite:true,
slidesToShow:1,
slidesToScroll:1,
autoplay:true,
pauseOnHover:false,
 };

const slideData =[
    {
        id:0,
        img:"/banner-2.png",
        title:"Trending Item",
        mainTitle:"WOMEN'S LATEST FASHION SALE",
        price:"$20",

    },

    {
        id:1,
        img:"/banner-22.jpg",
        title:"Trending Accessories",
        mainTitle:"WOMEN'S SUNGLASES",
        price:"$15",

    },

    {
        id:2,
        img:"/banner-33.jpg",
        title:"Sale Offer",
        mainTitle:"NEW FASHION SUMMER SALE",
        price:"$30",

    },
];

return(
<div>
    <div className="container pt-6 lg:pt-0">
<Slider {...settings}>
    {slideData.map((item) => (
        <Slide 
    key={item.id}
    img={item.img}
    title={item.title}
    mainTitle={item.mainTitle}
    price={item.price}
    />
))}
</Slider>
    </div>
</div>
);
};

export default Hero;