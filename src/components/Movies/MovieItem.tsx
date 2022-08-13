import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../api/api";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
}

export const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <li>
      <div className="ease-in-out  movie-card mx-1">
        <div
          className="h-full bg-cover bg-no-repeat z-1 overflow-x-hidden"
          style={{
            backgroundImage: `url(${BASE_IMAGE_URL}${movie.poster_path})`,
          }}
        >
          <div className="flex items-center justify-between pl-3 pt-2">
            <div className="flex flex-col">
              <h3 className="pt-24 pb-8 text-2xl font-bold">
                {movie?.title?.substring(0, 19) || movie.name}
              </h3>
              <Link
                to="/"
                className="flex flex-row justify-center items-center bg-currentRed py-3 px-7 text-[10px] max-w-[130px] hover:bg-hoverRed transition-colors"
              >
                <img
                  src="https://icon-library.com/images/play-button-icon-white/play-button-icon-white-8.jpg"
                  alt=""
                  className="w-4 h-5"
                />
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
