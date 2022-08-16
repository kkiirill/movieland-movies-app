import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav className="lg:justify-between lg:items-center lg:flex">
      <ul className="flex-col lg:flex-row flex justify-between items-center lg:text-xl 2xl:text-2xl">
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/series">Series</Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};
