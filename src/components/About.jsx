import propTypes from "prop-types";

const About = ({ aboutData }) => {
  return (
    <div
      className="container w-full px-10 mx-auto mb-16 lg:px-0 pt-20"
      id="about"
    >
      <div className="w-full p-10">
        <h1 className="p-10 text-2xl font-bold text-center uppercase md:text-4xl">
          Who we are?
        </h1>
        <p className="text-2xl font-semibold text-center">
          We are a dedicated team of professionals with a passion for innovation
          in the transportation industry. With the growing need for efficient
          and trustworthy cab services, we&apos;ve set out to create a platform
          that not only meets but exceeds your expectations. Our goal is simple:
          to make your travel as smooth, comfortable, and convenient as
          possible.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-y-4 justify-evenly">
          {aboutData.slice(0, 2).map((data, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex flex-col items-center justify-center gap-3 lg:justify-start lg:flex-row">
                {data?.svg}
                <h2 className="text-xl font-bold text-center uppercase lg:text-start md:text-2xl">
                  {data?.heading}
                </h2>
              </div>
              <p className="text-lg font-medium text-center lg:text-start">
                {data?.desc}
              </p>
            </div>
          ))}
        </div>

        {aboutData[2]?.imageName && (
          <div className="flex items-center justify-center">
            <img
              src={` /images/${aboutData[2].imageName}.png`}
              alt="about image"
              className="w-full md:w-80"
            />
          </div>
        )}

        <div className="flex flex-col gap-y-4 justify-evenly">
          {aboutData.slice(3).map((data, index) => (
            <div key={index + 3} className="flex flex-col gap-2">
              <div className="flex flex-col items-center justify-center gap-3 lg:justify-start lg:flex-row">
                {data?.svg}
                <h2 className="text-xl font-bold text-center uppercase md:text-start md:text-2xl">
                  {data?.heading}
                </h2>
              </div>
              <p className="text-lg font-medium text-center lg:text-start">
                {data?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  aboutData: propTypes.arrayOf(propTypes.object).isRequired,
};

export default About;
