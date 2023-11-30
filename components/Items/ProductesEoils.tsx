import React from 'react'
import Link from 'next/link'


const ProductEoils = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
        <div>
            <div className="w-full h-96 group overflow-hidden relative">
                <Link href={"oil"}>
                <img
                  src={"https://media.bradfordexchange.com/image/upload/b_auto,c_pad,dpr_1.0,f_auto,h_1800,q_auto,w_1800/e_sharpen:200/c_pad,h_1800,w_1800/v1/bradford-exchange/0134279001?"}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-110 duration-200 round-t-lg"
                />
                </Link>
                {
                    <span className="absolute top-2 right-2 font-medium text-xs text-white py-1 px-3 rounded-full bg-orange-600">
                        <form action="/api/checkout_sessionsR" method="POST">
                    <button>
                        Buy Now
                    </button>
                    </form>
                    </span>
                }
            </div>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
                <p>Pure Essential Oils Set</p>
                <div className="flex items-center justify-between">
                    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
                        <p>15% off</p>
                    </div>
                    <div>
                        <p className="text-slate-500 line-through text-sm">$113</p>
                        <p className="Font-semibold">$74</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductEoils