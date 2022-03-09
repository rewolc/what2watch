import "./header.scss";
import { ReactComponent as Logo } from "../../assets/circle.svg";

const Header = () => (
  <div className="header">
    <div className="logo-container"></div>
    <div className="nav-container">
      <div className="nav-item">Хочу посмотреть</div>
      <div className="nav-item">Просмотрено</div>
      <div className="nav-item">Заброшено</div>
    </div>
  </div>
);
export default Header;
