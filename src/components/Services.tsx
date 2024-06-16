import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'
import HeadingText from './HeadingText'
import ServicesCards from './ServicesCards'
import DescriptionText from './DescriptionText'
import Image from 'next/image'

const Services = () => {
    const allservices = [
        {
            headingTitle: "Custom Web Development",
            description: "We provide tailored web development solutions to fit your needs, using the latest technologies for robust, scalable, and high-performance websites."
        },
        {
            headingTitle: "Responsive Web Design",
            description: "Our responsive web designs ensure your website looks great and functions well on all devices, enhancing user satisfaction and search engine rankings."
        },
        {
            headingTitle: "E-commerce Development",
            description: "Boost your online sales with secure, user-friendly, and scalable e-commerce platforms, designed to provide a seamless shopping experience."
        },
        {
            headingTitle: "SEO and Digital Marketing",
            description: "Increase your online visibility with our SEO and digital marketing services, using proven strategies to drive targeted traffic and convert visitors into customers."
        }
    ];

    return (
        <div  id='services' className='h-full sm:py-10 py-20'>
            <MaxContentWrapper>
                <div className='flex lg:flex-row items-center flex-col gap-x-5 justify-between'>
                    <div className='flex  sm:gap-5 gap-1.5 items-center lg:w-3/4 w-full'>
                        <HeadingText title='Our Services' />
                        <DescriptionText text={"We specialize in crafting comprehensive web solutions that elevate your business and ensure sustainable growth. Our expert team blends innovative design with advanced technical skills to deliver personalized services that drive real results and exceed your expectations."} />
                    </div>
                    <div>
                        <Image layout='responsive' src="/about.svg" width={500} height={100} alt='aboutsvg' />
                    </div>
                </div>



                <div className='grid grid-cols-1 pt-10  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {allservices.map((service, index) => (
                        <div key={index} className='flex'>
                            <ServicesCards headingTitle={service.headingTitle} description={service.description} />
                        </div>
                    ))}
                </div>
            </MaxContentWrapper>
        </div>
    )
}

export default Services