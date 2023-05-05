import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { headerVariant, searchVariant, searchDescriptionVariant } from '@/styles/framer';
import ResultsBar from './ResultsBar';
import { getByQuery } from '@/pages/api';
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header({ movies, setShowGenres }) {

    const [randomMovie, setRandomMovie] = useState({})
    const [value, setValue] = useState('')
    const [result, setResult] = useState([])

    useEffect(() => {
        // generate random movie for header if there is more than one movie
        if (movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setRandomMovie(movies[randomIndex]);
        }
    }, [movies])

    useEffect(() => {
        // fetch if input value has atleast one character
        if (value.length >= 1) {
            getByQuery(value)
            .then(data => {
                setResult(data)
            })
        // if input value is empty then set results to empty array    
        } else if (value.length <= 0) {
            setResult([]);
        }
        // fetch every time when value changes
    }, [value])



  return (
    <motion.div onClick={() => setShowGenres(false)} variants={headerVariant} initial='hidden' animate='visible' className='w-full mx-auto bg-black h-[500px] lg:h-screen relative flex justify-center items-center rounded-bl rounded-br text-white'>
        <div className='absolute top-0 left-0 bg-black/60 w-full h-[500px] lg:h-screen z-20 rounded'></div>
        <img loading='lazy' alt='header' src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`} className='lg:h-screen h-[500px] w-full absolute top-0 rounded object-cover' />
        <div className='relative z-20 w-[80%] mx-auto flex flex-col'>
            <motion.div variants={searchDescriptionVariant} initial='hidden' animate='visible'>
                <p className='text-white text-left mb-3 text-2xl lg:text-5xl xl:text-7xl font-bold cursor-default'>Miliony filmów i seriali czekają na Ciebie.</p>
                <p className='text-white text-left mb-3 lg:mb-6 text-2xl lg:text-5xl xl:text-7xl font-bold cursor-default'>Odkryj je już dziś!</p>
            </motion.div>
            <motion.div className='relative' variants={searchVariant} initial='hidden' animate='visible'>
                <input onChange={(e) => setValue(e.target.value)}  placeholder='Wyszukuj filmy i seriale' type="text" className='w-full py-2 xl:py-3 bg-transparent border border-white rounded outline-none text-white px-[3rem] focus:border-white/60 hover:border-white/80 md:text-base text-sm mt-4'  />
                <div className='absolute top-[50%] left-[1rem]'>
                    <AiOutlineSearch className='text-xl' />
                </div>
                <ResultsBar value={value} result={result} />
            </motion.div>
        </div>
        <div className='absolute bottom-0 right-0 p-2 md:p-6 text-xs md:text-sm text-white/80 cursor-default z-20'>{randomMovie?.title}</div>
    </motion.div>
  )
}
