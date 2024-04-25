"use client";
import Link from 'next/link';
import Image from 'next/image';
//import {myButton as myButton} from './myButton';
//whenever using use state or use effect always add use client on top
import {signIN , signOut , useSession, getProviders} from 'next-auth/react';
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
      <Image src="/assets/images/laptop-computers.ico"
      alt="promptopia logo"
      width={50}
      height={50}
      className="object-contain"
      />
      
    </Link>
    <button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
      Hi from my button
      </button>
    </nav>

  )
}

export default Nav
