'use server'

import React from 'react'
import Link from "next/link"
import Image from "next/image";

export default async function Header() {
    return (
        <header className="bg-white text-slate-500">
            <div className="container flex flex-col lg:flex-row justify-between">
                <div className="container flex flex-col items-center justify-between lg:px-6 lg:py-4 px-3 py-2 mx-auto">
                    <div className="lg:-ml-32">
                        <div className="h-28 w-screen lg:h-28 lg:w-96 relative"> 
                            <Image src="/treylogo1.webp" alt="Trey Education" layout='fill' objectFit='cover'/>
                        </div>
                    </div>
                    <h1 className="text-sm lg:text-2xl">Customized <span className="text-orange-400">support for</span> independent <span className="text-orange-400">schools</span> and <span className="text-orange-400">teachers</span></h1>
                </div>
                <div className="text-center lg:w-1/4 my-auto text-xl"><Link href="#">Home</Link></div>
                <div className="text-center lg:w-1/4 my-auto text-xl"><Link href="#">About Us</Link></div>
                <div className="text-center lg:w-1/4 my-auto text-xl"><Link href="#">Our Work</Link></div>
                <div className="text-center lg:w-1/4 my-auto text-xl"><Link href="#">Contact Us</Link></div>
            </div>
        </header>
    )
}
