import { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { LoginButtons } from "./LoginButtons";
import { Navigation } from "./Navigation";
export const Header: React.FC = memo(() => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="header sticky top-0 ">
      <div className="header-content flex justify-between wrapper">
        <div className="flex justify-center items-center py-2">
          <Link to="/" className="flex">
            <img
              src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-M-Transparent-PNG.png"
              alt="logo"
              className="w-10 h-10  lg:w-[50px] lg:h-[50px] 2xl:w-[70px] 2xl:h-[70px] hover:scale-105"
            />
            <div className="hidden sm:flex justify-center items-center text-currentRed pl-3 text-2xl 2xl:text-3xl">
              MOVIELAND
            </div>
          </Link>
        </div>
        <div
          className="flex justify-center items-center lg:hidden"
          onClick={() => setMenu(!menu)}
        >
          {!menu ? (
            <img
              src={require("../../../images/menu.png")}
              className="w-10 h-10"
              alt="menu"
            />
          ) : (
            <img
              src={require("../../../images/close-menu.png")}
              className="w-10 h-10"
              alt="menu"
            />
          )}
        </div>
        {menu && (
          <article className="fixed top-0 left-0 h-screen w-1/3 bg-hoverRed z-[1010] lg:hidden">
            <div className="flex-col items-center">
              <Navigation menu={menu} setMenu={setMenu}/>
              <LoginButtons menu={menu} setMenu={setMenu}/>
            </div>
          </article>
        )}
        <div className="hidden lg:flex justify-between">
          <Navigation setMenu={setMenu} />
        </div>
        <div className="hidden lg:flex justify-between">
          <LoginButtons setMenu={setMenu}/>
        </div>
      </div>
    </header>
  );
});
