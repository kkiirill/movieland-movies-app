
import { memo } from "react";
import requests from "../../api/api";
import { Movies } from "../../components/common/Movies/Movies";
import { MoviesMain } from "../../components/common/MoviesMain/MoviesMain";

export const Home: React.FC = memo(() => {
  return (
    <div className="relative">
      <MoviesMain />
      <Movies title="In Trend" url={requests.fetchTrending} />
      <Movies title="Top Rated" url={requests.fetchTopRated} />
    </div>
  );
});
