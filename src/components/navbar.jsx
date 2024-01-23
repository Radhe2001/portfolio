import "../css/navbar.css";
import name_image from "../assets/R.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="parent-nav flex  border-slate-800 shadow-xl text-cyan-200 place-content-center ">
        <div className="nav-div flex place-items-center py-2">
          <div
            className="mr-auto h-6 w-8 bg-cover"
            style={{ backgroundImage: `url(${name_image})` }}
          ></div>
          <div className="flex gap-10 text-xl font-semibold place-items-center">
            <Link to={"/home"} className="">
              Home
            </Link>
            <Link to={"/about"} className="">
              About me
            </Link>
            <Link to={"/skill"} className="">
              Skills
            </Link>
            <Link to={"/project"} className="">
              Project
            </Link>
            <Link to={"/contact"} className="">
              Contact
            </Link>
            <div className="ml-4 bg-slate-800 px-5 py-1 rounded-3xl">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
