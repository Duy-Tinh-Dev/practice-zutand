import logoTopFooter0 from "../../assets/logo.webp";
import logoTopFooter1 from "../../assets/footer_1.webp";
import logoTopFooter2 from "../../assets/footer_2.webp";
import logoTopFooter3 from "../../assets/footer_3.webp";
import logoTopFooter4 from "../../assets/footer_4.webp";
import logoTopFooter5 from "../../assets/footer_5.webp";
import logoTopFooter6 from "../../assets/footer_6.webp";
import logoTopFooter7 from "../../assets/footer_7.webp";
import logoTopFooter8 from "../../assets/footer_8.webp";
import logoFooter2 from "../../assets/logo_footer_2.webp";
import qrImage from "../../assets/qr.webp";
import "./footer.scss";

const Footer = () => {
  const listLogo = [
    {
      id: 0,
      icon: logoTopFooter0,
    },
    {
      id: 1,
      icon: logoTopFooter1,
    },
    {
      id: 2,
      icon: logoTopFooter2,
    },
    {
      id: 3,
      icon: logoTopFooter3,
    },
    {
      id: 4,
      icon: logoTopFooter4,
    },
    {
      id: 5,
      icon: logoTopFooter5,
    },
    {
      id: 6,
      icon: logoTopFooter6,
    },
    {
      id: 7,
      icon: logoTopFooter7,
    },
    {
      id: 8,
      icon: logoTopFooter8,
    },
  ];

  const listQr = [
    {
      id: 0,
      icon: qrImage,
    },
    {
      id: 1,
      icon: qrImage,
    },
  ];

  const infoItems = [
    {
      id: 0,
      title: "商务业务咨询：",
      description: "张女士，QQ：2954028772",
    },
    {
      id: 1,
      title: "营销业务咨询: ",
      description: "邝小姐，邮箱：uujiasu@163.com",
    },
    {
      id: 2,
      title: "商务业务咨询：",
      description: "麦先生，邮箱：iloveuu_2012@163.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="top">
        <h2 className="top__heading">深受多个先锋产品的信任与合作</h2>
        <div className="list">
          {listLogo.map(({ id, icon }) => (
            <div key={id} className="list__item">
              <img src={icon} alt="icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          {listQr.map(({ id, icon }) => (
            <div key={id} className="wrap-qr">
              <span className="wrap-qr__img">
                <img src={icon} alt="icon" />
              </span>
              <div className="content">
                <h3 className="content__heading">官方公众号</h3>
                <br />
                <div className="content__description">
                  <p>微信扫一扫</p>
                  <p>获取一手活动资讯</p>
                </div>
              </div>
            </div>
          ))}
          <div className="info">
            {infoItems.map(({ id, title, description }) => (
              <div className="info__item" key={id}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <span className="right__logo">
            <img src={logoFooter2} alt="icon" />
          </span>
          <p>
            公司简介 - 客户服务 - 网易游戏隐私政策及儿童个人信息保护规则 -
            网易游戏 - 联系我们 - 商务合作 - 加入我们 网易公司版权所有
            ©1997-2024 网络游戏行业防沉迷自律公约
          </p>
          <p>ICP备案：粤B2-20090191-18</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
