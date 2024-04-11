import { useEffect, useState } from "react";
import "./line.scss";

const Line = () => {
  const [currentIndexLine, setCurrentIndexLine] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const currentSectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentIndexLine(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPositionThumb = (index: number) => {
    switch (index) {
      case 2:
        return "0%";
      case 3:
        return "25%";
      case 4:
        return "50%";
      case 5:
        return "75%";
      default:
        return "0%";
    }
  };

  const toggleShowLine = (index: number) => {
    if (index >= 2 && index <= 5) {
      return "1";
    }
    return "0";
  };

  return (
    <div className="line" style={{ opacity: toggleShowLine(currentIndexLine) }}>
      <span
        className="line__thumb"
        style={{ top: getPositionThumb(currentIndexLine) }}></span>
    </div>
  );
};

export default Line;
