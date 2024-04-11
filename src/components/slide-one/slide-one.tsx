import "./slide-one.scss";
import iconMac from "../../assets/icon-mac.webp";
import iconMobile from "../../assets/icon-mobile.webp";
import iconSupport from "../../assets/icon-support.webp";
import iconWindow from "../../assets/icon_window.webp";

const SlideOne = () => {
  const listDownload = [
    {
      id: 0,
      name: "手游加速器",
      icon: iconMac,
    },
    {
      id: 1,
      name: "手游加速器",
      icon: iconMobile,
    },
    {
      id: 2,
      name: "手游加速器",
      icon: iconSupport,
    },
  ];

  return (
    <section className="container slide-one">
      <div className="content">
        <h2 className="content__heading">
          <span>不止快,</span>
          <span className="content__heading--primary">还很稳</span>
        </h2>
        <button className="btn-download">
          <span className="btn-download__icon">
            <img src={iconWindow} alt="icon" />
          </span>
          <span>下载（Windows版本）</span>
        </button>
        <div className="list">
          {listDownload.map(({ id, icon, name }) => (
            <button key={id} className="item">
              <span className="item__icon">
                <img src={icon} alt="icon" />
              </span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideOne;
