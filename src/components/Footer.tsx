import React from "react";
import MaxContentWrapper from "./MaxContentWrapper";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" py-10 bg-blue-500">
            <MaxContentWrapper>
                <div className="h-full text-white flex items-center justify-center flex-col ">
                    <h1 className="text-3xl text-white  ">ArtiFicia</h1>
                    <p className="text-center p-5 ">
                        ArtiFicia is a blog website where you will find great tutorials on
                        web design <br />
                        and development. Here each tutorial is beautifully described step by
                        step
                        <br /> with the required source code.
                    </p>

                    <div>
                        <ul className="icons flex p-5 text-lg gap-x-3 hover:cursor-pointer">
                            <li className=" ">
                                <FaFacebook />
                            </li>
                            <li className="">
                                <FaInstagram />
                            </li>
                            <li className="">
                                <FaLinkedin />
                            </li>
                            <li className="">
                                <FaWhatsapp />
                            </li>
                            <li className="">
                                <FaTwitterSquare />
                            </li>
                            
                        </ul>
                    </div>

                    <div className="flex items-center gap-1 ">
                        <FaCopyright />
                        <span>Allright Reserved by ArtiFicia</span>
                    </div>
                </div>
            </MaxContentWrapper>
        </div>
    );
};

export default Footer;