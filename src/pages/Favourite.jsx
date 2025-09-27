import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlurCircle';

const Favourite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative px-6 md:px-16 lg:px-24 xl:px-44 mt-32">
      {/* Blur circles */}
      <BlurCircle top="-100px" right="-100px" />
      <BlurCircle bottom="-100px" left="-100px" />

      <h1 className="text-2xl font-semibold text-white mb-6 relative z-10">
        Favourite Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="text-white text-2xl font-semibold text-center mt-32 relative">
      No Movies Found
    </div>
  );
};

export default Favourite;
