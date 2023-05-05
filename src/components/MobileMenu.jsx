import React from 'react'
import genres from '../data/category.json'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

export default function MobileMenu({ showMobileMenu, setShowMobileMenu }) {
  return (
    <ul className={`absolute top-0 text-white left-0 lg:hidden flex-col ${showMobileMenu ? 'flex' : 'hidden'} w-full h-[500px] bg-black items-center gap-6 text-2xl font-bold justify-center`}>
        <li>Strona Główna</li>
        <Link href='https://www.themoviedb.org/movie' target='_blank'><li>Filmy</li></Link>
        <Link href='https://www.themoviedb.org/tv' target='_blank'><li>Seriale</li></Link>
        <div className='flex text-xs flex-wrap justify-center gap-2'>
            {
                genres.map((genre, index) => (
                <div key={index} className='bg-blue-600 rounded-full px-3 py-2'>
                    {genre.title}
                </div>
                ))
            }
        </div>
        <AiOutlineClose onClick={() => setShowMobileMenu(false)} className='absolute top-5 right-5' />
    </ul>
  )
}
