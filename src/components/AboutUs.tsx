import React from 'react'
import MaxContentWrapper from './MaxContentWrapper'
import HeadingText from './HeadingText'
import DescriptionText from './DescriptionText'
import Image from 'next/image'
const AboutUs = () => {
    return (
        <div className='h-full py-10'>
            <MaxContentWrapper >
                <div className='flex lg:flex-row-reverse flex-col gap-x-5 justify-between'>
                    <div className='flex flex-row-reverse sm:gap-5 gap-1.5 items-center lg:w-3/4 w-full'>
                        <HeadingText title='About Us' />
                        <DescriptionText text={"we believe in the power of collaboration. We work closely with you to understand your unique needs and aspirations, translating them into stunning websites that stand out in the crowded online world."} />
                    </div>
                    <div >
                        <Image className='' layout="responsive" width={500} height={300} src="/undraw_building_websites_i78t.svg" alt='teams image' />
                    </div>
                </div>

            </MaxContentWrapper>
        </div>
    )
}

export default AboutUs
