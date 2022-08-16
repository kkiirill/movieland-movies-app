import axios from "axios";
import { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import { SliderCount } from "../../../functions/sliderCount";
import { Movie } from "../../../types";
import { LoaderMovieItem } from "../../UI/Loaders/LoaderMovieItem";
import { MovieItem } from "./MovieItem";

interface Props {
  title: string;
  url: string;
}

export const Movies: React.FC<Props> = memo(({ title, url }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
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
  useEffect(() => {
    const fetchData = async (): Promise<Movie[]> => {
      setLoader(true);
      const { data } = await axios.get(url);
      setMovies(data.results);
      setLoader(false);
      return data;
    };
    fetchData();
  }, [url]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: SliderCount(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={null} />,
    prevArrow: <SamplePrevArrow onClick={null} />,
  };

  return (
    <div className="wrapper mb-20">
      <h2 className="text-4xl font-medium pb-6">{title}</h2>
      <ul className="scroll-smooth scrollbar-hide">
        {loader ? (
          <LoaderMovieItem />
        ) : (
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </Slider>
        )}
      </ul>
    </div>
  );
});
