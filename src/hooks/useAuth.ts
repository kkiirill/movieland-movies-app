import { User } from "../types";
import { useAppSelector } from "./../store/index";
export const useAuth = () => {
  const { email, id } = useAppSelector((state) => state.user as User);
  return {
    isAuth: !!email,
    email,
    id,
  };
};
