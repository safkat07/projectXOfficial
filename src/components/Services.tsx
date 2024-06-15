import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'
import HeadingText from './HeadingText'
import ServicesCards from './ServicesCards'

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
        <div className='h-full pb-10'>
            <MaxContentWrapper>
                <HeadingText title='Our Services' />

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