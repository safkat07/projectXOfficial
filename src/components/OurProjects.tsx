import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'
import HeadingText from './HeadingText'
import DescriptionText from './DescriptionText'
import Image from 'next/image'

const OurProjects = () => {
    return (
        <div className='h-full py-10'>
            <MaxContentWrapper>
                <div className='flex lg:flex-row flex-col gap-2.5 justify-between'>
                    <div className='flex  sm:gap-5 gap-1.5 items-center lg:w-3/4 w-full'>
                        <HeadingText title='Our Works' />
                        <DescriptionText text={"We specialize in developing innovative and impactful solutions tailored to meet the unique needs of our clients. From cutting-edge mobile applications to dynamic web platforms, our projects span across diverse industries, delivering exceptional user experiences and robust functionality."} />
                    </div>
                    <div>
                        <Image className='' layout="responsive" width={500} height={300} src="/works.svg" alt='teams image' />
                    </div>
                </div>

            </MaxContentWrapper>
        </div>
    )
}

export default OurProjects