import "./header.css";
import logo from "../../assets/images/header-logo.png";
import Navigate from "../Navigate";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <div className="container_logo">
        <img src={logo} alt="header-logo" className="logo" />
      </div>
      <div>
        <Navigate />
      </div>
      <div className="container_btn">
        <div className="btn">
          <Link to="/login">Login</Link>
        </div>
        <div className="btn second">
          <Link to="/logout">Join us</Link>
        </div>
        <div className="icon-list">
          <AiOutlineUnorderedList size={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
