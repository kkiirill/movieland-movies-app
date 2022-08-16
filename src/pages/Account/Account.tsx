import { memo } from "react";
import { FavouriteMovies } from "../../components/common/FavouriteMovies/FavouriteMovies";

export const Account: React.FC = memo(() => {
  return (
    <section className="flex flex-col wrapper overflow-hidden">
      <img
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
        src={require("../../images/bg-wishlist.jpg")}
        alt="Background"
      />
      <div className="bg-black/70 h-full w-full fixed top-0 left-0 z-1"></div>
      <h1 className="text-center text-6xl py-10 z-10">My favourite movies</h1>
      <FavouriteMovies />
    </section>
  );
});
