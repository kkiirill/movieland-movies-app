import axios from "axios";
import { memo, useEffect, useState } from "react";
import requests from "../../../api/api";
import { Movie } from "../../../types";
import { MovieTrending } from "./MovieMain";
import Slider from "react-slick";

export const MoviesTrending: React.FC = memo(() => {
  const SampleNextArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 right-[0.5%] cursor-pointer" onClick={onClick}>
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
      <div className="absolute top-1/2 left-[0.5%] z-10 cursor-pointer" onClick={onClick}>
        <img
          src={require("../../../images/leftArrow.png")}
          alt=""
          className="arrow prev"
        />
      </div>
    );
  };
  const settings = {
    dots: true,
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
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(request.data.results);
      } catch (err) {
        console.log(err);
      }
      return [];
    };
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="moviesTrending-container overflow-y-hidden pb-32">
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieTrending key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
});
