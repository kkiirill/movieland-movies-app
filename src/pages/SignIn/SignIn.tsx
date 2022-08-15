import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/UI/Form/Form";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store";

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: res.user.email,
          id: res.user.uid,
        })
      );
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="top-0 fixed left-0 h-screen w-screen overflow-x-hidden z-100">
      <img
        className="block absolute top-0 left-0 w-full h-full object-cover z-100"
        src={require("../../images/bg-image.jpg")}
        alt="Background"
      />
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[500px] mx-auto text-white bg-black/80">
          <div className="max-w-[320px] mx-auto py-16">
            <h3 className="text-3xl ">Sign In</h3>
            <Form handleData={handleRegister} />
            <p className="py-4">
              <span className="text-gray">Don't have an account yet?</span>{" "}
              <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
