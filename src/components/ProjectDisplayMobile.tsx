import React from 'react'
import imgproject1 from '../../public/project1_KidsZone.png'
import imgproject2 from '../../public/Project2Gym.png'
import imgproject3 from '../../public/project3-ClaraVista.png'
import imgproject4 from '../../public/project4Kitchen.png'
import imgproject5 from '../../public/project5Fanta.png'
import ProjectCards from './ProjectCards'
import Image from 'next/image'
const projects = [
    {
        "id": 1,
        "projectName": "Kids Zone",
        "projectDescription": "A dynamic e-commerce web template designed for small businesses. Customizable to fit your unique needs.",
        "projectImage": imgproject1,
        "liveLink": "https://splendorous-paletas-42a7e3.netlify.app/"
    },
    {
        "id": 2,
        "projectName": "Daily Fit",
        "projectDescription": "A NextJS-powered website template perfect for gym centers. Fully customizable and ready to boost your online presence.",
        "projectImage": imgproject2,
        "liveLink": "https://daily-fit-gym-website.vercel.app/"
    },
    {
        "id": 3,
        "projectName": "Clara Vista",
        "projectDescription": "High-converting e-commerce website with mobile optimization and SEO integration. Enhance customer engagement with custom features.",
        "projectImage": imgproject3,
        "liveLink": "https://beamish-strudel-038ba5.netlify.app/"
    },
    {
        "id": 4,
        "projectName": "The Kitchen",
        "projectDescription": "Sleek and efficient culinary e-commerce platform. Fully customizable to showcase your passion for cooking.",
        "projectImage": imgproject4,
        "liveLink": "https://thekitchen-778bb.web.app/"
    },
    // {
    //     "id": 5,
    //     "projectName": "Fanta Home",
    //     "projectDescription": "Experimental design showcasing interactive elements. Explore the demo and envision possibilities for your project.",
    //     "projectImage": imgproject5,
    //     "liveLink": "https://fantalandingpage.web.app/"
    // }
]
const ProjectDisplayMobile = () => {
    return (
        <div className='flex lg:hidden flex-col gap-20'>
            {
                projects.map((project) => <div className='flex flex-col gap-2' key={project.id}>
                    <div className='flex items-center  justify-between'>
                        <p className='text-3xl uppercase underline  font-bold'>{project.projectName}</p>
                        <a className='text-lg text-blue-500 font-bold' target='_blank' href={project.liveLink}>Go Live 🌐</a>
                    </div>
                    <p className='text-xl text-justify'>{project.projectDescription}</p>
                    <Image className='w-full' src={project.projectImage} alt={project.projectName} />
                </div>)
            }

        </div>
    )
}

export default ProjectDisplayMobile