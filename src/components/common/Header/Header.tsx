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
    <header className="header sticky top-0 ">
      <div className="header-content flex justify-between px-16">
        <div className="flex justify-center items-center py-2">
          <Link to="/" className="flex">
            <img
              src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-M-Transparent-PNG.png"
              alt="logo"
              className="w-16 h-16 lg:w-[80px] lg:h-[80px]"
            />
            <div className="flex justify-center items-center text-currentRed pl-3 text-2xl lg:text-3xl">
              MOVIELAND
            </div>
          </Link>
        </div>
        <nav className="flex justify-between items-center">
          <ul className="flex justify-between items-center text-2xl">
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
          </ul>
        </nav>
        <div className="flex justify-beetween items-center">
          {user.email ? (
            <>
              <button className="">
                <Link
                  to="/account"
                  className="py-2 px-5 border-solid border-2 border-gray mr-2 hover:border-footerColor"
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
                  className="py-2 px-5 border-1-gray border-solid border-2 border-gray hover:border-footerColor"
                >
                  {" "}
                  Sign In
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
});