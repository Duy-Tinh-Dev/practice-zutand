import "./slide-two.scss";
import icon0 from "../../assets/icon_window.webp";
import icon1 from "../../assets/item-1.webp";
import icon2 from "../../assets/item-2.webp";
import icon3 from "../../assets/item-3.webp";
import icon4 from "../../assets/item-4.webp";
import icon5 from "../../assets/item-5.webp";
import icon6 from "../../assets/item-6.webp";
import icon7 from "../../assets/item-7.webp";
import icon8 from "../../assets/item-8.webp";
import icon9 from "../../assets/item-9.webp";

const SlideTwo = () => {
  const listSupport = [
    {
      id: 0,
      name: "Windows",
      icon: icon0,
    },
    {
      id: 1,
      name: "Windows",
      icon: icon1,
    },
    {
      id: 2,
      name: "Windows",
      icon: icon2,
    },
    {
      id: 3,
      name: "Windows",
      icon: icon3,
    },
    {
      id: 4,
      name: "Windows",
      icon: icon4,
    },
    {
      id: 5,
      name: "Windows",
      icon: icon5,
    },
    {
      id: 6,
      name: "Windows",
      icon: icon6,
    },
    {
      id: 7,
      name: "Windows",
      icon: icon7,
    },
    {
      id: 8,
      name: "Windows",
      icon: icon8,
    },
    {
      id: 9,
      name: "Windows",
      icon: icon9,
    },
  ];

  return (
    <section className="container slide-two">
      <div className="content">
        <h2 className="content__heading">
          <span>所有游戏平台,</span>
          <span className="content__heading--primary">UU均已支持加速</span>
        </h2>
        <div className="list">
          {listSupport.map(({ id, icon, name }) => (
            <div key={id} className="list__item">
              <span className="icon">
                <img src={icon} alt="icon" />
              </span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideTwo;
