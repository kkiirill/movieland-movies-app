import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import { useAppSelector } from "../../../store";
import { FavouriteMovie } from "../../../types";
import { getFirestore, updateDoc, doc, onSnapshot } from "@firebase/firestore";
import { FavouriteMovieItem } from "./FavouriteMovieItem";

export const FavouriteMovies: React.FC = memo(() => {
  const user = useAppSelector((state) => state.user);
  const [movies, setMovies] = useState<FavouriteMovie[]>([]);
  const db = getFirestore();
  console.log(movies);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedItems);
    });
  }, [db, user?.email]);
  const SampleNextArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[0.7%] cursor-pointer"
        onClick={onClick}
      >
        <img
          src={require("../../../images/rightArrow.png")}
          alt=""
          className="arrow"
        />
      </div>
    );
  };
  const SamplePrevArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[1%] z-10 cursor-pointer"
        onClick={onClick}
      >
        <img
          src={require("../../../images/leftArrow.png")}
          alt=""
          className="arrow prev"
        />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={null} />,
    prevArrow: <SamplePrevArrow onClick={null} />,
  };

  const deleteMovie = async (id: number) => {
    try {
      const filteredMovie = movies.filter((movie) => movie.id !== id);
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedItems: filteredMovie,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const moviesWithoutSlider = () => {
    return (
      <div className="wrapper mb-20">
        <ul className="flex flex-wrap flex-row-reverse justify-center gap-3">
          {movies.length > 0 &&
            movies?.map((movie) => (
              <div className="w-[220px]">
                <FavouriteMovieItem
                  key={movie.id}
                  movie={movie}
                  deleteMovie={deleteMovie}
                />
              </div>
            ))}
        </ul>
      </div>
    );
  };

  const moviesWithSlider = () => {
    return (
      <div className="wrapper mb-20">
        <ul className="">
          <Slider {...settings}>
            {movies?.map((movie) => (
              <FavouriteMovieItem
                key={movie.id}
                movie={movie}
                deleteMovie={deleteMovie}
              />
            ))}
          </Slider>
        </ul>
      </div>
    );
  };
  const emptyFavouriteMovies = () => {
    return (
      <div className=" flex flex-col justify-center items-cetner wrapper mb z-[100] overflow-hidden">
        <h2 className="text-2xl text-center py-10">Oooooppss now it's empty</h2>
        <div className="flex items-center justify-center">
          <img
            src={require("../../../images/spider.png")}
            alt="iron-man"
            className="text-center w-32 h-32 animate-spin"
          />
        </div>
      </div>
    );
  };

  return movies?.length === 0
    ? emptyFavouriteMovies()
    : movies?.length < 5
    ? moviesWithoutSlider()
    : moviesWithSlider();
});
