import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-[200px] bg-black flex flex-col justify-center items-center text-white/60 gap-3'>
        <p className='text-3xl font-bold tracking-wide'>Movie Finder</p>
        <p className='text-sm tracking-wide'>Created with</p>
        <Link target='_blank' href='https://www.themoviedb.org/documentation/api' className='text-sm hover:text-white/70 underline duration-500 tracking-wide'>
            The Movie Database
        </Link>
        <p className='text-xs'>Jakub Urbański</p>
    </footer>
  )
}
