'use server'

import Link from "next/link"
import "../globals.css";
import Image from "next/image";

export default async function Footer() {
    return (
     
    <footer className="bg-orange-600 text-slate-800">

      <div
        className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        
        <div
          className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        
          <div>
            <Image src="/treylogo1.webp" alt="Trey Education" width={300} height={300} className="w-64"/>
          </div>
          
          <div className="flex justify-center space-x-4">
           <Link href="https://www.facebook.com">
              <Image src="/icon-facebook.svg" alt="" width={50} height={50} className="h-8 w-8"/> 
            </Link>
            <Link href="https://www.youtube.com">
              <Image src="/icon-youtube.svg" alt="" width={50} height={50} className="h-8 w-8" />
            </Link>
            <Link href="https://www.twitter.com">
              <Image src="/icon-twitter.svg" alt="" width={50} height={50} className="h-8 w-8" />
            </Link>
            <Link href="https://www.pinterest.com">
                <Image src="/icon-pinterest.svg" alt="" width={50} height={50} className="h-8 w-8" />
            </Link>
            <Link href="https://www.instagram.com">
                <Image src="/icon-instagram.svg" alt="" width={50} height={50} className="h-8 w-8" />
            </Link>
          </div>
        </div>
       
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    )
}