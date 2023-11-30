import React from 'react'


const page = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
        <div>
            <div className="w-full h-96 group overflow-hidden relative">
                
                <img
                  src={"https://m.media-amazon.com/images/I/71nZ9I+OmbL._AC_SL1500_.jpg"}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain duration-200 round-t-lg"
                />
                
                {
                    <span className="absolute top-2 right-2 font-medium text-xs text-white py-1 px-3 rounded-full bg-orange-600">
                    <form action="/api/checkout_sessions" method="POST">
                    <button>
                        Buy Now
                    </button>
                    </form>
                </span>
                }
            </div>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
                <p>Ultimate Aroma</p>
                <div className="flex items-center justify-between">
                    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
                        <p>15% off</p>
                    </div>
                    <div>
                        <p className="text-slate-500 line-through text-sm">$55</p>
                        <p className="Font-semibold">$43</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default page
