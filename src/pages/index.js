import { Inter } from 'next/font/google'
import { getData, getTvData } from './api'
import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import PopularMovies from '@/components/PopularMovies'
import PopularTvSeries from '@/components/PopularTvSeries'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [movies, setMovies] = useState([])
  const [tv, setTv] = useState([])
  const [showGenres, setShowGenres] = useState(false)

  // fetch popular movies
  useEffect(() => {
    getData()
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  // fetch most rated tv series
  useEffect(() => {
    getTvData()
    .then(data => {
      setTv(data.results)
    })
  }, [])


  return (
    <main className={`${inter.className} bg-black w-full mx-auto h-full overflow-x-hidden`}>
      <NavBar setShowGenres={setShowGenres} showGenres={showGenres} />
      <Header movies={movies} setShowGenres={setShowGenres} />
      <div className='bg-gradient-to-b from-[-280%] via-[65%] from-blue-700 via-black to-blue-700 to-[280%]'>
      <PopularMovies movies={movies} />
      <PopularTvSeries movies={tv} />
      </div>
      <Footer />
    </main>
  )
}



