import PropTypes from "prop-types";

const PointsWithImage = ({ imgAlignment, textData, imageName }) => {
  return (
    <div className="container px-10 mx-auto lg:px-0">
      <div
        className={`flex ${
          imgAlignment == "right" ? "flex-row" : "flex-row-reverse"
        } lg:flex-row flex-col items-center shadow-md rounded-md bg-white mb-16 py-20 lg:gap-0 gap-14 p-10 border border-gray-200`}
      >
        <div className="flex flex-col justify-start w-full gap-5 lg:w-1/2">
          <h1 className="text-3xl font-bold lg:text-4xl text-my_blue">
            {textData.heading}
          </h1>
          <div className="flex flex-col gap-2">
            {textData.points.map((point, index) => {
              return (
                <li key={index} className="text-lg">
                  {point}
                </li>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={` /images/${imageName}.png`}
            alt="image"
            className="object-cover w-full h-96"
          />
        </div>
      </div>
    </div>
  );
};

PointsWithImage.propTypes = {
  imgAlignment: PropTypes.string.isRequired,
  textData: PropTypes.object.isRequired,
  imageName: PropTypes.string.isRequired,
};

export default PointsWithImage;
