import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px]'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />

        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={true}
          className='mx-auto max-w-full'
          width='960px'
          height='540px'
        />
      </div>

      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
            <div
            key={trailer.image} // use image as key
            className='relative cursor-pointer'
            onClick={() => setCurrentTrailer(trailer)}
            >
            <img
                src={trailer.image}
                alt='trailer'
                className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
                strokeWidth={1.6}
                className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 text-white'
            />
            </div>
        ))}
        </div>

    </div>
  );
};

export default TrailersSection;







// import React, { useState } from 'react';
// import { dummyTrailers } from '../assets/assets';
// import ReactPlayer from 'react-player';
// import BlurCircle from './BlurCircle';

// const TrailersSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0] || null);

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44">
//       <p className="text-gray-300 font-medium text-lg max-w-[960px]">Trailers</p>

//       <div className="relative mt-6">
//         <BlurCircle top="-100px" right="-100px" />

//         {typeof window !== 'undefined' && currentTrailer && (
//           <ReactPlayer
//   url="https://www.youtube.com/watch?v=WpW36ldAqnM"
//   controls
//   width="100%"
//   height="540px"
//   light={false} // shows thumbnail first
// />
//         )}
//       </div>

//       <div className="flex justify-center gap-6 mt-6 px-4 overflow-x-auto">
//         {dummyTrailers.map((trailer, index) => (
//           <img
//             key={index}
//             src={trailer.image}
//             alt={`Trailer ${index + 1}`}
//             className="w-40 h-24 object-cover cursor-pointer rounded-lg"
//             onClick={() => setCurrentTrailer(trailer)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrailersSection;
