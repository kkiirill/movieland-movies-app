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
          src="https://cdn-icons.flaticon.com/png/512/6188/premium/6188747.png?token=exp=1660387874~hmac=fcf9f4286fbfa7cd6ffb311e4bfc5591"
          alt=""
          className="bg-none w-12 h-12"
        />
      </div>
    );
  };
  const SamplePrevArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 left-[0.5%] z-10 cursor-pointer" onClick={onClick}>
        <img
          src="https://cdn-icons.flaticon.com/png/512/6188/premium/6188683.png?token=exp=1660387990~hmac=33b01bdf81b398154b6ba5d766b2fdc8"
          alt=""
          className="bg-none w-12 h-12"
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
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />,
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
    <div className="moviesTrending-container overflow-y-hidden">
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieTrending key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
});
