import axios from "axios";
import { memo, useEffect, useState } from "react";
import requests from "../../../api/api";
import { Movie } from "../../../types";
import { MovieMain } from "./MovieMain";
import Slider from "react-slick";
import { LoaderMain } from "../../UI/Loaders/LoaderMain";

export const MoviesMain: React.FC = memo(() => {
  const [loader, setLoader] = useState<boolean>(false);

  const SampleNextArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[0.5%] cursor-pointer"
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
        className="absolute top-1/2 left-[0.5%] z-10 cursor-pointer"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow onClick={null} />,
    prevArrow: <SamplePrevArrow onClick={null} />,
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<Movie[]> => {
      try {
        setLoader(true);
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(request.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
      return [];
    };
    fetchData();
  }, []);
  return (
    <div className="moviesTrending-container overflow-y-hidden pb-6 md:pb-32">
      {loader ? (
        <LoaderMain />
      ) : (
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieMain key={movie.id} movie={movie} />
          ))}
        </Slider>
      )}
    </div>
  );
});
