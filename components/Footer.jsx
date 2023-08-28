"use client"

import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 pb-3 md:px-16 lg:px-36">
            <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
           
                <div className="flex gap-[30px] md:gap-[50px] lg:gap-[100px] flex-col md:flex-row">
                  
                    <div className="hidden md:flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-xs cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-xs cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-xs cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-xs cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-xs cursor-pointer">
                            student discount
                        </div>
                    </div>
             
                    <div className="flex justify-around gap-[50px] md:gap-[50px] lg:gap-[100px] md:shrink-0">
                        
                        <div className="flex flex-col gap-2">
                            <div className="font-oswald font-medium uppercase text-xs">
                                get help
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                     
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-xs">
                                About ixicom
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-xs text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
        
                    </div>

        
                </div>
            
                <div className="flex gap-3 items-center justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={15} />
                    </div>
                    <div onClick={() => window.open("https://twitter.com/kargilDixit_32", "_blank")} className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={15} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={15} />
                    </div>
                    <div onClick={() => window.open("https://www.instagram.com/dixit.append_gogoi/", "_blank")} className="w-8 h-8 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={15} />
                    </div>
                </div>
         
            </div>

            <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">

                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
              
                <div className="flex gap-2 md:gap-3 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
       
            </div>
        </footer>
    );
};

export default Footer;
