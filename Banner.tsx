"use client";
import React from 'react'
import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import BannerText from './BannerText';

const Banner = () => {
  const NextArrow = (props: any) => {
    const {onClick} = props
    return(
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify center z-20 absolute Left-5 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    )
  };
  const PrevArrow = (props: any) => {
    const {onClick} = props
    return(
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify center z-20 absolute right-5 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    )
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
      <div className="w-full h-full relative">
        <img 
        src={"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a6e84027-e87a-4a5b-b9be-e9e4b79855a6.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"} alt="" className="w-full h-full relative" />
        <BannerText title="Essential Oil Diffuser" />
      </div>
      <div className="w-full h-full relative">
        <img 
        src={"https://m.media-amazon.com/images/S/aplus-media-library-service-media/1aa0f971-0678-491e-8121-7792ee812b54.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"} alt="" className="w-full h-full relative" />
      </div>
      <div className="w-full h-full relative">
        <img 
        src={"https://m.media-amazon.com/images/S/aplus-media-library-service-media/7a9c5600-304d-4e19-a635-1073b905872f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"} alt="" className="w-full h-full relative" />
      </div>
      <div className="w-full h-full relative">
        <img 
        src={"https://m.media-amazon.com/images/S/aplus-media-library-service-media/a316daec-4ca6-44a4-9283-735192226b86.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"} alt="" className="w-full h-full relative" />
      </div>
    </Slider>
    <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  )
}

export default Banner


