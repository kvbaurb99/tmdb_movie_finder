import React, { useState, useRef } from 'react'
import MovieDetails from './MovieDetails'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { fadeMovies } from '@/styles/framer';
import { motion } from 'framer-motion';

export default function PopularMovies({ movies }) {

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
    <motion.div variants={fadeMovies} initial='hidden' animate='visible' className='w-[85%] mx-auto py-[15%] md:py-[4%] overflow-visible text-white'>
      <h2 className='text-xl lg:text-5xl font-bold mt-4 tracking-wide text-center md:text-left'>Popularne filmy dziś</h2>
      <div className='flex flex-nowrap gap-8 justify-between mt-10 relative'>
        <div onClick={handleScrollRight} className='absolute lg:right-[-4rem] xl:right-[-5rem] z-20 bottom-[50%] text-black bg-white/30 p-2 hover:bg-white/80 hover:scale-90 active:scale-75 duration-500 cursor-pointer rounded-full hidden lg:block'>
          <AiOutlineArrowRight className='text-2xl' />
        </div>
        <div ref={movieListRef} onScroll={() => setScrollPosition(movieListRef.current.scrollLeft)} className='flex flex-nowrap gap-8 justify-center md:justify-between overflow-x-scroll scrollbar-hide'>
          {
            movies.map((movie, index) => (
              <MovieDetails
                key={index}
                  title={movie.title}
                  url={movie.poster_path}
                  rating={movie.vote_average}
                  id={movie.id}
                  category='movie'
              />
            ))
          }
        </div>
        <div onClick={handleScrollLeft} className='absolute lg:left-[-4rem] xl:left-[-5rem] z-20 bottom-[50%] text-black bg-white/30 hover:scale-90 hover:bg-white/80 duration-500 cursor-pointer p-2 rounded-full active:scale-75 hidden lg:block'>
          <AiOutlineArrowLeft className='text-2xl' />
        </div>  
      </div>
    </motion.div>
  )
}
