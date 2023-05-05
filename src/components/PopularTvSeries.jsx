import React, { useRef, useState } from 'react'
import MovieDetails from './MovieDetails'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { motion, useInView } from 'framer-motion';
import { fadeMovies } from '@/styles/framer';

export default function PopularTvSeries( { movies } ) {

  const movieListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScrollLeft = () => {
      movieListRef.current.scroll({
        left: movieListRef.current.scrollLeft - 1000,
        behavior: 'smooth'
      });
      setScrollPosition(movieListRef.current.scrollLeft);
    }

    const handleScrollRight = () => {
      movieListRef.current.scroll({
        left: movieListRef.current.scrollLeft + 1000,
        behavior: 'smooth'
      });
      setScrollPosition(movieListRef.current.scrollLeft);
    }

  return (
    <motion.div variants={fadeMovies} animate='visible' initial='hidden' className='w-[85%] mx-auto py-[15%] lg:py-[4%] overflow-visible text-white'>
      <h2 className='text-xl text-center lg:text-left lg:text-5xl font-bold mt-4 tracking-wide'>Najwyżej oceniane seriale</h2>
      <div className='flex flex-nowrap gap-8 justify-between mt-10 relative'>
        <div onClick={handleScrollRight} className='absolute lg:right-[-4rem] xl:right-[-5rem] z-20 bottom-[50%] text-black bg-white/30 p-2 hover:bg-white/80 duration-500 cursor-pointer rounded-full hover:scale-90 active:scale-75 hidden lg:block'>
          <AiOutlineArrowRight className='text-2xl' />
        </div>
        <div ref={movieListRef} onScroll={() => setScrollPosition(movieListRef.current.scrollLeft)} className='flex flex-nowrap gap-8 justify-between overflow-x-scroll scrollbar-hide'>
          {
            movies.map((movie, index) => (
              <MovieDetails
                key={index}
                  title={movie.name}
                  url={movie.poster_path}
                  rating={movie.vote_average}
                  id={movie.id}
                  category='tv'
              />
            ))
          }
        </div>
        <div onClick={handleScrollLeft} className='absolute lg:left-[-4rem] xl;left-[-5rem] z-20 bottom-[50%] text-black bg-white/30 hover:bg-white/80 duration-500 cursor-pointer p-2 rounded-full hover:scale-90 active:scale-75 hidden lg:block'>
          <AiOutlineArrowLeft className='text-2xl' />
        </div>  
      </div>
    </motion.div>
  )
}
