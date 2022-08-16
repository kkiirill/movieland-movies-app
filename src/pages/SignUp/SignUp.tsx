import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "@firebase/firestore";

import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/UI/Form/Form";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/slices/userSlice";
import { memo, useState } from "react";

export const SignUp: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);
  const handleSubmit = async (email: string, password: string) => {
    try {
      setLoader(true);
      const auth = getAuth();
      const db = getFirestore();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "users", email), {
        savedItemss: [],
      });
      dispatch(
        setUser({
          email: res.user.email,
          id: res.user.uid,
        })
      );
      setLoader(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="top-0 fixed left-0 h-screen w-screen z-100 overflow-x-hidden">
      <img
        className="block absolute w-full h-full object-cover z-100"
        src={require("../../images/bg-image.jpg")}
        alt="Background"
      />
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[500px] mx-auto text-white bg-black/80">
          <div className="max-w-[320px] mx-auto py-16">
            <h3 className="text-3xl ">Sign Up</h3>
            <Form title={"Sign Up"} handleData={handleSubmit} loader={loader} />
            <p className="py-4">
              <span className="text-gray">Already subsribed?</span>{" "}
              <Link to="/sign-in">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
