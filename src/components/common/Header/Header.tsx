import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { removeUser } from "../../../store/slices/userSlice";
import "./Header.css";
export const Header: React.FC = memo(() => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const deleteUser = () => {
    dispatch(removeUser());
  };
  return (
    <header className="header sticky top-0 z-20">
      <div className="header-content flex justify-between px-16">
        <div className="flex my-2">
          <Link to="/" className="flex">
            <img
              src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-M-Transparent-PNG.png"
              alt="logo"
              className="w-[60px] h-full"
            />
            <span className="text-currentRed pl-3 pt-2 text-2xl">
              MOVIELAND
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex justify-between text-xl pt-5 ">
            <li className="pr-6 hover:text-currentRed transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="pr-6 hover:text-currentRed transition-colors">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="pr-6 hover:text-currentRed transition-colors">
              <Link to="/series">Series</Link>
            </li>
            <li className="pr-6 hover:text-currentRed transition-colors">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-currentRed transition-colors">
              <Link to="/contact ">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-beetween items-center">
          <Link to="/">
            <img
              src="https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg"
              alt=""
              className="block header-icon mr-2.5 hover:scale-105"
            />
          </Link>
          <>
            {user.email ? (
              <>
                <button className="">
                  <Link
                    to="/account"
                    className="py-2 px-5 border-solid border-2 border-gray mr-2"
                  >
                    {" "}
                    Account
                  </Link>
                </button>
                <button className="">
                  <Link
                    to="/sign-in"
                    className="bg-currentRed py-2 px-6 hover:bg-hoverRed"
                    onClick={deleteUser}
                  >
                    {" "}
                    Logout
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button className="">
                  <Link
                    to="/sign-up"
                    className="bg-currentRed py-2 px-6 mr-2 hover:bg-hoverRed"
                  >
                    {" "}
                    Sign Up
                  </Link>
                </button>
                <button className="">
                  <Link
                    to="/sign-in"
                    className="py-2 px-5 border-1-gray border-solid border-2 border-gray"
                  >
                    {" "}
                    Sign In
                  </Link>
                </button>
              </>
            )}
          </>
        </div>
      </div>
    </header>
  );
});
function userReducer(state: { user: unknown }): unknown {
  throw new Error("Function not implemented.");
}
