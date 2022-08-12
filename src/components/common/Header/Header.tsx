import { Link } from "react-router-dom";
import "./Header.css";
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content sticky flex justify-between px-16">
        <div className="flex my-2">
          <img
            src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-M-Transparent-PNG.png"
            alt="logo"
            className="w-[70px] h-full"
          />
          <h3 className="text-currentRed pl-3 pt-2 text-2xl">MOVIELAND</h3>
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
        <div className="flex justify-center items-center pt-3">
          <Link to="/">
            <img
              src="https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg"
              alt=""
              className="header-icon mr-2.5"
            />
          </Link>
          <Link to="/">
            <img
              src="https://www.citypng.com/public/uploads/small/116389850303ufdx83go2mmx7wz9iodbnh27afxknnf9bofncviac8z2n9w4rwksenu7mwokevjmznxdga1dt7xhiquhtxbvjjjdrqb3pt5rhuk.png"
              alt=""
              className="header-icon mr-2.5"
            />
          </Link>
          <Link to="/">
            <img
              src="https://www.pngkit.com/png/full/940-9406687_already-a-proact-user-employee-icon-white-png.png"
              alt=""
              className="header-icon mr-2.5"
            />
          </Link>
          <div className="flex justify-center items-center  hover:translate-y-2 transition-all hover:animate-pulse">
            <Link
              to="/"
              className="flex justify-center items-center py-3 px-10 bg-currentRed text-lg font-bold rounded-xl"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
