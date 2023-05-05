import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

export default function NavBar({ showGenres, setShowGenres }) {

    const [ showMobileMenu, setShowMobileMenu ] = useState(false)

  return (
    <nav className='w-full h-[100px] absolute z-50'>
        <div className='xl:w-[75%] mx-auto h-full flex text-white items-center justify-between'>
            <div className='flex items-center lg:ml-[8rem] xl:ml-0'>
            <Image
                src={Logo}
                width={100}
                alt='logo'
                priority
            />
            </div>
            <ul className='gap-7 items-center lg:mr-[8rem] xl:mr-0 lg:flex hidden'>
                <li className='cursor-pointer hover:text-white/70 duration-500'>Strona główna</li>
                <Link href='https://www.themoviedb.org/movie' target='_blank'><li className='cursor-pointer hover:text-white/70 duration-500'>Filmy</li></Link>
                <Link href='https://www.themoviedb.org/tv' target='_blank'><li className='cursor-pointer hover:text-white/70 duration-500'>Seriale</li></Link>
                <Menu setShowGenres={setShowGenres} showGenres={showGenres} />
            </ul>
            <div onClick={() => setShowMobileMenu(true)} className='block lg:hidden mr-[2rem]'>
                <AiOutlineMenu className='text-xl' />
            </div>
        </div>
        <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </nav>
  )
}
