import { useState } from "react";
import "./drawer.scss";

const Drawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <button
        className={`btn-drawer ${isOpenDrawer ? "open" : ""}`}
        onClick={handleToggleDrawer}>
        <span className="btn-drawer__line"></span>
        <span className="btn-drawer__line"></span>
        <span className="btn-drawer__line"></span>
      </button>
      <div className={`drawer ${isOpenDrawer ? "open" : ""}`}>
        <div className="wrap">
          <nav>
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="">UU加速器</a>
              </li>
              <li className="nav-list__item">
                <a href="">UU加速盒</a>
              </li>
            </ul>
          </nav>
          <button className="wrap__btn-download">下载手游加速器</button>
        </div>
      </div>
    </>
  );
};

export default Drawer;
