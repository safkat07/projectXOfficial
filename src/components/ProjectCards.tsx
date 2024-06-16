import Image from 'next/image';
import React from 'react';

const ProjectCards = ({ projectName, projectImage, liveLink }: {
    projectName: string
    projectImage: string
    liveLink: string
}) => {
    return (
        <div className='w-full group hover:px-5 hover:shadow-xl  flex justify-center hover:text-white items-center hover:bg-blue-500 cursor-pointer transition-all duration-500 h-24 border-b-2 border-blue-500'>
            <div className=' flex justify-between items-center w-full'>
                <p className='text-xl font-semibold'>{projectName}</p>
                <div>
                    <a className='text-xl' href={liveLink} target="_blank" rel="noopener noreferrer">Live Link 🌐</a>
                </div>
            </div>

            <div className='fixed z-[20] shadow-2xl pointer-events-none -left-full opacity-0 group-hover:opacity-100 rounded-lg group-hover:left-1/2 top-[30%] transition-all duration-500 transform rotate-12 bottom-0 mx-auto w-[25%] h-[50%] border bg-white'>
                <Image src={projectImage} alt={projectName} className='w-full h-full object-cover object-top rounded-lg' />
            </div>
        </div>
    );
}

export default ProjectCards;
