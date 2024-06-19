"use client"

import React, { useEffect, useState } from 'react';
import MaxContentWrapper from './MaxContentWrapper';
import { FaDoorClosed } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleNav = () => {
        setOpen(!open);
    };

    const handleLinkClick = (sectionId: string) => {
        setOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection: string = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 70) {
                    currentSection = section.getAttribute('id') || 'home';
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className='sticky sm:py-5 py-2.5 bg-white/20 backdrop-blur-lg inset-x-0 top-0'>
            <MaxContentWrapper>
                <div className='w-full   flex justify-between items-center'>
                    {/* logo and navlinks div */}
                    <div className='text-blue-500 tracking-wide text-3xl font-semibold sm:text-3xl'>
                        ArtiFicia
                    </div>
                    <div className='lg:block hidden'>
                        <ul className='flex font-medium lg:gap-x-4 items-center'>
                            {["home", "services", "about", "works"].map((section) => (
                                <a key={section} href={`#${section}`}>
                                    <li className={`rounded-full transition-all cursor-pointer font-medium border-blue-500 px-3 py-1.5 ${activeSection === section ? "bg-blue-500 text-white" : ""}`}>
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>

                    <div className='lg:flex gap-x-2.5 hidden items-center'>
                        <a href="#works">
                            <button className='border rounded-full font-medium border-blue-500 px-3 py-1.5'>Projects</button>
                        </a>
                        <a href="#contactus">
                            <button className='border rounded-full font-medium text-white bg-blue-500 border-blue-500 px-3 py-1.5'>Contact</button>
                        </a>
                    </div>
                    <div onClick={toggleNav} className='lg:hidden z-[1000] block'>
                        <button className={`border rounded-full hover:bg-blue-500 hover:text-white transition-all font-medium border-blue-500 px-3 py-1.5 `}>
                            Menu
                        </button>
                    </div>
                </div>

            </MaxContentWrapper>
            <div className={`lg:hidden   fixed top-0 right-0 h-full w-full bg-blue-500 min-h-dvh transition-transform duration-500 transform ${open ? "translate-y-0" : "-translate-y-full"}`}>
                {/* <IoIosCloseCircleOutline onClick={toggleNav} className='absolute top-10 left-10 text-5xl text-white' /> */}
                <ul className='flex justify-center text-3xl text-white gap-10 items-center flex-col h-full'>
                    {["home", "services", "works", "about"].map((section) => (
                        <a onClick={() => handleLinkClick(section)} key={section} href={`#${section}`}>
                            <li className='cursor-pointer'>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </nav>

    );
}