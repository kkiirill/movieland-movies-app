
import requests from "../../api/api";
import { MoviesTrending } from "../../components/common/MoviesMain/MoviesMain";
import { Movies } from "../../components/common/Movies/Movies";

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <MoviesTrending />
      <Movies title="In Trend" url={requests.fetchTrending} />
      <Movies title="Top Rated" url={requests.fetchTopRated} />
    </div>
  );
};
