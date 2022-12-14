import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { removeUser } from "../../../store/slices/userSlice";

interface Props {
  setMenu: (x: boolean) => void;
  menu?: boolean;
}

export const LoginButtons: React.FC<Props> = memo(({ setMenu, menu }) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const deleteUser = () => {
    dispatch(removeUser());
    localStorage.removeItem("users");
  };
  return (
    <>
      <div className="flex-col justify-center lg:justify-between items-center flex lg:flex-row mx-auto">
        {user.email ? (
          <>
            <button
              className="flex justify-center items-cetner"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to="/account"
                className="mx-auto py-2 px-2 2xl:py-4 2xl:px-6  border-solid border-2 border-gray lg:mr-2 hover:border-footerColor text-lg 2xl:text-2xl"
              >
                {" "}
                Account
              </Link>
            </button>
            <button
              className="flex justify-center items-cetner pt-3 lg:p-0"
              onClick={() => setMenu(!menu)}
            >
              <Link
                to="/sign-in"
                className="mx-auto bg-currentRed py-2 px-6 2xl:py-4 2xl:px-7 lg:mr-2 hover:bg-hoverRed text-lg 2xl:text-2xl"
                onClick={deleteUser}
              >
                {" "}
                Logout
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className="flex justify-center items-cetner" onClick={() => setMenu(!menu)}>
              <Link
                to="/sign-up"
                className="mx-auto bg-currentRed py-2 px-6 2xl:py-4 2xl:px-7 lg:mr-2 hover:bg-hoverRed text-sm lg:text-2xl"
              >
                {" "}
                Sign Up
              </Link>
            </button>
            <button className="flex justify-center items-cetner pt-3 lg:p-0" onClick={() => setMenu(!menu)}>
              <Link
                to="/sign-in"
                className="mx-auto py-2 px-2 2xl:py-4 2xl:px-6  border-solid border-2 border-gray lg:mr-2 hover:border-footerColor text-sm lg:text-2xl"
              >
                {" "}
                Sign In
              </Link>
            </button>
          </>
        )}
      </div>
    </>
  );
});
