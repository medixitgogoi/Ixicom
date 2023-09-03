// import { useState } from "react";
// import { HiChevronDown } from "react-icons/hi";
// import { HiChevronUp } from "react-icons/hi";

import Link from "next/link";

export default function Home() {

    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Products", url: "/products" },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    // const subMenuData = [
    //     { id: 1, name: "electronics" },
    //     { id: 2, name: "jewelery" },
    //     { id: 3, name: "men's clothing" },
    //     { id: 4, name: "women's clothing" }
    // ];

    // const [show, setShow] = useState(false);
    // const [down, setDown] = useState(true);

    return (

        <ul className=" hdden text-white text-lg font-medium md:flex gap-4 px-3 py-2 h-10 items-center">
            {data.map((item) => {
                return (
                    <li className="cursor-pointer hover:scale-90 duration-200" key={item.id}>
                        <Link href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
