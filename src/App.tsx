import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/common/Header/Header";
import { Home } from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
