import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc} from "@firebase/firestore";

import { Link , useNavigate} from "react-router-dom";
import { Form } from "../../components/UI/Form/Form";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/slices/userSlice";

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (email: string, password: string) => {

    try {
      const auth = getAuth();
      const db = getFirestore()
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
        savedItemss: []
      })
      dispatch(setUser({
        email: res.user.email,
        id: res.user.uid,
      }))
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="top-0 fixed left-0 h-screen w-screen z-100">
      <img
        className="hidden sm:block absolute w-full h-full object-cover z-100"
        src={require("../../images/bg-image.jpg")}
        alt="Background"
      />
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[500px] mx-auto text-white bg-black/80">
          <div className="max-w-[320px] mx-auto py-16">
            <h3 className="text-3xl ">Sign Up</h3>
            <Form handleData={handleSubmit} />
            <p className="py-4">
              <span className="text-gray">Already subsribed?</span>{" "}
              <Link to="/sign-in">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
