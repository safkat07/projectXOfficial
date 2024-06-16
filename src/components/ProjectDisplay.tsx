import React from 'react'
import imgproject1 from '../../public/project1_KidsZone.png'
import imgproject2 from '../../public/Project2Gym.png'
import imgproject3 from '../../public/project3-ClaraVista.png'
import imgproject4 from '../../public/project4Kitchen.png'
import imgproject5 from '../../public/project5Fanta.png'
import ProjectCards from './ProjectCards'

const projects = [
    {
        "id": 1,
        "projectName": "Kids Zone",
        "projectDescription": "An e-commerce style web template for small businesses. So far, this is just a design, a rough idea behind the main outputs. If you like this one, we can completely change it as per your requirements.",
        "projectImage": imgproject1,
        "liveLink": "https://splendorous-paletas-42a7e3.netlify.app/"
    },
    {
        "id": 2,
        "projectName": "Daily Fit",
        "projectDescription": "Suppose you have just opened a new gym center. You need a website to reach out to your customers and extend your business. So what do you need first? Of course, you need a website! Here we go, we have made this template for you. This 1000% customizable template is made with the latest and greatest technology, NextJS. We can make it fully functional for you. Just sit with us, discuss your idea, and we are committed to helping you.",
        "projectImage": imgproject2,
        "liveLink": "https://daily-fit-gym-website.vercel.app/"
    },
    {
        "id": 3,
        "projectName": "Clara Vista",
        "projectDescription": "This is Clara-Vista, a high-converting website that will help you stand out. Our visually stunning designs showcase your products, while an intuitive, user-friendly interface ensures a seamless shopping experience from browsing to checkout. With mobile optimization, your site will look and function perfectly on all devices. We also offer SEO and marketing integration to drive traffic, along with secure e-commerce solutions for efficient order management. Custom features like virtual try-ons and detailed product filters enhance customer engagement. Let’s schedule a consultation to discuss how we can help your business thrive online.",
        "projectImage": imgproject3,
        "liveLink": "https://beamish-strudel-038ba5.netlify.app/"
    },
    {
        "id": 4,
        "projectName": "The Kitchen",
        "projectDescription": "Got a knack for cooking but need the right tools? Welcome to The Kitchen, your go-to online platform for all things culinary! Imagine an e-commerce site that’s as sleek and efficient as your favorite knife. Whether you’re a budding chef or just love to whip up a good meal, we’ve designed this template to meet your needs. Fully customizable and built with the latest tech, it’s like having a sous-chef at your fingertips. So, let’s get chopping, mixing, and sautéing – and create a website that’ll make your customers hungry for more!",
        "projectImage": imgproject4,
        "liveLink": "https://thekitchen-778bb.web.app/"
    },
    {
        "id": 5,
        "projectName": "Fanta Home",
        "projectDescription": "An experimental design that you can interact with. It is still under construction and we are still finding ways to make it more beautiful. View the demo from the Live View button and gain some ideas about what we can do for you.",
        "projectImage": imgproject5,
        "liveLink": "https://fantalandingpage.web.app/"
    }
]
const ProjectDisplay = () => {
    return (
        <div className='lg:flex hidden  flex-col '>
            {
                projects.map((project) => <ProjectCards key={project.id} {...project}></ProjectCards>)
            }
        </div>
    )
}

export default ProjectDisplay