import React from 'react'

const DescriptionText = ({ text }: { text: string }) => {
    return (
        <p className='lg:text-3xl leading-tight  text-lg'>{text}</p>
    )
}

export default DescriptionText