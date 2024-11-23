import propTypes from "prop-types";

const FaqComponent = ({ faqData }) => {
  return (
    <div className="container px-10 mx-auto lg:px-0 pt-20">
      <div className="w-full p-10 mb-16 bg-white border border-gray-200 rounded-md shadow-md">
        <h1 className="mb-10 text-2xl font-bold lg:text-4xl">
          Cab Bookings FAQs
        </h1>
        {faqData.map((data, index) => {
          return (
            <div key={index} className="w-full mb-5">
              <h3 className="mb-1 text-xl font-bold">{data.heading}</h3>
              <p className="text-lg font-medium text-gray-600">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FaqComponent.propTypes = {
  faqData: propTypes.arrayOf(propTypes.object).isRequired,
};

export default FaqComponent;
