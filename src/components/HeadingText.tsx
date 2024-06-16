import React from 'react'

const HeadingText = ({ title }: {
    title: string
}) => {
    return (
        <h1 style={{
            textOrientation: 'revert-layer',
            writingMode: "vertical-lr"
        }} className='flex items-center text-blue-500 gap-1.5 lg:text-5xl text-3xl'>
            <div className='size-5 shrink-0 rounded-full bg-red-500'>
            </div>
            {title}
        </h1>
    )
}

export default HeadingText