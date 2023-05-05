import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import genres from '../data/category.json'

export default function Menu({ showGenres, setShowGenres}) {

    const preventPropagation = (e) => {
        e.stopPropagation();
    }

  return (
    <div className='flex items-center gap-1 cursor-pointer relative'>
        <li onClick={() => setShowGenres(!showGenres)} className='cursor-pointer hover:text-white/70 duration-500'>Gatunki</li>
        <MdOutlineKeyboardArrowDown className='text-lg' />
        <div onClick={preventPropagation} className={`absolute top-[120%] left-0 h-[160px] bg-black border border-white/50 z-80 lg:w-[200px] xl:w-[220px] 2xl:w-[250px] rounded cursor-default text-white flex flex-wrap justify-start flex-col gap-1 p-2 lg:text-xs xl:text-sm ${showGenres ? 'flex' : 'hidden'}`}>
            {
                genres.map((genre, index) => (
                    <li key={index} className='cursor-pointer hover:underline py-1'>{genre.title}</li>
                ))
            }
        </div>
    </div>
  )
}
