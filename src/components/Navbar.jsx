import logo from "../assets/MuskanLogo1.png";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/muskanjain2612-/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/muskipatni26" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
        </div>
    </nav>
  )
};

export default Navbar;