import React from 'react'
import Link from 'next/link'

const ProductN = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
        <div>
            <div className="w-full h-96 group overflow-hidden relative">
                <Link href={"/fire"}>
                <img
                  src={"https://m.media-amazon.com/images/I/71J4zA7HKGL._AC_SX425_.jpg"}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-110 duration-200 round-t-lg"
                />
                </Link>
                {
                    <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
                        Special
                    </span>
                }
            </div>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
                <p>Campfire Oil Diffuser </p>
                <div className="flex items-center justify-between">
                    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
                        <p>15% off</p>
                    </div>
                    <div>
                        <p className="text-slate-500 line-through text-sm">$94</p>
                        <p className="Font-semibold">$74</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductN