import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../api/api";
import { Movie } from "../../types";

export const MovieDetail: React.FC = memo(() => {
  const location = useLocation();
  const state = location.state as Movie;
  const backgroundImage = {
    backgroundImage: `url(${BASE_IMAGE_URL}${state?.backdrop_path})`,
  };
  return (
    <section className="border-t-8 border-t-currentRed">
      <div
        className="h-screen w-screen bg-cover bg-no-repeat z-1 overflow-y-hidden "
        style={backgroundImage}
      >
        <div className="flex justify-center items-center wrapper">
          <div className="flex flex-col">
            <h1 className="text-center  pt-10 lg:pt-20 xl:pt-60 pb-8 text-4xl md:text-7xl font-bold">
              {state.title || state.name}
            </h1>
            <p className="pb-8 text-base">{state.overview}</p>
            <div className="flex items-center flex-col md:flex-wrap justify-center gap-2">
              <div className="pb-4">
                <span className="text-base text-currentRed">Language</span>{" "}
                {state.original_language}
              </div>
              <div className="pb-4">
                <span className="text-base text-currentRed">Release</span>{" "}
                {state.release_date || state.first_air_date}
              </div>
              <div className="pb-4">
                <span className="text-base text-currentRed">Vote</span>{" "}
                {state.vote_average}
              </div>
            </div>
            <div className="flex justify-center items-center">
            <Link to="/trailer" className="flex justify-center items-center text-2xl">
              <img
                src='https://toppng.com/public/uploads/thumbnail/facebook-play-button-png-clip-art-white-video-play-butto-11562848811tluxzxqezx.png'
                alt=""
                className="w-24 h-24  hover:scale-105"
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
});
