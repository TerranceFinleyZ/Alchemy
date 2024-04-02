"use client";
import React from 'react'
import { BsYoutube, BsGithub, BsLinkedin, BsFacebook, BsReddit, } from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-y-4">
                <Logo />
                <p>
                Aromatherapy is the practice of using the natural oils extracted from flowers, bark, stems, leaves, roots or other parts of a plant to enhance psychological and physical well-being.
                </p>
                <div className="flex items-center gap-x-4">
            <a href="https://www.youtube.com/watch?v=mzT6R4e-RQo" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://github.com/TerranceFinleyZ/Alchemy" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/terrance-finley/" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://www.facebook.com/imperialworld.2023" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="/" target="_blank">
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
            </div>
            <div>
          <p className="text-lg">Last posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
              Our sorrows and wounds are healed only when we touch them with compassion.
              </span>
              <span className="text-orange-600">November 17, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
              Life is a journey of both beauty and challenges. 
              </span>
              <span className="text-orange-600">November 12, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
              As soon as healing takes place, go out and heal somebody else.
              </span>
              <span className="text-orange-600">November 06, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
              We are healed of a suffering only by experiencing it to the full.
              </span>
              <span className="text-orange-600">November 01, 2023</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/en"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Shop
              </li>
            </Link>
            <Link href={"/login"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">© 2023 Alchemy All rights reserverd</p>
        </div>
        </Container>      
    </div>
  )
}

export default Footer
