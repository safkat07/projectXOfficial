import React from 'react'
import { FaChartLine } from "react-icons/fa";

const ServicesCards = ({ headingTitle, description }: { headingTitle: string, description: string }) => {
    return (
        <div className='w-full border-2 cursor-pointer group hover:bg-blue-500 transition-all border-blue-500 rounded-xl p-6 flex flex-col justify-between'>
            <div className='group-hover:text-white'>
                <FaChartLine className='size-10 shrink-0' />
                <p className='text-xl pt-5 font-semibold'>
                    {headingTitle}
                </p>
                <p className='pt-1.5'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServicesCards
