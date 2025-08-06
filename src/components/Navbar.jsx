import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white font-semibold flex justify-between p-4 ">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div className="felx gap-2">
        <Link to="/Products">Products </Link>
        <Link to="/Services">Services </Link>
        <Link to="/Contact">Contact </Link>
      </div>
    </nav>
  );
};

export default Navbar;
