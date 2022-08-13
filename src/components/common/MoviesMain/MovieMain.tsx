import { Movie } from "../../../types";
import { BASE_IMAGE_URL } from "../../../api/api";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

export const MovieTrending: React.FC<Props> = ({ movie }) => {
  const backgroundImage = {
    backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
  };

  return (
    <div className="">
      <div className="h-screen w-screen bg-cover bg-no-repeat z-1 overflow-y-hidden " style={backgroundImage}>
        <div className="flex items-center justify-between wrapper">
          <div className="flex flex-col w-1/2">
            <h1 className="pt-20 pb-8 text-7xl font-bold">{movie.name}</h1>
            <p className="pb-8 text-base">{movie.overview}</p>
            <div className="pb-4">
              <span className="text-base text-currentRed">Language</span>{" "}
              {movie.original_language}
            </div>

            <div className="pb-4">
              <span className="text-base text-currentRed">Release</span>{" "}
              {movie.first_air_date}
            </div>
            <div className="pb-4">
              <span className="text-base text-currentRed">Vote</span> {movie.vote_average}
            </div>
            <Link
              to="/"
              className="flex justify-center items-center bg-currentRed py-3 px-10 text-sm max-w-[190px]"
            >
              <img
                src="https://icon-library.com/images/play-button-icon-white/play-button-icon-white-8.jpg"
                alt=""
                className="w-5 h-6"
              />
              PLAY NOW
            </Link>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <Link to="/" className="flex justify-center items-center text-2xl">
              <img
                
                src='https://toppng.com/public/uploads/thumbnail/facebook-play-button-png-clip-art-white-video-play-butto-11562848811tluxzxqezx.png'
                alt=""
                className="w-24 h-24"
              />
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};