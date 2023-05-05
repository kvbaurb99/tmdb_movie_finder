import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiFillStar, AiOutlineLink } from 'react-icons/ai'

export default function MovieDetails({ url, title, rating, id, category }) {

    const formattedRating = Math.floor(rating * 10);

  return (
    <div className='lg:min-w-[200px] min-w-[150px] xl:min-w-[225px] relative'>

        <Link href={`https://www.themoviedb.org/${category === 'movie' ? 'movie' : 'tv'}/${id}`} target='_blank' className='w-full h-full relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 duration-1000 flex justify-center items-center'>
            <p className='text-white text-lg'>Więcej informacji</p>
        </div>
            <Image
                src={`https://image.tmdb.org/t/p/original/${url}`}
                alt='movie-poster'
                width={225}
                height={150}
            />
        </Link>
        <p className='font-bold text-sm mt-2 tracking-wide'>{title}</p>
        <div className='mt-2 flex items-center'>
            <AiFillStar className='text-yellow-400' />
            <p className={`text-xs ml-2 font-bold ${formattedRating >= 70 ? ( 'text-green-500' ) : formattedRating >= 50 && formattedRating < 70 ? ( 'text-yellow-600' ) : formattedRating >= 0 && formattedRating < 50 ? ( 'text-red-500' ) : null }`}>
                {formattedRating} / 100
            </p>
        </div>
    </div>
  )
}
