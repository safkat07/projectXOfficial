import React from 'react'

const DescriptionText = ({ text }: { text: string }) => {
    return (
        <p className='xl:text-2xl  leading-tight  text-lg text-justify'>{text}</p>
    )
}

export default DescriptionText