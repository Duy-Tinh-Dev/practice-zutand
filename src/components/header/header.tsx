import logo from "../../assets/logo.webp";
import Drawer from "./drawer";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="left">
          <a href="" className="left__logo">
            <img src={logo} alt="logo" />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item active">
                <a href="">UU加速器</a>
              </li>
              <li className="nav__list-item">
                <a href="">UU加速器</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="btn-download">下 载</button>
        <Drawer />
      </div>
    </header>
  );
};

export default Header;
