// Styles
import "./styles/CarouselItem.scss";

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
    <>
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
      />
    </>
  );
};

export { CarouselItem };
