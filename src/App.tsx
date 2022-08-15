import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import Contact from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { Pricing } from "./pages/Pricing/Pricing";
import { Series } from "./pages/Series/Series";
import {SignIn} from "./pages/SignIn/SignIn";
import {SignUp} from "./pages/SignUp/SignUp";
import { Trailer } from "./pages/Trailer/Trailer";
import './firebase';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/movies/" element={<MoviesPage />} />
        <Route path="/movies/" element={<MovieDetail />}>
          <Route path=":movieId" element={<MovieDetail />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/series" element={<Series />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
