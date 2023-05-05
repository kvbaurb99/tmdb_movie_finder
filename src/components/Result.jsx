import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Result( { title, id, category, rating } ) {

    // multiply standard rating by 10 and floor final number
    const formattedRating = Math.floor(rating * 10)

  return (
    <>
    { category !== 'person' ? // if category of search is a person then don't show in results
    <Link href={`https://www.themoviedb.org/${category === 'movie' ? 'movie' : 'tv'}/${id}`} target='_blank'>
        <div className='flex items-center cursor-pointer w-full border-b border-gray-400/50 py-1 lg:py-2 justify-between'>
            <div className='flex items-center'>
                <AiOutlineSearch className='lg:text-lg' />
                <p className='ml-4 lg:text-base text-xs'>{title}</p>
            </div>
            <div className='flex items-center'>
                <p className='text-xs italic'>{category === 'movie' ? 'Film' : 'Serial'}
                    { formattedRating !== 0 ? // not all movies are rated, if not then not show a rating else show rating with specific color based on value
                        <span className={`${formattedRating >= 70 ? ( 'text-green-500' ) : formattedRating >= 50 && formattedRating < 70 ? ( 'text-yellow-600' ) : formattedRating >= 0 && formattedRating < 50 ? ( 'text-red-500' ) : null } ml-2 hidden`}>
                            {formattedRating} / 100
                        </span> 
                    : null}
                </p>
            </div>
        </div>
    </Link>
    :
    null
    }
    </>
  )
}
