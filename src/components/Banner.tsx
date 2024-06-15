import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'

export default function Banner() {
  return (
    <div className='flex  justify-center min-h-[60vh] md:min-h-[calc(100vh-80px)] items-center h-fit'>
      <MaxContentWrapper>
        <div className='lg:pt-0 pt-10'>
          <div className='text-center '>
            <h1 className='lg:text-7xl  md:text-5xl xl:w-3/4 w-full  text-4xl text-wrap mx-auto font-semibold  !leading-tight'>Crafting <span className='text-blue-500 font-bold'>Beautiful</span> and Functional Websites</h1>
            <p className='md:pt-5 pt-7  xl:w-3/4 w-full mx-auto text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est magni, expedita iste minus labore ab maiores harum quae blanditiis itaque porro eos veniam voluptatibus, hic odio at asperiores saepe quibusdam. Cum commodi ex quaerat et, incidunt deserunt ipsum
            </p>
            <div className='flex lg:flex-row flex-col gap-2.5 text-2xl pt-10 justify-center   items-center'>
              <button className='border rounded-full font-medium border-blue-500 px-10 py-2.5'>Explore More</button>
              <button className='border rounded-full font-medium text-white bg-blue-500 border-blue-500 px-12  py-2.5'>Say Hello 👋</button>
            </div>
          </div>
        </div>
      </MaxContentWrapper>
    </div>
  )
}
