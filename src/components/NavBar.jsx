import React from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className='w-full h-[100px] absolute z-50'>
        <div className='xl:w-[75%] mx-auto h-full flex text-white items-center justify-between'>
            <div className='flex items-center'>
            <Image
                src={Logo}
                width={100}
                alt='logo'
            />
            </div>
            <ul className='flex gap-7 items-center'>
                <li className='cursor-pointer hover:text-white/70 duration-500'>Strona główna</li>
                <Link href='https://www.themoviedb.org/movie' target='_blank'><li className='cursor-pointer hover:text-white/70 duration-500'>Filmy</li></Link>
                <Link href='https://www.themoviedb.org/tv' target='_blank'><li className='cursor-pointer hover:text-white/70 duration-500'>Seriale</li></Link>
                <div className='flex items-center gap-1 cursor-pointer relative'>
                    <li className='cursor-pointer hover:text-white/70 duration-500'>Gatunki</li>
                    <MdOutlineKeyboardArrowDown className='text-lg' />
                </div>
            </ul>
        </div>
    </nav>
  )
}
