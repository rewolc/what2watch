import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo1.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Logo className="logo-container" onClick={() => navigate("../")} />

      <div className="nav-container">
        <div className="nav-item" onClick={() => navigate("../")}>
          What2Whatch
        </div>
      </div>
    </div>
  );
};
export default Header;
