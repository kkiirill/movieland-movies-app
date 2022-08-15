import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../api/api";
import { useAppSelector } from "../../store";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
}

export const MovieItem: React.FC<Props> = ({ movie }) => {
  const [like, setLike] = useState<boolean>(false);
  const user = useAppSelector(state => state.user);
  const addLike = () => {
    if (user.email !== null) {
      setLike(!like)
    } else {
      alert('you need auth')
    }
  }
  return (
    <li className="p-1 relative movie-card">
      <div className="absolute top-[10%] left-[5%] w-full h-full opacity-0 hover:opacity-100 z-10" onClick={addLike}>
        {like ? (
          <img
            src={require("../../images/like.png")}
            alt="star"
            className="hover:scale-105 w-9 h-9 "
          />
        ) : (
          <img
            src={require("../../images/star.png")}
            alt="star"
            className="hover:scale-105 w-9 h-9 "
          />
        )}
      </div>
      <Link
        to={`movies/${movie.id}`}
        state={{ ...movie }}
        className="block relative ease-in-out movie-card mx-1"
      >
        <div
          className="h-full bg-cover bg-no-repeat z-1 overflow-x-hidden "
          style={{
            backgroundImage: `url(${BASE_IMAGE_URL}${
              movie.poster_path || movie.backdrop_path
            })`,
          }}
        >
          <div className="flex items-center justify-between pl-3 pt-2">
            <div className="flex flex-col">
              <h3 className="pt-24 pb-8 text-2xl font-bold">
                {movie?.title?.substring(0, 19) || movie.name}
              </h3>
              <div className="flex items-center">
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ ...movie }}
                  className="flex flex-row justify-center items-center bg-currentRed py-3 px-7 mr-2 text-[10px] max-w-[130px] hover:bg-hoverRed transition-colors"
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
      </Link>
    </li>
  );
};
