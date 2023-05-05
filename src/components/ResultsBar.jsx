import React from 'react'
import Result from './Result'
import { HiOutlineEmojiSad } from 'react-icons/hi'

export default function ResultsBar({ value, result }) {
  return (
    <>
        {value ? 
            <div className='absolute top-[100%] left-0 w-full h-[200px] lg:h-[285px] bg-white rounded overflow-y-scroll  scroll-smooth scroll'>
                <div className='relative z-80 text-black p-4 bg-white flex flex-col gap-2'>
                  { result.length > 0 ?
                  
                    result?.map((movie, index) => (
                      <Result
                        key={index}
                        title={movie.title || movie.name}
                        id={movie.id}
                        category={movie.media_type} // category for including only movies + tv series (not including actors)
                        rating={movie.vote_average}
                      />
                    ))
                    :
                    <div className='w-full h-[150px] lg:h-[225px] flex flex-col gap-1 justify-center items-center'>
                      <HiOutlineEmojiSad className='text-3xl' />
                      <span className='lg:text-lg text-xs text-center lg:text-left font-bold'>Brak wyników, spróbuj innej nazwy.</span>
                    </div>
                  }
                </div>
            </div>
         : null}
    </>
  )
}
