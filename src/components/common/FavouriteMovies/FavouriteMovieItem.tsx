import React from "react";
import { BASE_IMAGE_URL } from "../../../api/api";
import { FavouriteMovie } from "../../../types";

interface Props {
  movie: FavouriteMovie;
  deleteMovie: (id: number) => void;
}

export const FavouriteMovieItem: React.FC<Props> = ({ movie, deleteMovie }) => {
  return (
    <li key={movie.id} className="p-1 movie-card w-[220px]">
      <div className="block relative ease-in-out movie-card mx-1 ">
        <div
          className="absolute top-[5%] right-[5%]  movie-icon z-10"
          onClick={() => deleteMovie(movie.id)}
        >
          <img
            src={require("../../../images/close.png")}
            alt="star"
            className="hover:scale-105 w-9 h-9 "
          />
        </div>
        <div
          className="h-full bg-cover bg-no-repeat z-1 overflow-x-hidden "
          style={{
            backgroundImage: `url(${BASE_IMAGE_URL}${movie?.image})`,
          }}
        >
          <div className="flex items-center justify-between pl-3 pt-2">
            <div className="flex flex-col">
              <h3 className="pt-24 pb-8 text-xl font-bold">
                {movie?.title?.substring(0, 19) || movie.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
