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
  const settings = {
    dots: hasDots,
    infinite: isInfinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: hasAutoPlay,
    autoplaySpeed: autoPlaySpeed,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                className="object-cover w-full lg:h-64 h-72"
                src={`src/assets/images/${item}.jpg`}
                alt="slider image"
              />
            </div>
          ))
        ) : type === "text" && Array.isArray(data) ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 min-h-[250px] p-5 text-center bg-[#fff7ed] shadow-lg border-gray-200 px-7 rounded-md"
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
        ) : type === "services" && Array.isArray(data) ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-5 bg-white rounded-md shadow-md h-[250px]"
            >
              <div className="flex items-center gap-4 p-2 mb-4">
                {item.svg}
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.heading}
                </h2>
              </div>
              <ul className="pl-4 text-lg text-gray-600">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="font-bold text-blue-900 size-8"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"></path>
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
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
