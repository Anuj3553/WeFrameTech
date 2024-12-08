import React from 'react'

export default function Navigation() {
    return (
        <div className='ml-6 flex gap-2 items-center'>
            {/* Breadcrumb */}
            <p className="font-[geist] font-[500] text-[14px] text-[#393939]">Home</p>
            <p className='w-[5px] h-[5px] rounded-full bg-[#9C9C9C] opacity-[30%]'></p>
            <p className='font-[geist] font-[500] text-[14px] text-[#9C9C9C] hover:underline hover:cursor-pointer'>Art de la Table</p>
        </div>
    )
}
