import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

const FeaturedSection = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      {/* Header row with title + "View All" button */}
      <div className="flex items-center justify-between pt-20 pb-10 relative">
        {/* Decorative blur circle in background */}
        <BlurCircle top="0px" right="-80px" />

        {/* Section title */}
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>

        {/* "View All" button (navigates to movies page) */}
        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          {/* Arrow icon shifts slightly on hover */}
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4 h-4" />
        </button>
      </div>

      {/* Placeholder for movie cards */}
      <div className = 'flex flex-wrap max-sm:justify-center justify-between gap-8 mt-8'>
        {dummyShowsData.slice(0,4).map((show)=>(
          <MovieCard key= {show._id} movie = {show}/>
        ))}
      </div>

      {/* "Show More" button centered below cards */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => { navigate('/movies'); scrollTo(0, 0) }} // navigate + scroll to top
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  )
}


export default FeaturedSection