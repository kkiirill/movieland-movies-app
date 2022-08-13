import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Movie } from "../../types";
import { MovieItem } from "./MovieItem";

interface Props {
  title: string;
  url: string;
}

export const Movies: React.FC<Props> = ({ title, url }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [display, setDisplay] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(600);
  useEffect(() => {
    const fetchData = async (): Promise<Movie[]> => {
      const { data } = await axios.get(url);
      setMovies(data.results);
      return data;
    };
    fetchData();
  }, [url]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log(movies)
  return (
    <div className="container wrapper mb-20">
      <h2 className="text-4xl font-medium pb-6">{title}</h2>
      <ul>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Slider>
      </ul>
    </div>
  );
};
