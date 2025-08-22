// components/MoviePosterCard.jsx

import movie1 from "../../../assets/ayushi_assets/movie.png";

const MoviePosterCard = ({
  overviewDetails,
  movie,
  alt = "Movie Poster",
  label = overviewDetails?.availability_status
||"Streaming Now",
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={  overviewDetails?.poster_image}
          alt={alt}
          className="w-46 h-64 sm:w-40 sm:h-72 md:w-84 md:h-96 max-w-full rounded-lg"
        />
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#21884A] text-white text-xs sm:text-sm md:text-base px-2 py-1 rounded">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MoviePosterCard;
