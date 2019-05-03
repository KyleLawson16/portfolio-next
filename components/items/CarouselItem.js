// Styles
import "./styles/CarouselItem.scss";

// Components
import { HyphenSVG } from "../icons";

// Helpers
import { urlTags } from "../../common/helpers";

const CarouselItem = ({
  category,
  name,
  shortDesc,
  url,
  slideDirection,
  index
}) => {
  return (
    <div
      className={`landing-carousel__slide ${slideDirection}`}
      style={{
        backgroundImage: `url(${urlTags(url, [
          "fm=jpg",
          "fl=progressive",
          "q=100",
          "w=1000"
        ])})`,
        left: `${index * 100}%`
      }}
    >
      <div className="landing-carousel__slide--content">
        <h3>
          <HyphenSVG color="#ffffff" marginBottom={6} /> {category}
        </h3>
        <h1>{name}</h1>
        <h3>{shortDesc}</h3>
      </div>
    </div>
  );
};

export { CarouselItem };
