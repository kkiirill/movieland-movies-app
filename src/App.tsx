import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Home } from "./pages/Home/Home";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
