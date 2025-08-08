import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className=" bg-[#BC37BF]  text-white font-semibold flex justify-between p-4 ">
      <div>
        <Link to="/">
          <HomeIcon className="h-6 w-6 mr-2" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/Products">Products </Link>
        <Link to="/Services">Services </Link>
        <Link to="/Contact">Contact </Link>
      </div>
    </nav>
  );
};

export default Navbar;
