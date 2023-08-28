"use client"

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";

export default function Home() {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    const subMenuData = [
        { id: 1, name: "electronics" },
        { id: 2, name: "jewelery" },
        { id: 3, name: "men's clothing" },
        { id: 4, name: "women's clothing" }
    ];

    const [show, setShow] = useState(false);
    const [down, setDown] = useState(true);

    return (

        <ul className=" hdden text-white text-lg font-medium md:flex gap-4 px-3 py-2 h-10 items-center">
            {data.map((item) => {
                return (
                    <>
                        {item.subMenu ? (
                            <div>
                                <li className="cursor-pointer flex items-center hover:scale-90 duration-200"
                                    onClick={() => {
                                        !show ? setShow(true) : setShow(false)
                                        down ? setDown(false) : setDown(true)
                                    }}
                                >
                                    {item.name}
                                    {down ? (
                                        <span><HiChevronDown /></span>
                                    ) : (
                                        <span><HiChevronUp /></span>
                                    )}
                                </li>
                                {show && (
                                    <ul className="absolute top-[40px] text-white z-20 bg-black border-x-2 border-b-2">
                                        {subMenuData.map((ele) => {
                                            return (
                                                <div>
                                                    <li key={ele.id} category={ele.name} className="py-1 lg:py-2 px-4 mb-2 text-left cursor-pointer rounded-lg font-semibold hover:border-l-4 border-blue-900 hover:scale-95 transition-all duration-200"
                                                        onClick={() => {
                                                            !show ? setShow(true) : setShow(false)
                                                            down ? setDown(false) : setDown(true)
                                                        }}>
                                                        {ele.name}
                                                    </li>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                )}

                            </div>
                        ) : (
                            <li className="cursor-pointer hover:scale-90 duration-200">
                                <Link href={item.url}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </>
                )
            })}
        </ul>
    )
}
