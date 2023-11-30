import React from 'react'
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200">Alchemy.</h3>
    </Link>
  )
}

export default Logo
