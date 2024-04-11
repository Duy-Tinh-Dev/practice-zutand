import "./slide-common.scss";
import { FC } from "react";

interface SlideCommonProps {
  imageNumber: string;
  heading: string;
  headingPrimary: string;
  descriptionOne: string;
  descriptionTwo: string;
  bgImage: string;
  color?: "white" | "black";
}

const SlideCommon: FC<SlideCommonProps> = ({
  imageNumber,
  heading,
  headingPrimary,
  descriptionOne,
  descriptionTwo,
  bgImage,
  color = "white",
}) => {
  return (
    <section
      className={`container slide-common ${color}`}
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={`content`}>
        <div className="content__number">
          <img src={imageNumber} alt="icon" />
        </div>
        <h2 className="content__heading">
          <span>{heading}</span>
          <span className="content__heading--primary">{headingPrimary}</span>
        </h2>
        <div className="content__description">
          <p> {descriptionOne}</p>
          <p>{descriptionTwo}</p>
        </div>
      </div>
    </section>
  );
};

export default SlideCommon;
