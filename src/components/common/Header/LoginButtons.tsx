import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { removeUser } from "../../../store/slices/userSlice";

export const LoginButtons: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const deleteUser = () => {
    dispatch(removeUser());
    localStorage.clear();
  };
  return (
    <>
      <div className="flex-col justify-center lg:justify-between items-center flex lg:flex-row mx-auto">
        {user.email ? (
          <>
            <button className="flex justify-center items-cetner">
              <Link
                to="/account"
                className="mx-auto py-2 px-2 xl:py-5 xl:px-7  border-solid border-2 border-gray lg:mr-2 hover:border-footerColor text-lg lg:text-2xl"
              >
                {" "}
                Account
              </Link>
            </button>
            <button className="flex justify-center items-cetner pt-3 lg:p-0">
              <Link
                to="/sign-in"
                className="mx-auto bg-currentRed py-2 px-6 xl:py-5 xl:px-8 lg:mr-2 hover:bg-hoverRed text-lg lg:text-2xl"
                onClick={deleteUser}
              >
                {" "}
                Logout
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className="flex justify-center items-cetner">
              <Link
                to="/sign-up"
                className="mx-auto bg-currentRed py-2 px-6 xl:py-5 xl:px-8 lg:mr-2 hover:bg-hoverRed text-sm lg:text-2xl"
              >
                {" "}
                Sign Up
              </Link>
            </button>
            <button className="flex justify-center items-cetner pt-3 lg:p-0">
              <Link
                to="/sign-in"
                className="mx-auto py-2 px-2 xl:py-5 xl:px-7  border-solid border-2 border-gray lg:mr-2 hover:border-footerColor text-sm lg:text-2xl"
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
};
