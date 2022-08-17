import { Link } from "react-router-dom";
interface Props {
  setMenu: (x: boolean) => void;
  menu?: boolean;
}

export const Navigation: React.FC<Props> = ({ setMenu, menu }) => {
  return (
    <nav className="lg:justify-between lg:items-center lg:flex">
      <ul className="flex-col lg:flex-row flex justify-between items-center lg:text-xl 2xl:text-2xl">
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/"  onClick={() => setMenu(!menu)}>
            Home
          </Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/movies" onClick={() => setMenu(!menu)}>Movies</Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/series" onClick={() => setMenu(!menu)}>Series</Link>
        </li>
        <li className="lg:pr-6 hover:text-currentRed transition-colors">
          <Link to="/pricing" onClick={() => setMenu(!menu)}>Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};
