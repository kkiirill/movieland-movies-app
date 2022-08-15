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
    <div>
      <div className="h-screen w-screen bg-cover bg-no-repeat z-1 overflow-y-hidden " style={backgroundImage}>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full wrapper">
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <h1 className="text-center pt-20 pb-8 text-5xl lg:text-7xl font-bold">{movie.name}</h1>
            <p className="hidden md:block text-sm pb-8 lg:text-xl max-w-[700px]">{movie.overview}</p>
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
              to={`/movies/${movie.id}`}
              state={{...movie}}
              className="flex justify-center items-center bg-currentRed py-3 px-10 text-sm max-w-[190px] hover:bg-hoverRed transition-colors"
            >
              <img
                src="https://icon-library.com/images/play-button-icon-white/play-button-icon-white-8.jpg"
                alt=""
                className="w-5 h-6"
              />
              PLAY NOW
            </Link>
          </div>
          <div className="flex justify-center items-center pt-5 md:p-0 md:w-1/2">
            <Link to="/trailer" className="flex justify-center items-center text-2xl">
              <img
                src='https://toppng.com/public/uploads/thumbnail/facebook-play-button-png-clip-art-white-video-play-butto-11562848811tluxzxqezx.png'
                alt=""
                className="w-24 h-24  hover:scale-105"
              />
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
