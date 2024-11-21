import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";

const Carousel = ({
  hasDots,
  isInfinite,
  slidesToShow,
  slidesToScroll,
  hasAutoPlay,
  autoPlaySpeed,
  speed,
  data,
  type,
}) => {
  var settings = {
    dots: hasDots,
    infinite: isInfinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    autoplay: hasAutoPlay,
    autoplaySpeed: autoPlaySpeed,
    arrows: false,
  };

  return (
    <div className="w-full slider-container">
      <Slider {...settings}>
        {type === "image" && Array.isArray(data) ? (
          data.map((item, index) => (
            <div
              key={index}
              className="w-full h-full overflow-hidden rounded-md"
            >
              <img
                className="object-cover w-full h-64"
                src={`src/assets/images/${item}.jpg`}
                alt="slider image"
              />
            </div>
          ))
        ) : type === "text" && Array.isArray(data) ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 min-h-[250px] max-h-[500px] p-5 text-center bg-[#fff7ed] shadow-lg border-gray-200 px-7 rounded-md mx-4"
            >
              <p className="mb-10 text-xl leading-relaxed text-gray-700">
                {item.desc}
              </p>
              <div className="flex items-center justify-center gap-10 text-xl font-medium">
                <h2 className="font-bold">⁓ {item.clientName}</h2>
                <p>{"⭐".repeat(item.starCount)}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>No valid data to display</h1>
        )}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  hasDots: propTypes.bool.isRequired,
  isInfinite: propTypes.bool.isRequired,
  slidesToShow: propTypes.number.isRequired,
  slidesToScroll: propTypes.number.isRequired,
  hasAutoPlay: propTypes.bool.isRequired,
  speed: propTypes.number.isRequired,
  autoPlaySpeed: propTypes.number.isRequired,
  data: propTypes.array.isRequired,
  type: propTypes.string.isRequired,
};

export default Carousel;
