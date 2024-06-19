import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'
import HeadingText from './HeadingText'
import DescriptionText from './DescriptionText'

const ContactUs = () => {
    return (
        <div id='contactus' className='h-full py-20'>
            <MaxContentWrapper >
                <div className='flex lg:flex-row-reverse items-center flex-col gap-x-5 justify-between'>
                    <div className='flex flex-row-reverse sm:gap-5 gap-1.5 items-center lg:w-3/4 w-full'>
                        <HeadingText title='Contact Now' />
                        <DescriptionText text={"Looking for a dynamic, immersive project? Whether it's an e-commerce platform, promotional website, or custom application, we specialize in creating engaging digital experiences that elevate your brand. Let's collaborate to bring your vision to life – get in touch today!"} />
                    </div>
                    <form className='lg:w-1/2 w-full flex flex-col gap-y-3 h-full'>
                        <div>
                            <p className='text-lg py-1.5 font-semibold font-sans'>Your Name:</p>
                            <input placeholder='your name' type="text" className='border-blue-500 border-2 rounded-lg pl-5 focus:outline-none py-1.5 w-full' />
                        </div>
                        <div>
                            <p className='text-lg py-1.5 font-semibold font-sans'>Your Email:</p>
                            <input placeholder='your email' type="text" className='border-blue-500 border-2 rounded-lg pl-5 focus:outline-none py-1.5 w-full' />
                        </div>
                        <div>
                            <p className='text-lg py-1.5 font-semibold font-sans'>Your Phone Number:</p>
                            <input placeholder='phone number' type="text" className='border-blue-500 border-2 rounded-lg pl-5 focus:outline-none py-1.5 w-full' />
                        </div>
                        <div>
                            <p className='text-lg py-1.5 font-semibold font-sans'>Your Message:</p>
                            <textarea placeholder='descrive your project' className='border-blue-500 border-2 rounded-lg pl-5 focus:outline-none py-1.5 w-full' rows="4"></textarea>
                        </div>
                        <input className='w-full bg-blue-500 text-white py-2.5 rounded-lg cursor-pointer hover:bg-blue-600' type="submit" value="Send" />
                    </form>
                </div>
            </MaxContentWrapper>
        </div>
    )
}

export default ContactUs