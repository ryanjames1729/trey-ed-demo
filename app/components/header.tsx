'use server'

import React from 'react'
import Link from "next/link"
import Image from "next/image";

export default async function Header() {
    return (
        <header className="bg-white text-slate-500">
            <div className="container flex flex-row justify-between">
                <div className="container flex flex-col items-center justify-between px-6 py-4 mx-auto">
                    <div className="-ml-32"><Image src="/treylogo1.webp" alt="Trey Education" width={300} height={300} /></div>
                    <h1>Customized <span className="text-orange-400">support for</span> independent <span className="text-orange-400">schools</span> and <span className="text-orange-400">teachers</span></h1>
                </div>
                <div className="w-1/4 my-auto text-xl"><Link href="#">Home</Link></div>
                <div className="w-1/4 my-auto text-xl"><Link href="#">About Us</Link></div>
                <div className="w-1/4 my-auto text-xl"><Link href="#">Our Work</Link></div>
                <div className="w-1/4 my-auto text-xl"><Link href="#">Contact Us</Link></div>
            </div>
        </header>
    )
}
