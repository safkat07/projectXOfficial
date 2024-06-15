import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'

export default function Navbar() {
    return (
        <nav className=' sticky py-5 bg-white/75 backdrop-blur-lg inset-x-0 top-0'>
            <MaxContentWrapper>
                <div className='w-full  flex justify-between items-center'>
                    {/* logo and navlinks div */}
                    <div className='text-blue-500 tracking-wide text-3xl font-semibold sm:text-3xl'>
                        Crafters
                    </div>
                    <div className='sm:block hidden'>
                        <ul className='flex  font-medium items-center gap-x-7'>
                            <li className='border rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-medium border-blue-500 px-3 py-1.5'>Home</li>
                            <li className=' rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-medium border-blue-500 px-3 py-1.5'>Services</li>
                            <li className=' rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-medium border-blue-500 px-3 py-1.5'>Works</li>
                            <li className=' rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-medium border-blue-500 px-3 py-1.5'>About</li>
                        </ul>
                    </div>

                    <div className='flex gap-x-2.5 items-center'>
                        <button className='border rounded-full font-medium border-blue-500 px-3 py-1.5'>Projects</button>
                        <button className='border rounded-full font-medium text-white bg-blue-500 border-blue-500 px-3 py-1.5'>Contact</button>
                    </div>
                </div>
            </MaxContentWrapper>
        </nav>
    )
}
